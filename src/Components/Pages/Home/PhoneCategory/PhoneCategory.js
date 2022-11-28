import { useQuery } from '@tanstack/react-query';

import React from 'react';
import Loading from '../../../Common/Loading/Loading';

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';

// Import Swiper styles

const PhoneCategory = () => {
    const navigate=useNavigate();

    const handelCategorySearch=(brand)=>{
        fetch(`http://localhost:5000/mobiles/${brand}`)
            
        .then(res=>res.json())
        .then(data=>{

            console.log(data)
            navigate(`/mobiles/${brand}`)
           
        })

        .catch(error=>console.error(error))
        
    }

    const { data: mobiles = [], isLoading } = useQuery({
        queryKey: ['mobiles'],
        queryFn: () => fetch('http://localhost:5000/mobiles')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
   

    const samsungs = mobiles.filter(mobile => mobile.brandName === 'samsung');
   
    const iphones = mobiles.filter(mobile => mobile.brandName === 'iphone');
    
    const others = mobiles.filter(mobile => mobile.brandName !== 'samsung' && mobile.brandName !== 'iphone');
  


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-20'>

           <div>
            <button onClick={()=>handelCategorySearch('samsung')} className='text-3xl font-bold text-center my-6 btn btn-active btn-primary mx-2'>Samsung Brand</button>
           <>
                <Swiper
                 

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-full w-full p-6"
                >
                    {
                        samsungs.map(samsung => <SwiperSlide key={samsung._id}><div className="flex justify-center items-center shadow-xl border-2 border-blue-500 rounded-2xl">
                            <figure><img className='w-96 h-52' src={samsung.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{(samsung.brandName).toUpperCase()}</h2>
                                <p>Model:{samsung.model}</p>
                                <p>{samsung.details}</p>
                                <p> Price:{samsung.resalePrice}</p>

                            </div>
                        </div></SwiperSlide>)
                    }
                </Swiper>
            </>
           </div>

            <div>
                <button onClick={()=>handelCategorySearch('iphone')} className='text-3xl font-bold text-center my-6 btn btn-active btn-secondary mx-2'>Iphone Brand</button>
            <>              
               <Swiper

                   spaceBetween={30}
                   centeredSlides={true}
                   autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                   }}
                   pagination={{
                       clickable: true,
                   }}
                   navigation={true}
                   modules={[Autoplay, Pagination, Navigation]}
                   className="mySwiper h-full w-full p-6"
               >
                   {
                       iphones.map(iphone => <SwiperSlide key={iphone._id}><div className="flex justify-center items-center shadow-xl border-2 border-blue-500 rounded-2xl">
                           <figure><img className='w-96 h-52' src={iphone.picture} alt="Movie" /></figure>
                           <div className="card-body">
                               <h2 className="card-title">{(iphone.brandName).toUpperCase()}</h2>
                               <p>Model:{iphone.model}</p>
                               <p>{iphone.details}</p>
                               <p> Price:{iphone.resalePrice}</p>

                           </div>
                       </div></SwiperSlide>)
                   }
               </Swiper>
           </>
            </div>

            <div>
                <button onClick={()=>handelCategorySearch('other')} className='text-3xl font-bold text-center my-6 btn btn-active btn-info mx-2'>Others Brand</button>
            <>
              <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-full w-full p-6"
                >
                    {
                        others.map(other => <SwiperSlide key={other._id}><div className="flex justify-center items-center shadow-xl border-2 border-blue-500 rounded-2xl">
                            <figure><img className='w-96 h-52' src={other.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{(other.brandName).toUpperCase()}</h2>
                                <p>Model:{other.model}</p>
                                <p>{other.details}</p>
                                <p> Price:{other.resalePrice}</p>

                            </div>
                        </div></SwiperSlide>)
                    }
                </Swiper>
            </>
            </div>
        </div>
    );
};

export default PhoneCategory;