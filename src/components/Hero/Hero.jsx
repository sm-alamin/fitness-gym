import React from 'react';

const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 gap-5 justify-center items-center'>
            <div>
                <h2 className='text-7xl font-extrabold'>Get Healthy Body With The Perfect Exercise </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='rounded-md py-2 px-2 text-purple-400 border bg-purple-500 text-white'>Join Now</button>
            </div>
            <div className='pt-4 '>
                <img className='rounded h-96 w-full' src="https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?w=740&t=st=1680388191~exp=1680388791~hmac=0d2be1db3e2da9ba7e061c1efb3f6163985ec847bc1f1edf2745c0c354b05da7" alt="" />
            </div>
        </div>
    );
};

export default Hero;