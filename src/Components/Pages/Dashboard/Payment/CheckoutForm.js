import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const [cardError,setCardError]=useState('');
    const [success,setSuccess]=useState('');
    const [transactionId,setTransactionId]=useState('');
    const [processing,setProcessing]=useState(false);
    
    

    const stripe = useStripe();

    const elements=useElements();

    const {mobilePrice,buyersName,buyersEmail,_id}=order;
    console.log(mobilePrice)


    const [clientSecret, setClientSecret] = useState("");

  

    useEffect(() => {
        
        fetch("http://localhost:5000/create-payment-intent", {

          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
           
        },
          body: JSON.stringify({mobilePrice}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [mobilePrice]);
     
      

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card=elements.getElement(CardElement);
        if(card===null){
            return;
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
        })

        if(error){
            setCardError(error.message);
            console.log(error)
        }
        else{
            setCardError('')
        }

        setSuccess('')

        setProcessing(true);


        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: buyersName,
                  email:buyersEmail,
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return;
          }

          if(paymentIntent.status==='succeeded'){
            

            const payment={
                mobilePrice,
                transactionId:paymentIntent.id,
                buyersEmail,
                bookingId:_id,

            }

            fetch('http://localhost:5000/payments',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    setSuccess('Congrats! Your Payment Successfully complete');
            setTransactionId(paymentIntent.id);

                }
            })

           
          }
          setProcessing(false)
         

    }



    return (
    <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary mt-6 btn-sm' type="submit" disabled={!stripe ||!clientSecret ||processing}>
                Pay
            </button>
            
        </form>
        <p className='text-red-600'>{cardError}</p>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your TransactionId :<span className='text-orange-600 font-bold'>{transactionId}</span></p>
            </div>
        }
    </div>
    );
};

export default CheckoutForm;