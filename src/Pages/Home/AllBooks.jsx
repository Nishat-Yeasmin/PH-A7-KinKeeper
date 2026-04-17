import React, { use } from 'react';
import FriendCard from '../../Components/UI/FriendCard';

const friendsPromise = fetch('friendsData.json').then(res=>res.json());
const AllBooks = () => {
    const friends = use(friendsPromise);
    console.log(friends,"friends");
    return (
        <div className='my-12 '>
            <h2 className='font-bold text-3xl text-center mb-10'>Your friends</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto'>

            {
                friends.map((friend)=>{
                 
                    return(
                      <FriendCard friend={friend}/>
                    )
                })
            }
             </div>
            </div>

          );

};

export default AllBooks;