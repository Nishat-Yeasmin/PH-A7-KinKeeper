import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend,ResponsiveContainer } from 'recharts';
const States = () => {

    const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("timelineData")) || [];
    setTimelineData(storedData);
  }, []);

  // count data
  const getChartData = () => {
    const counts = {
      Text: 0,
      Call: 0,
      Video: 0,
    };

    timelineData.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    return [
      { name: "Text", value: counts.Text },
      { name: "Call", value: counts.Call },
      { name: "Video", value: counts.Video },
    ];
  };

  const data = getChartData();

  const COLORS = ["#7C3AED", "#14532D", "#16A34A"];

  return (
    <div className="w-11/12 mx-auto mt-6 md:mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-green-800">
          By Interaction Type
        </h2>

        {timelineData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <div className="w-full h-[320px] sm:h-[400px] md:h-[450px]">
             <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}   // donut effect
                outerRadius={110}
                paddingAngle={6}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom"
              height={36}
              wrapperStyle={{fontSize: "14px"}} />
            </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default States;