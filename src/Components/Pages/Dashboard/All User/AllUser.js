import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handelMakeAdmin=()=>{

    }


    return (
        <div>
            <h1>All User</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //  userName: name,
                            //  userEmail: email,
                            //  userType: userType,
                            //  userImage: userImage


                            users.map((user, index) =><tr key={index} className="hover">
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
                            <th>
                              <button className="btn btn-ghost btn-xs">delete</button>
                            </th>
                          </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;