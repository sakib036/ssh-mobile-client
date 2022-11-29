import React from 'react';
import notfound from '../../../assets/404-error-page-templates.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-full h-screen' src={notfound} alt="" />
            
        </div>
    );
};

export default NotFound;