import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import phone from '../../../../assets/phone.png';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    

    const navigate=useNavigate();
    const date=format(new Date(),'PP');
    
  

    const handelAddAProduct = (data) => {
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

                    const phoneImage = imageData.data.url;
                    
                    const brandName=(data.brandName).toLowerCase();
                    mobileInfo(phoneImage, brandName, data.model, data.used, data.originalPrice, data.resellPrice, data.sellerNumber, data.condition, data.details, data.sellerLocation);
                }
            })
            .catch(error => {
                console.error(error);

            })

        const mobileInfo = (phoneImage, brandName, model, used, originalPrice, resellPrice, sellerNumber, condition, details,sellerLocation) => {
           

            const mobile={
                sellerName:user.displayName,
                sellerEmail:user.email,
                sellerPhone:sellerNumber,
                sellerLocation,
                picture:phoneImage,
                brandName,
                model,
                yearsOfUse:used,
                originalPrice,
                resalePrice:resellPrice,
                condition,
                details,
                submitDate:date,

            }
            fetch('http://localhost:5000/mobiles', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization:`bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(mobile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.acknowledged) {
                                toast.success('Product Added Successfully');
                                reset(data)
                                navigate('/dashboard/myProduct')

                            }                             
                                
                        })

                        .catch(error => {
                            console.error(error);
                            
    
                        })
        }

    }


    return (
        <div className='flex justify-center items-center my-12'>

            <div className='w-3/4 border-2 p-6 rounded-xl'>
                <div>
                    <h1 className='text-center text-3xl font-bold my-10'>ADD A PRODUCT</h1>
                </div>


                <form onSubmit={handleSubmit(handelAddAProduct)}>


                    <div className="flex items-center justify-center space-x-6">
                        <div className="shrink-0">
                            <img className="h-16 w-16 object-cover rounded-full my-4" src={phone} alt="" />
                        </div>
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" {...register("file", { required: "Picture is required" })} className="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                            {errors.file && <p className='text-red-400' role="alert">{errors.file?.message}</p>}
                        </label>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" defaultValue={user?.displayName
                            } disabled className="input input-bordered w-full " />
                        
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" defaultValue={user?.email
                            } disabled className="input input-bordered w-full " />
                           
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" {...register("brandName", { required: "Brand Name is required" })} placeholder="brand-name" className="input input-bordered w-full " />
                            {errors.brandName && <p className='text-red-400' role="alert">{errors.brandName?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Mobile Model</span>
                            </label>
                            <input type="text" {...register("model", { required: "Model is required" })} placeholder="Model" className="input input-bordered w-full " />
                            {errors.model && <p className='text-red-400' role="alert">{errors.model?.message}</p>}
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Years OF Use</span>
                            </label>
                            <input type="number" {...register("used", { required: "Years OF Use is required" })} placeholder="Years OF Use" className="input input-bordered w-full " />
                            {errors.used && <p className='text-red-400' role="alert">{errors.used?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="number" {...register("originalPrice", { required: "Original Price is required" })} placeholder="Original Price" className="input input-bordered w-full " />
                            {errors.originalPrice && <p className='text-red-400' role="alert">{errors.originalPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Resell Price</span>
                            </label>
                            <input type="number" {...register("resellPrice", { required: "Resell Price is required" })} placeholder="Resell Price" className="input input-bordered w-full " />
                            {errors.resellPrice && <p className='text-red-400' role="alert">{errors.resellPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Seller Phone No</span>
                            </label>
                            <input type="number" {...register("sellerNumber", { required: "Seller Phone No is required" })} placeholder="Seller Phone No" className="input input-bordered w-full " />
                            {errors.sellerNumber && <p className='text-red-400' role="alert">{errors.sellerNumber?.message}</p>}
                        </div>
                    
                    <div>
                        <select type="text" {...register("condition", { required: "Condition is required" })} className="select select-bordered w-full  mt-6">

                            <option disabled selected>Choose the Phone Condition?</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Seller Location</span>
                            </label>
                            <input type="text" {...register("sellerLocation", { required: "Seller Location is required" })} placeholder="Seller Location" className="input input-bordered w-full " />
                            {errors.sellerLocation && <p className='text-red-400' role="alert">{errors.sellerLocation?.message}</p>}
                        </div>


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" {...register("details", { required: "Details is required" })} placeholder="Details" className="input input-bordered w-full " />
                        {errors.details && <p className='text-red-400' role="alert">{errors.details?.message}</p>}
                    </div>

                    <input className='btn btn-primary w-full my-6' defaultValue='Add Now' type="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;