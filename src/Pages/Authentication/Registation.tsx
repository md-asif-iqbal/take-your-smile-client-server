import React from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useForm,  SubmitHandler  } from 'react-hook-form';
type Inputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  };
const Registation = () => {
    const { register,reset, handleSubmit,watch,getValues, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => 
    {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirm = data.confirmPassword;
        if (password === confirm) {
            console.log('done');
        }
        
        reset()
    };
 
    

    return (
      
        <form  className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title">Sign up</h2>
            <p className='text-left text-red-500'>
                {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
             </p>
            <div className="input-field">
                <input  type="text" placeholder="Full Name"  {...register("name", { required: {
                    value: true,
                    message: 'Full Name is required*'
                } })}/>
            </div>
            <p className=' text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
             </p>
            <div className="input-field">
                <input type="email" placeholder="Email" {...register("email", { required: {
                    value: true,
                    message: 'Email is required*'
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                }
                  })} />
              </div>
              <p className='text-left text-red-500'>
                {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span>{errors.password.message}</span> } 
                </p>
              <div className="input-field">
                <input  type="password" placeholder="Password" {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required*'
                    },
                    minLength: {
                        value: 8,
                        message: 'Enter At Least 8 Character'
                    }
                    })} />
              </div>
              <p className='text-left text-red-500'>
               
             </p>
              <div className="input-field">
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { 
                     validate: (val: string) => {
                        if (watch('password') !== val) {
                            

                            return ("Your passwords do no match")
                        }
                      },
                })} />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
              <a href="/" className="social-icon">
                  <BsFacebook />
                </a>
              
                <a href="/" className="social-icon">
                  <BsGoogle />
                </a>
              </div>
            </form>
    );
};

export default Registation;