import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router'; 
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineNotificationsNone, MdOutlineArchive, MdDeleteOutline, MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";

function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalDays, setGoalDays] = useState(30);
  const [checkInStatus, setCheckInStatus] = useState("");

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        const foundFriend = data.find((f) => f.id === parseInt(id) || f.id === id);
        setFriend(foundFriend);
        if (foundFriend) {
          setGoalDays(foundFriend.goal_days || 30);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleSnooze = () => alert(`${friend.name}'s reminders snoozed for 2 weeks!`);
  const handleArchive = () => alert(`${friend.name} moved to Archive.`);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${friend.name}?`)) {
      alert(`${friend.name} deleted.`);
    }
  };

  const handleQuickCheckIn = (type) => {
    setCheckInStatus(`Logged a ${type} with ${friend.name}!`);
    setTimeout(() => setCheckInStatus(""), 4000);
  };

  if (loading) return <div className="text-center py-20 font-bold text-[#64748B]">Loading...</div>;
  if (!friend) return <div className="text-center py-20 font-bold text-[#EF4444]">Friend not found!</div>;

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] py-12 px-6 font-sans">
      
      <div className="max-w-[1200px] mx-auto mb-6">
        <Link to="/" className="text-sm font-bold text-[#244D3F] hover:underline flex items-center gap-1">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[260px]">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-16 h-16 rounded-full object-cover mb-3 border border-[#F1F5F9] shadow-sm" 
            />
            <h2 className="text-xl font-black text-[#1E293B] mb-1 tracking-tight">{friend.name}</h2>
            
            <div className="flex flex-col items-center gap-1 mb-3">
              <span className={`text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wide shadow-sm ${friend.status?.toLowerCase() === 'overdue' ? 'bg-[#EF4444] text-white' : 'bg-[#244D3F] text-white'}`}>
                {friend.status}
              </span>
              <span className="bg-[#E2FBF0] text-[#244D3F] text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                {friend.tags?.[0] || 'Friend'}
              </span>
            </div>

            <p className="text-xs italic text-[#64748B] font-bold mb-0.5">
              "Former colleague, great mentor"
            </p>
            <p className="text-[11px] font-bold text-[#94A3B8]">Preferred: email</p>
          </div>

          <div className="flex flex-col gap-3 h-[142px] justify-between">
            <button 
              onClick={handleSnooze}
              className="w-full bg-white border border-[#E2E8F0] text-[#1E293B] font-bold py-2 px-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:bg-[#F8FAFC] flex items-center justify-center gap-2 text-xs h-9 transition-colors"
            >
              <span className="text-base text-[#1E293B]"><MdOutlineNotificationsNone /></span> Snooze 2 Weeks
            </button>
            
            <button 
              onClick={handleArchive}
              className="w-full bg-white border border-[#E2E8F0] text-[#1E293B] font-bold py-2 px-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:bg-[#F8FAFC] flex items-center justify-center gap-2 text-xs h-9 transition-colors"
            >
              <span className="text-sm text-[#1E293B]"><MdOutlineArchive /></span> Archive
            </button>
            
            <button 
              onClick={handleDelete}
              className="w-full bg-white border border-[#E2E8F0] text-[#EF4444] font-bold py-2 px-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:bg-red-50 flex items-center justify-center gap-2 text-xs h-9 transition-colors"
            >
              <span className="text-sm text-[#EF4444]"><MdDeleteOutline /></span> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          
          <div className="flex flex-col gap-4 h-[260px] justify-between">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[85px]">
                <span className="block text-2xl font-black text-[#244D3F] mb-0.5">{friend.days_since_contact}</span>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wide">Days Since Contact</span>
              </div>
              
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[85px]">
                <span className="block text-2xl font-black text-[#244D3F] mb-0.5">{goalDays}</span>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wide">Goal (Days)</span>
              </div>
              
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[85px]">
                <span className="block text-base font-black text-[#244D3F] mb-0.5">Feb 27, 2026</span>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wide">Next Due</span>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-black text-[#244D3F] text-sm tracking-tight">Relationship Goal</h4>
                <button 
                  onClick={() => setIsEditingGoal(!isEditingGoal)}
                  className="bg-white border border-[#E2E8F0] text-[10px] font-bold text-[#1E293B] px-3 py-1 rounded-md hover:bg-[#F8FAFC] shadow-sm transition-colors"
                >
                  {isEditingGoal ? 'Done' : 'Edit'}
                </button>
              </div>
              
              {isEditingGoal ? (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold text-[#64748B]">Connect every</span>
                  <input 
                    type="number" 
                    value={goalDays} 
                    onChange={(e) => setGoalDays(parseInt(e.target.value) || 0)}
                    className="w-12 border border-[#E2E8F0] rounded px-1.5 py-0.5 text-xs font-black text-[#1E293B] text-center focus:outline-none"
                  />
                  <span className="text-xs font-bold text-[#64748B]">days</span>
                </div>
              ) : (
                <p className="text-xs font-bold text-[#64748B]">
                  Connect every <span className="text-[#1E293B] font-black">{goalDays} days</span>
                </p>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[142px] flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-black text-[#244D3F] text-sm tracking-tight">Quick Check-In</h4>
              {checkInStatus && (
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                  {checkInStatus}
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4 flex-1 items-stretch">
              <button 
                onClick={() => handleQuickCheckIn("Call")}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:bg-[#F1F5F9] transition-all group"
              >
                <span className="text-lg text-[#1E293B] group-hover:scale-105 transition-transform"><LuPhoneCall /></span>
                <span className="text-[10px] font-bold text-[#1E293B]">Call</span>
              </button>
              
              <button 
                onClick={() => handleQuickCheckIn("Text")}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:bg-[#F1F5F9] transition-all group"
              >
                <span className="text-lg text-[#1E293B] group-hover:scale-105 transition-transform"><MdOutlineTextsms /></span>
                <span className="text-[10px] font-bold text-[#1E293B]">Text</span>
              </button>
              
              <button 
                onClick={() => handleQuickCheckIn("Video")}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:bg-[#F1F5F9] transition-all group"
              >
                <span className="text-lg text-[#1E293B] group-hover:scale-105 transition-transform"><MdOutlineVideocam /></span>
                <span className="text-[10px] font-bold text-[#1E293B]">Video</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default FriendDetails;