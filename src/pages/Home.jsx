import React, { useState, useEffect } from 'react';
import FriendCard from '../components/friendcard/FriendCard';

function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch('/friends.json') 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  const totalFriends = friends.length;
  const onTrackCount = friends.filter(f => f.status?.toLowerCase() === 'on-track').length;
  const needAttentionCount = friends.filter(f => f.status?.toLowerCase() === 'overdue').length;
  const totalInteractions = 12; 

  const visibleFriends = friends.slice(startIndex, startIndex + 16);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 16);
    }
  };

  const handleNext = () => {
    if (startIndex + 16 < friends.length) {
      setStartIndex((prev) => prev + 16);
    }
  };

  if (loading) {
    return <div className="text-center py-20 font-bold text-[#64748B]">Loading...</div>;
  }

 return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] text-center mb-4 tracking-tight">
          Friends to keep close in your life
        </h2>

        <p className="text-sm md:text-base text-center font-semibold text-[#64748B] max-w-2xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="flex items-center gap-2 bg-[#244D3F] hover:bg-[#1b3a30] text-white px-6 py-3 rounded font-bold text-sm md:text-base transition-colors mb-16 shadow-sm">
          <span>+</span> Add a Friend
        </button>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-black text-[#244D3F] mb-3">{totalFriends}</span>
            <span className="text-sm md:text-base text-[#64748B] font-bold">Total Friends</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-black text-[#244D3F] mb-3">{onTrackCount}</span>
            <span className="text-sm md:text-base text-[#64748B] font-bold">On Track</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-black text-[#244D3F] mb-3">{needAttentionCount}</span>
            <span className="text-sm md:text-base text-[#64748B] font-bold">Need Attention</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-black text-[#244D3F] mb-3">{totalInteractions}</span>
            <span className="text-sm md:text-base text-[#64748B] font-bold">Interactions This Month</span>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mb-6">
          <h3 className="text-xl md:text-2xl font-black text-[#1E293B]">Your Friends</h3>
          
          <div className="flex gap-1">
            <button 
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`w-9 h-9 flex items-center justify-center rounded-l border border-[#E2E8F0] bg-white text-[#64748B] transition-colors ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#F8FAFC] active:bg-[#F1F5F9]'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              disabled={startIndex + 16 >= friends.length}
              className={`w-9 h-9 flex items-center justify-center rounded-r border-t border-b border-r border-[#E2E8F0] bg-white text-[#64748B] transition-colors ${startIndex + 16 >= friends.length ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#F8FAFC] active:bg-[#F1F5F9]'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleFriends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Home;