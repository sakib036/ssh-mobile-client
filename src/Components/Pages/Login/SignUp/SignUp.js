
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

// import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const [signUpError, setSignUpError] = useState('');
    console.log(signUpError)

    // const [createUserEmail, setCreateUserEmail] = useState('');


    // const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handelSignUp = data => {

        console.log(data.userType)


        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const picture = data.file[0];
                const formData = new FormData();
                formData.append('image', picture);
                const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb_key}`
                fetch(url, {
                    method: 'POST',
                    body: formData,
                })
                    .then(res => res.json())
                    .then(imageData => {
                        if (imageData.success) {

                            const userInfo = {
                                displayName: data.name,
                                userImage: imageData.data.url,

                            }
                            updateUserProfile(userInfo)
                                .then(() => {
                                    saveUserDb(data.name, data.email, data.userType, imageData.data.url,)
                                })
                                .catch(error => {
                                    console.error(error)
                                    setSignUpError(error.message)
                                })

                        }
                    })
                    .catch(error => {
                        console.error(error);
                        setSignUpError(error.message);

                    })

                })
                .catch(error => {
                    console.error(error);
                    setSignUpError(error.message);

                })

                const saveUserDb = (name, email, userType, userImage) => {
                    const user = {
                        userName: name,
                        userEmail: email,
                        userType: userType,
                        userImage: userImage
                    };
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.acknowledged) {
                                toast.success('User SignUp Successfully');
                                reset(data)
                                navigate('/')

                            }                             
                                
                        })

                        .catch(error => {
                            console.error(error);
                            setSignUpError(error.message);
    
                        })
            
                }
          

    }



    return (

        <div className='flex justify-center items-center my-12'>

            <div className='w-96 border-2 p-6 rounded-xl'>
                <div>
                    <h1 className='text-center text-3xl font-bold'>SignUp</h1>
                </div>


                <form onSubmit={handleSubmit(handelSignUp)}>


                    <div class="flex items-center space-x-6">
                        <div className="shrink-0">
                            <img className="h-16 w-16 object-cover rounded-full my-4" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                        </div>
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" {...register("file", { required: "Picture is required" })} className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                            {errors.file && <p className='text-red-400' role="alert">{errors.file?.message}</p>}
                        </label>
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-400' role="alert">{errors.name?.message}</p>}
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <select type="text" {...register("userType")} className="select select-bordered w-full  mt-6">

                            <option selected>User</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'password must be 6 character or longer' },
                        })} placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>

                    </div>
                    <input className='btn btn-primary w-full my-6' defaultValue='Sign UP' type="Submit" />
                </form>

                <p>Already Have Account please <Link to='/login' className='text-orange-800 font-bold'>LogIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;