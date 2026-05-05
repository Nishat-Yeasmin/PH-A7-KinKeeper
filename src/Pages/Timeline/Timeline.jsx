import { useEffect, useState } from "react";

import call from '../../../public/image/call.png';
import text from '../../../public/image/text.png';
import video from '../../../public/image/video.png';


const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showMenu, setShowMenu] = useState(false);

  //localStorage data load

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("timelineData")) || [];

    setTimelineData(storedData);
  }, []);

  //filter

  const filterData = filter === "all" ? timelineData : timelineData.filter(item => item.type === filter);

  //icon

  const getIcon = (type) => {
    if (type === "Call")
      return call;
    if (type === "Text")
      return text;
    if (type === "Video")
      return video;
  };

  return (

    <div className="w-11/12 mx-auto mt-8"> 
    {/* top section */}
    
     <div className='flex flex-col gap-4 mb-6'>
       <h1 className="text-4xl font-bold"> Timeline 
        </h1>
         
         {/* dropdown */} 
       <div className='relative w-64'>
          <div
    onClick={() => setShowMenu(!showMenu)}
    className="flex items-center justify-between border rounded-lg px-4 py-2 gap-1.5 bg-white cursor-pointer shadow-sm"
  >
    <span className="text-gray-500">
      {filter === "all" ? "Filter timeline" : filter}
    </span>
    <span><i className="fa-solid fa-angle-down"></i></span>
  </div>


           {showMenu && (
            <div className='absolute bg-white shadow-md rounded-lg mt-2 z-10 w-40'>
               <button onClick={() => { setFilter("all"); setShowMenu(false); }} className='block w-full text-left px-4 py-2 hover:bg-gray-100' > All </button> 
               <button onClick={() => { setFilter("Call"); setShowMenu(false); }} className='block w-full text-left px-4 py-2 hover:bg-gray-100' > Call </button> 
               <button onClick={() => { setFilter("Text"); setShowMenu(false); }} className='block w-full text-left px-4 py-2 hover:bg-gray-100' > Text </button> 
               <button onClick={() => { setFilter("Video"); setShowMenu(false); }} className='block w-full text-left px-4 py-2 hover:bg-gray-100' > Video </button>
                </div>)} 
                </div>
                 </div> 
                 
                 {/* timeline empty */} {filterData.length === 0 ? (<p className='text-gray-500'> No activities yet. </p>) : 
                 (<div className="space-y-4"> {filterData.map((item) => (<div key={item.id} className="card shadow-sm p-4 flex flex-row items-center gap-4 mb-7" > 
                 <img src={getIcon(item.type)} className="w-[35px]" alt="" /> 
                 <div> 
                  <h2 className="font-semibold capitalize"> {item.type} with {item.name} </h2> 
                  <p className="text-gray-500 text-sm"> {item.date} </p> 
                  </div> 
                  </div>))} 
                  </div>)}
                   </div>

  );
};

export default Timeline;