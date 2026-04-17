import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend}) => {
     const statusColor =
                  friend.status === "Overdue" ? "bg-red-400 text-white" :
                  friend.status === "On-Track" ? 
                  "bg-green-900 text-white"
                  :
                  friend.status === "Almost Due" ? "bg-yellow-500 text-white" : "bg-gray-500 text-white";
    return (
        
            
                <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100  flex flex-col items-center  shadow-sm ">
  <figure className='w-[100px] h-[100px] rounded-full '>
    <img
      src={friend.picture}
      alt={friend.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">
      {friend.name}
    </h2>
    <p className='text-gray-400 text-center'>{friend.days_since_contact}d ago</p>
    
     <div className="flex gap-2 flex-wrap justify-center">
  {friend.tags.map((tag, index) => (
    <span key={index} className="badge badge-outline  bg-green-300 font-semibold border border-none rounded-4xl">
      {tag}
    </span>
  ))}
</div>

<div  className="w-full flex justify-center">

      <div className={`badge ${statusColor}`}>{friend.status}</div>
</div>
      
    
  </div>
</Link>
    );
};

export default FriendCard;