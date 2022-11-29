import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Common/Loading/Loading';

const MyOrder = () => {

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading, refetch } = useQuery({
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

  const handelDeleteUser = (booking) => {
    const agree = window.confirm(`Are You Sure You Wont to Cancel Order ${booking.model}`);
    if (agree) {
      fetch(`http://localhost:5000/bookings/${booking._id}`, {
        method: 'DELETE',
        headers: {

          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },

      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {

            refetch();

            toast.error(`Delete Order ${booking.model} successfully `)
          }


        })
        .catch(error => console.error(error))
    }
  }



  return (
    <div>
      <h2 className='text-3xl my-5'>My Order</h2>

      {
        bookings.length > 0 ? <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Buyers</th>
                <th>Price</th>
                <th>Cancel Order</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {
                bookings.map((booking, index) => <tr key={index} className="hover">
                  <th>{index + 1}</th>
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
                    <br />
                    <span className="badge badge-ghost badge-sm">Email:{booking.buyersEmail}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">Location:{booking.buyersLocation}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">Mobile no:{booking.buyersMobileNo}</span>
                  </td>
                  <td>{booking.mobilePrice}</td>
                  <th>
                    <button onClick={() => handelDeleteUser(booking)} className="btn btn-ghost btn-xs">Cancel Order</button>
                  </th>
                  <td>{booking.mobilePrice&& !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-xs'>pay</button></Link>}

                    {booking.mobilePrice && booking.paid && <span className='text-green-500'>paid</span>}

                  </td>
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