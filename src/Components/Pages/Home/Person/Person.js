import React from 'react';
import person from '../../../../assets/personas-con-smartphones.jpg';
import card_phone_1 from '../../../../assets/Card-Phone/card-phone-1.jpg';
import card_phone_2 from '../../../../assets/Card-Phone/card-phone-2.jpg';
import card_phone_3 from '../../../../assets/Card-Phone/card-phone-3 (2).jpg';


const Person = () => {

    const cardFeatures=[
        {
            id:1,
            body:'Courier is open from anywhere you can take delivery through courier will reach you within 24-48 hours.',
            image:card_phone_1,
            bgColor:"bg-gradient-to-r from-purple-500 to-pink-500",
        },
        {
            id:2,
            body:'This second hand mobile phone is most convenient for those who cannot buy their desired mobile just because of the high price.',
            image:card_phone_2,
            bgColor:'bg-gradient-to-r from-sky-500 to-indigo-500',

        },
        {
            id:3,
            body:"They may be pricey, but you get what you pay for. Well help you pick the best phone for you and make sure it's worth it.",
            image:card_phone_3,
            bgColor:'bg-gradient-to-r from-violet-500 to-fuchsia-500',
        },
    ]
    return (
        <div>
            <img className='w-full h-96' src={person} alt="" />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6'>
               {
                cardFeatures.map(cardFeature=> <div key={cardFeature.id} cardFeature={cardFeature} className="card  text-neutral-content">
                <div className={`card-body items-center ${cardFeature.bgColor} text-center flex flex-row justify-enter items-center`}>
                    
                    <p>{cardFeature.body}</p>
                    <img className='w-24 rounded-2xl' src={cardFeature.image} alt="" />
                </div>
            </div>)
               }
            </div>

        </div>
    );
};

export default Person;