import React from 'react';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-10  text-center'>

          <div className=''>
              <h1 className='font-bold text-[#1F2937] text-4xl mb-3'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] mb-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
          </div>

<button className='text-white bg-green-950 p-2 font-semibold'>+ Add a Friend</button>
        </div>
    );
};

export default Home;