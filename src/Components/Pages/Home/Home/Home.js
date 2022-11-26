import React from 'react';
import Banner from '../Banner/Banner';
import Person from '../Person/Person';
import PhoneCategory from '../PhoneCategory/PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <Person></Person>
        </div>
    );
};

export default Home;