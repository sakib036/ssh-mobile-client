import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthProvider';
import Loading from '../../../../Common/Loading/Loading';

const AllSeller = () => {
    const {user}=useContext(AuthContext);

    const { data: allUsers = [] ,isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const users=allUsers.filter(user=>user.userType==='Seller');


    return (
        <div>
            <h1>All Seller</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            users?.map((user, index) =><tr key={index} className="hover">
                            <th>
                            {index+1}
                            </th>
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img src={user.userImage} alt="" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">{user.userName}</div>
                                  
                                </div>
                              </div>
                            </td>
                            <td>
                              {user.userEmail}
                              
                            </td>
                            <td>{user.userType}</td>
                            <td>Not Verify</td>
                            <th>
                                {
                                    user.userType==="Admin"?<button disabled className="btn btn-ghost btn-xs">Admin</button>:<button className="btn btn-ghost btn-xs">delete</button>
                                }
                              
                            </th>
                          </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;