import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Common/Loading/Loading';
import Banner from '../Banner/Banner';
import Person from '../Person/Person';
import PhoneCategory from '../PhoneCategory/PhoneCategory';
import Advertise from './Advertise/Advertise';

const Home = () => {

    const url = 'http://localhost:5000/advertise';

    const { data: advertises = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }


    })

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(advertises.length)


    return (
        <div>
            <Banner></Banner>
            {
                advertises.length>0 && <Advertise advertises={advertises}></Advertise>
            }
            <PhoneCategory></PhoneCategory>
           
            <Person></Person>
        </div>
    );
};

export default Home;