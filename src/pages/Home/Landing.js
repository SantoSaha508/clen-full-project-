import React from 'react';
import bgImg from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row ">
                    <div>
                        <p data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Best Quality</p>
                        <h1 data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="text-5xl font-bold">Professional Cleaning <br /> Service</h1>
                        <p data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="fade-up"
                            data-aos-delay="1400"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="btn btn-primary">GET STARTED</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bgImg} class="h-full " alt='' />
                    </div>
                </div>
            </div>
            <div  className='bg-gray-200 relative mt-[-50px] p-10 w-5/6 rounded-2xl mx-auto '>
                <h1 className='text-2xl mb-5 text-emerald-900'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <button class="btn btn-active btn-primary mt-3 ">REQUEST A QOUTE</button>
            </div>
        </>
    );
};

export default Landing;