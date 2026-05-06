import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
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
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4 text-green-800">
          By Interaction Type
        </h2>

        {timelineData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <div className="flex justify-center">
            <PieChart width={350} height={350}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}   // donut effect
                outerRadius={110}
                paddingAngle={6}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default States;