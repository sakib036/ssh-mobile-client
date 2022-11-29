import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Common/Loading/Loading';

const ReportedProduct = () => {

    const url = `https://ssh-mobile-server.vercel.app/reported`;

    const { data: reportedMobiles = [], isLoading, refetch } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
          }
    })
   

    if (isLoading) {
        return <Loading></Loading>
    }

    const handelDeleteUser=(reportedMobile)=>{

        const agree = window.confirm(`Are You Sure You Wont to Delete ${reportedMobile.model}`);
        if (agree) {
          fetch(`https://ssh-mobile-server.vercel.app/mobiles/${reportedMobile._id}`, {
            method: 'DELETE',
            headers: {
              
              authorization:`bearer ${localStorage.getItem('accessToken')}`
          },
    
          })
            .then(res => res.json())
            .then(data => {
    
              if (data.deletedCount > 0) {
               
                refetch();
    
                toast.error(`Delete Product ${reportedMobile.model} successfully `)
              }
    
    
            })
            .catch(error=>console.error(error))
        }

    }
    
    return (
        <div>
            <h1 className='my-20 text-5xl text-center'>Reported Product</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Seller Information</th>
                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            reportedMobiles?.map((reportedMobile, index) =><tr key={index} className="hover">
                            <th>
                            {index+1}
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img src={reportedMobile.picture} alt="" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">Mobile Brand:{reportedMobile.brandName}</div>
                                  <div >Mobile Model: {reportedMobile.model}</div>
                                  <div > Mobile Price :{reportedMobile.resalePrice}</div>
                                  
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>Seller Email: {reportedMobile.sellerEmail}</p>
                              <p>Seller Phone No: {reportedMobile.sellerPhone}</p>
                              <p>Seller Location:{reportedMobile.sellerLocation}</p>
                              
                            </td>
                            <th>
                            <button onClick={()=>handelDeleteUser(reportedMobile)} className="btn btn-ghost btn-xs">delete</button>
                            </th>
                          </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedProduct;