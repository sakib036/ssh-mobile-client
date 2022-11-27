import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Login = () => {

    
    const location=useLocation();
    const navigate=useNavigate();
   

    const form=location.state?.form?.pathname||'/'
    

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const {signIn}=useContext(AuthContext);

    const handelLogin = data => {
       
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate(form, {replace:true})
            console.log(user);

        })
        .catch(error => {
            console.error(error.message);
            setLoginError(error.message);

        })
    }

    return (
        <div className='my-12'>
            <div className='flex justify-center items-center'>

                <div className='w-96 border-2 p-6 rounded-xl'>
                    <div>
                        <h1 className='text-center text-3xl font-bold'>Login</h1>
                    </div>


                    <form onSubmit={handleSubmit(handelLogin)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be 6 character or longer' }
                            })} placeholder="password" className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                            <div>
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </div>
                            <label className="label">
                                <span className="label-text">Forget Password ?</span>
                            </label>

                        </div>
                        <input className='btn btn-primary w-full  my-6' defaultValue='Log In' type="Submit" />
                    </form>
                    <p>New to  SSH-Mobile please <Link to='/signup'  className='text-orange-800 font-bold'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;