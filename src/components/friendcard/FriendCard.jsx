import React from 'react';
import { Link } from 'react-router-dom';

function FriendCard({ friend }) {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'overdue': return 'bg-[#EF4444] text-white';
      case 'on-track': return 'bg-[#244D3F] text-white';
      default: return 'bg-[#EFAD44] text-white';
    }
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer">
        <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full object-cover mb-4 border border-[#F1F5F9]" />
        <h3 className="text-lg font-bold text-[#1E293B] mb-1">{friend.name}</h3>
        <p className="text-xs text-[#94A3B8] mb-4">{friend.days_since_contact}d ago</p>
        <div className="flex flex-wrap gap-1.5 justify-center mb-4 min-h-[24px]">
          {friend.tags?.map((tag, index) => (
            <span key={index} className="bg-[#E2FBF0] text-[#244D3F] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">{tag}</span>
          ))}
        </div>
        <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase text-center min-w-[100px] ${getStatusClass(friend.status)}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
}

export default FriendCard;