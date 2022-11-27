import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Common/Loading/Loading';

const MyProduct = () => {

    const { user } = useContext(AuthContext);
   

    const url = `http://localhost:5000/mobiles/dashboard/myProduct/${user.email}`;

    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['myProducts', user?.displayName],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }


    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
        <h2 className='text-3xl my-5'>My Product {myProducts.length}</h2>

        {
            myProducts.length>0? <div className="overflow-x-auto">
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
                        myProducts.map((myProduct, index) => <tr key={index} className="hover">
                        <th>{index+1}</th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={myProduct.picture} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{myProduct.brandName}</div>
                              <div className="text-sm opacity-50">{myProduct.model}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                        years Of Use:{myProduct.yearsOfUse}
                          <br/>
                          <span className="badge badge-ghost badge-sm">SubmitDate:{myProduct.submitDate}</span>
                          <br/>
                          <span className="badge badge-ghost badge-sm">Location:{myProduct.sellerLocation}</span>
                          <br/>
                          <span className="badge badge-ghost badge-sm">Mobile no:{myProduct.sellerPhone}</span>
                        </td>
                        <td>{myProduct.resalePrice}</td>
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

export default MyProduct;