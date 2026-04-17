import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import call from '../../../public/image/call.png';
import text from '../../../public/image/text.png';
import video from '../../../public/image/video.png'

// const friendsPromise = fetch('friendsData.json').then(res=>res.json());

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id,"id");

    
    const friends = useLoaderData();
    console.log(friends,"friends");
    const expectedFriend = friends.find(friend => friend.id == id);
    console.log(expectedFriend,"expectedFriend");

    const statusColor =
                  expectedFriend.status === "Overdue" ? "bg-red-400 text-white" :
                  expectedFriend.status === "On-Track" ? 
                  "bg-green-900 text-white"
                  :
                  expectedFriend.status === "Almost Due" ? "bg-yellow-500 text-white" : "bg-gray-500 text-white";
    return (
        <div className='w-11/12 mx-auto flex gap-4'>
           {/* left side */}
           <div className='grid grid-cols-1 gap-3'>
           
           {/* img part */}
           <div className='card bg-white  flex flex-col items-center mt-7 mb-7 shadow-md '>
           <figure className='w-[100px] h-[100px] rounded-full '>
    <img
      src={expectedFriend.picture}
      alt={expectedFriend.name} />
  </figure>

  
    <h2 className="card-title text-2xl font-bold mb-2">
      {expectedFriend.name}
    </h2>

    <div  className="w-full flex justify-center mb-2">

      <div className={`badge ${statusColor}`}>{expectedFriend.status}</div>
</div>

<div className="flex gap-2 flex-wrap justify-center mb-2">
  {expectedFriend.tags.map((tag, index) => (
    <span key={index} className="badge badge-outline  bg-green-300 font-semibold border border-none rounded-4xl">
      {tag}
    </span>
  ))}
</div>

<div className='text-center p-4'>
    <p className='text-gray-500 mb-3'>{expectedFriend.bio}</p>
    <p className='text-gray-500'>Preferred: <span className='text-gray-500'>{expectedFriend.email}</span></p>
</div>
           </div>
           
           {/* bronge */}
           <div  className='card bg-white  flex flex-col items-center mt-7 mb-7 shadow-md p-2'>
             <p>Snooze 2 weeks</p>
           </div>

           {/* archive */}
           <div  className='card bg-white  flex flex-col items-center mt-7 mb-7 shadow-md p-2 '>
            <p>Archive</p>
           </div>
        {/* delete */}
        <div  className='card bg-white  flex flex-col items-center mt-7 mb-7 shadow-md p-2'>
           <button className='btn text-red-500'>Delete</button>
        </div>

           </div>

           {/* right side */}

          <div>
            
            {/* first */}
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-2.5 items-center text-center p-4 mt-7 '>
            <div className='card shadow-sm p-4'>
                <h2 className='text-2xl font-semibold text-green-950'>{expectedFriend.days_since_contact}</h2>
                <p className='text-gray-500'>Days Since Contact</p>
            </div>

            <div className='card shadow-sm p-4'>
                <h2 className='text-2xl font-semibold text-green-950'>{expectedFriend.goal}</h2>
                <p className='text-gray-500'>Goal (Days)</p>
            </div>

            <div className='card shadow-sm p-4'>
                <h2 className='text-2xl font-semibold text-green-950'>{expectedFriend.next_due_date}</h2>
                <p className='text-gray-500'>Next Date</p>
            </div>
           </div>

           {/* second */}

           <div className='card shadow-sm p-4 mt-7'>
            <div className='flex justify-between'>
                <h2 className='text-green-900 font-bold'>Relationship Goal</h2>
                <button className='btn  font-semibold '>Edit</button>
            </div>

            <p className='text-gray-500'>Connect every <span className='font-bold'>{expectedFriend.goal} days</span></p>
           </div>

           {/* third */}
           <div  className='card shadow-sm p-3 mt-7 flex flex-col '>
            <h2 className='font-bold text-green-900'>Quick Check-In</h2>
            <div className='card grid grid-cols-1 lg:grid-cols-3'>
                <div className='card shadow-sm p-3 m-3 flex flex-col items-center'>
                    <img className='w-[30px] ' src={call}alt="" />
                    <button className='text-gray-500 font-bold'>Call</button>
                </div>
                <div  className='card shadow-sm p-3 m-3 flex flex-col items-center'>
                    <img className='w-[30px] ' src={text} alt="" />
                    <button className='text-gray-500 font-bold'>Text</button>
                </div>
                <div  className='card shadow-sm p-3 m-3 flex flex-col items-center'>
                    <img className='w-[30px] ' src={video}alt="" />
                    <button className='text-gray-500 font-bold'>Video</button>
                </div>
            </div>
           </div>
          </div>

        </div>
    );
};

export default FriendDetails;