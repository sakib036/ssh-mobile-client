import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Common/Loading/Loading';

const AllUser = () => {

  const {removeUser}=useContext(AuthContext);

  const { data: users = [], isLoading ,refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://ssh-mobile-server.vercel.app/users');
      const data = await res.json()
      return data;
    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }

  const handelDeleteUser = (user) => {
    const agree = window.confirm(`Are You Sure You Wont to Delete ${user.userName}`);
    if (agree) {
      fetch(`https://ssh-mobile-server.vercel.app/users/${user._id}`, {
        method: 'DELETE',
        headers: {
         
          authorization:`bearer ${localStorage.getItem('accessToken')}`
      },

      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {
            removeUser(user.userUid)
            console.log(user.userUid)
              .then(() => { })
              .catch(error => console.error(error))

            refetch();

            toast.error(`Delete User ${user.userName} successfully `)
          }


        })
        .catch(error => console.error(error))
    }
  }
  return (
    <div>
      <h1 className='my-20 text-5xl text-center'>All User</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={index} user={user} className="hover">
                <th>
                  {index + 1}
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

export default AllUser;