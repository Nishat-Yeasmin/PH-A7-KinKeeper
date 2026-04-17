import React from 'react';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-10  text-center'>
            <div className=''>
              <h1 className='font-bold text-[#1F2937] text-4xl mb-3'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] mb-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
<button className='text-white bg-green-950 p-2 font-semibold'>+ Add a Friend</button>
          </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/15 mx-auto mt-7 '>
            <div className='text-center bg-white border border-gray-100 rounded-2xl shadow-sm p-5 mt-7'>
                <h1 className='font-bold text-2xl text-green-900'>10</h1>
                <p>Total Friends</p>
            </div>
            <div className='text-center bg-white border border-gray-100 rounded-2xl shadow-sm p-5 mt-7'>
                <h1 className='font-bold text-2xl text-green-900'>3</h1>
                <p>On Track</p>
            </div>
            <div className='text-center bg-white border border-gray-100 rounded-2xl shadow-sm p-5  mt-7'>
                <h1 className='font-bold text-2xl text-green-900'>6</h1>
                <p>Need Attention</p>
            </div>
            <div className='w-full text-center bg-white border border-gray-100 shadow-sm rounded-2xl p-5  mt-7'>
                <h1 className='font-bold text-2xl text-green-900'>12</h1>
                <p>Interaction This Month</p>
            </div>
           </div>
        </div>
    );
};

export default Home;