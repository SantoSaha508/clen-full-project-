import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/logo/google1.png';

const Login = () => {
    return (
        <div class="flex justify-center items-center h-screen bg-accent">
            <div class="max-w-sm shadow-2xl bg-base-100 rounded-xl">

                <h1 className='text-center text-2xl font-serif pt-4'>Login</h1>

                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn bg-emerald-700 text-white">Login</button>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <p>New to Clean Co?</p>
                        </div>
                        <div>
                            <Link className='text-orange-500' to="/signup">Create an account</Link>
                        </div>
                    </div>

                    <div class="divider">OR</div>

                    <button class="btn glass hover:btn-primary">
                        <img width={80} src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;