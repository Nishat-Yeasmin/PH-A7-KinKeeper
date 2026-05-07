import React, { use } from 'react';
import {useEffect, useState} from 'react';
import FriendCard from '../../Components/UI/FriendCard';


const AllBooks = () => {
  
     const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("friendsData.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

   if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
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