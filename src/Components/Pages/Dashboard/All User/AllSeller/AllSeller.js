import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../Contexts/AuthProvider';
import { BeakerIcon, CheckIcon } from '@heroicons/react/24/solid'


import Loading from '../../../../Common/Loading/Loading';

const AllSeller = () => {

    const {removeUser}=useContext(AuthContext)
    

    const { data: users = [] ,isLoading,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller');
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

   const handelDeleteUser=(user)=>{
    const agree = window.confirm(`Are You Sure You Wont to Delete ${user.userName}`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE',

      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {
            removeUser(user.userUid)
            console.log(user.userUid)
            .then(() => {})
            .catch(error=>console.error(error))

            refetch();

            toast.error(`Delete User ${user.userName} successfully `)
          }


        })
        .catch(error=>console.error(error))
    }
   }

   const handelVerify=(user)=>{

    fetch(`http://localhost:5000/user/${user._id}`,{
        method:'PUT',
      

  })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            toast.success('User verify Success');
            refetch();
        }
    })

    .catch(error=>console.error(error))

   }


    return (
        <div>
            <h1 className='my-20 text-5xl text-center'>All Seller</h1>
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
                            <th>
                            {
                                user.isVerify?<button disabled className="btn btn-ghost btn-xs"><span><CheckIcon className="h-6 w-6 text-green-500"/></span>Verified User</button>:
                                <button onClick={()=>handelVerify(user)} className="btn btn-ghost btn-xs">Verify</button>
                            }

                            </th>
                           
                            <th>
                            <button onClick={()=>handelDeleteUser(user)} className="btn btn-ghost btn-xs">delete</button>
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