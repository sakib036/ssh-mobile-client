import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../Components/Common/Loading/Loading';
import Navbar from '../../Components/Common/Navbar/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);


    const url = `http://localhost:5000/users/dashboard/${user?.email}`;

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
          }
    })
    console.log(users.userType)

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='w-[1280px] mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       {
                        (users.userType === "Admin")?<>
                        <li><Link to='/dashboard/seller'>All Seller</Link></li>
                        <li><Link to='/dashboard/users'>ALL USER</Link></li>
                        <li><Link to='/dashboard/report'>Reported Items</Link></li>
                        
                    </>:(users.userType === "Seller")?<>
                                <li><Link to='/dashboard/addProduct'>ADD A PRODUCT</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                               </>:<li><Link to='/dashboard/myOrder'>My Order</Link></li>


                       
                       }
                        


                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;