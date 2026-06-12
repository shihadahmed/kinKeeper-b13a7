import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function Stats() {
  const data = [
    { name: 'Call', value: 45, color: '#1E4638' }, 
    { name: 'Text', value: 30, color: '#7C3AED' }, 
    { name: 'Video', value: 25, color: '#22C55E' }, 
  ];

  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-6 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        
        <h1 className="text-4xl font-bold text-[#1E293B] mb-6 tracking-tight">
          Friendship Analytics
        </h1>

        <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
          <h3 className="text-base font-medium text-[#1E4638] mb-4">
            By Interaction Type
          </h3>

          <div className="w-full h-[320px] flex flex-col items-center justify-center relative select-none">
            <ResponsiveContainer width="100%" height="100%" className="outline-none focus:outline-none">
              <PieChart className="outline-none focus:outline-none" style={{ outline: 'none' }}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}   
                  outerRadius={105}  
                  paddingAngle={5}   
                  dataKey="value"
                  className="outline-none focus:outline-none"
                  style={{ outline: 'none' }}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      stroke="none"
                      style={{ outline: 'none' }}
                      className="outline-none focus:outline-none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center items-center gap-6 mt-4 text-xs text-[#64748B]">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <span 
                  className="w-2 h-2 rounded-full inline-block" 
                  style={{ backgroundColor: entry.color }}
                />
                <span>{entry.name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;