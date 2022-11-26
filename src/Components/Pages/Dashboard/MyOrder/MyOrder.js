import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Common/Loading/Loading';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }


    })

    if (isLoading) {
        return <Loading></Loading>
    }
const {buyersName,buyersEmail,buyersMobileNo,
    mobileBrand,
    mobileModel,
    buyersLocation,mobilePrice , picture}=bookings;


    return (
        <div>
            <h2 className='text-3xl my-5'>My Order</h2>

            {
                bookings?<div className="overflow-x-auto">
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
                            bookings.map((booking, index) => <tr key={index} className="hover">
                            <th>{index+1}</th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img src={booking.picture} alt="" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">{booking.mobileBrand}</div>
                                  <div className="text-sm opacity-50">{booking.mobileModel}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              Name:{booking.buyersName}
                              <br/>
                              <span className="badge badge-ghost badge-sm">Email:{booking.buyersEmail}</span>
                              <br/>
                              <span className="badge badge-ghost badge-sm">Location:{booking.buyersLocation}</span>
                              <br/>
                              <span className="badge badge-ghost badge-sm">Mobile no:{booking.buyersMobileNo}</span>
                            </td>
                            <td>{booking.mobilePrice}</td>
                            <th>
                              <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                            <th>
                              <button className="btn btn-ghost btn-xs">Pay</button>
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

export default MyOrder;