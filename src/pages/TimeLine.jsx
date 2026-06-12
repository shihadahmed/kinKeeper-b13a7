import React, { useState } from 'react';
import { LuPhoneCall, LuChevronDown } from "react-icons/lu";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function TimeLine() {
  const [filter, setFilter] = useState("all");

  const timelineEvents = [
    { id: 1, type: "Meetup", typeText: "Meetup", person: "Tom Baker", date: "March 29, 2026", icon: <FaHandshake className="text-[#EAB308]" /> },
    { id: 2, type: "Text", typeText: "Text", person: "Sarah Chen", date: "March 28, 2026", icon: <MdOutlineTextsms className="text-[#64748B]" /> },
    { id: 3, type: "Meetup", typeText: "Meetup", person: "Olivia Martinez", date: "March 26, 2026", icon: <FaHandshake className="text-[#EAB308]" /> },
    { id: 4, type: "Video", typeText: "Video", person: "Aisha Patel", date: "March 23, 2026", icon: <MdOutlineVideocam className="text-[#64748B]" /> },
    { id: 5, type: "Meetup", typeText: "Meetup", person: "Sarah Chen", date: "March 21, 2026", icon: <FaHandshake className="text-[#EAB308]" /> },
    { id: 6, type: "Call", typeText: "Call", person: "Marcus Johnson", date: "March 19, 2026", icon: <LuPhoneCall className="text-[#1E293B]" /> },
    { id: 7, type: "Meetup", typeText: "Meetup", person: "Aisha Patel", date: "March 17, 2026", icon: <FaHandshake className="text-[#EAB308]" /> },
    { id: 8, type: "Text", typeText: "Text", person: "Olivia Martinez", date: "March 13, 2026", icon: <MdOutlineTextsms className="text-[#64748B]" /> },
    { id: 9, type: "Call", typeText: "Call", person: "Lisa Nakamura", date: "March 11, 2026", icon: <LuPhoneCall className="text-[#1E293B]" /> },
    { id: 10, type: "Call", typeText: "Call", person: "Sarah Chen", date: "March 11, 2026", icon: <LuPhoneCall className="text-[#1E293B]" /> },
    { id: 11, type: "Video", typeText: "Video", person: "Marcus Johnson", date: "March 6, 2026", icon: <MdOutlineVideocam className="text-[#64748B]" /> },
    { id: 12, type: "Video", typeText: "Video", person: "Ryan O'Brien", date: "February 24, 2026", icon: <MdOutlineVideocam className="text-[#64748B]" /> }
  ];

  const filteredEvents = filter === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] py-12 px-6 font-sans">
      <div className="max-w-[800px] mx-auto">
        
        <h1 className="text-4xl font-bold text-[#1E293B] mb-6 tracking-tight">Timeline</h1>

        <div className="mb-6 relative w-full max-w-[240px]">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-4 pr-10 py-2.5 text-sm text-[#64748B] shadow-sm focus:outline-none focus:border-[#244D3F] appearance-none cursor-pointer"
          >
            <option value="all">Filter timeline</option>
            <option value="meetup">Meetups</option>
            <option value="text">Texts</option>
            <option value="call">Calls</option>
            <option value="video">Videos</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#64748B] text-base">
            <LuChevronDown />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="w-full bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#CBD5E1] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center text-xl shrink-0">
                {event.icon}
              </div>
              
              <div className="flex flex-col">
                <p className="text-sm font-bold text-[#64748B]">
                  <span className="text-[#1E293B]">{event.typeText}</span> with {event.person}
                </p>
                <p className="text-xs font-medium text-[#94A3B8] mt-0.5">{event.date}</p>
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-12 bg-white border border-[#E2E8F0] rounded-xl text-sm font-bold text-[#94A3B8]">
              No timeline items found for this filter.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default TimeLine;