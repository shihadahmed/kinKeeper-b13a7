import React from 'react';

function FriendCard({ friend }) {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'overdue':
        return 'bg-red-50 text-[#EF4444] border border-red-100';
      case 'on-track':
        return 'bg-green-50 text-[#244D3F] border border-green-100';
      case 'almost due':
      default:
        return 'bg-amber-50 text-[#EFAD44] border border-amber-100';
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full object-cover mb-4 border border-[#F1F5F9] shadow-sm"
      />

      <h3 className="text-lg font-bold text-[#1E293B] mb-1">{friend.name}</h3>

      <p className="text-xs text-[#94A3B8] mb-4">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap gap-1.5 justify-center mb-4 min-h-[24px]">
        {friend.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-[#E2FBF0] text-[#244D3F] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide ${getStatusClass(friend.status)}`}>
        {friend.status}
      </span>
    </div>
  );
}

export default FriendCard;