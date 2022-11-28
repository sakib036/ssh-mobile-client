import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Common/Loading/Loading';

const MyProduct = () => {

  const { user } = useContext(AuthContext);


  const url = `http://localhost:5000/mobiles/dashboard/myProduct/${user?.email}`;

  const { data: myProducts = [], isLoading, refetch } = useQuery({
    queryKey: ['myProducts', user?.email],
    queryFn: async () => {
      const res = await fetch(url)
      const data = await res.json()
      return data;
    }


  })

  if (isLoading) {
    return <Loading></Loading>
  }

  const handelDeleteProduct = id => {
    const agree = window.confirm(`Are You Sure You Wont to Delete`);
    if (agree) {
      fetch(`http://localhost:5000/mobiles/${id}`, {
        method: 'DELETE',

      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {

            refetch();

            toast.error('Delete Product successfully ')
          }


        })
        .catch(error=>console.error(error))
    }

  }

  const handelAdvertise=myProduct=>{
   
    fetch(`http://localhost:5000/mobiles/${myProduct._id}`,{
            method:'PUT',
          

      })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Make Advertise  Success');
                refetch();
            }
        })

        .catch(error=>console.error(error))

  }




  return (
    <div>
      <h2 className='text-3xl my-5'>My Product {myProducts.length}</h2>

      {
        myProducts.length > 0 ? <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Buyers</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {
                myProducts.map((myProduct, index) => <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={myProduct.picture} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{myProduct.brandName}</div>
                        <div className="text-sm opacity-50">{myProduct.model}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    years Of Use:{myProduct.yearsOfUse}
                    <br />
                    <span className="badge badge-ghost badge-sm">SubmitDate:{myProduct.submitDate}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">Location:{myProduct.sellerLocation}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">Mobile no:{myProduct.sellerPhone}</span>
                  </td>
                  <td>{myProduct.resalePrice}</td>
                  <th>
                    <button onClick={() => handelDeleteProduct(myProduct._id)} className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                  <th>
                    <button onClick={()=>handelAdvertise(myProduct)} className="btn btn-ghost btn-xs">Advertise</button>
                  </th>
                </tr>)
              }

            </tbody>
          </table>
        </div>
          :
          <h3>No Available Order Found</h3>
      }
    </div>
  );
};

export default MyProduct;