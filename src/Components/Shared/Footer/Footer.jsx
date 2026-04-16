import React from 'react';
import footer from '../../../../public/image/logo-xl.png'
import insta from '../../../../public/image/instagram.png'
import facebook from '../../../../public/image/facebook.png'
import twitter from '../../../../public/image/twitter.png'
const Footer = () => {
    return (
        <div className='bg-green-950 '>
            <div className='w-11/12 mx-auto py-10 '>
                <div className='text-center flex flex-col items-center'>
                <img src={footer} alt="Footer Logo" />

                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>

             <div className='text-center flex flex-col items-center mt-7'>
                <h2 className=' text-white font-bold text-2xl mb-4'>Social Links</h2>

                <div className='flex gap-3'>
                        <img src={insta} alt="Instagram" />

                        <img src={facebook} alt="Facebook" />

                        <img src={twitter} alt="Twitter" />

                </div>
             </div>

            <div className='text-gray-600 mt-5'>
                <hr />
            </div>

            <div className='text-gray-500 flex justify-between mt-3.5 '>
                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className='flex justify-between gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;