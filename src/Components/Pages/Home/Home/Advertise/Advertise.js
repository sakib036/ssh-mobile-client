import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Advertise = ({advertises}) => {
    return (
        <div className='my-20'>

            <h1 className='text-center sm:text-3xl font-Bold'>This Is the Most Popular</h1>
             <div>
            
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
                        advertises.map(advertise => <SwiperSlide key={advertise._id}><div className="flex justify-center items-center shadow-xl border-2 border-blue-500 rounded-2xl">
                            <figure><img className='w-96 h-52 p-6' src={advertise.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{(advertise.brandName).toUpperCase()}</h2>
                                <p>Model:{advertise.model}</p>
                                <p>{advertise.details}</p>
                                <p> Price:{advertise.resalePrice}</p>

                            </div>
                        </div></SwiperSlide>)
                    }
                </Swiper>
            </>
           </div>
        </div>
    );
};

export default Advertise;