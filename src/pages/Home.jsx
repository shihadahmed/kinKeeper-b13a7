import React from 'react'

function Home() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] text-center mb-4 tracking-tight">
          Friends to keep close in your life
        </h2>

        <p className="text-sm md:text-base text-center text-[#64748B] max-w-2xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="flex items-center gap-2 bg-[#244D3F] hover:bg-[#1b3a30] text-white px-6 py-3 rounded font-medium text-sm md:text-base transition-colors mb-16 shadow-sm">
          <span>+</span> Add a Friend
        </button>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-bold text-[#244D3F] mb-3">10</span>
            <span className="text-sm md:text-base text-[#64748B] font-medium">Total Friends</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-bold text-[#244D3F] mb-3">3</span>
            <span className="text-sm md:text-base text-[#64748B] font-medium">On Track</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-bold text-[#244D3F] mb-3">6</span>
            <span className="text-sm md:text-base text-[#64748B] font-medium">Need Attention</span>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-4xl md:text-5xl font-bold text-[#244D3F] mb-3">12</span>
            <span className="text-sm md:text-base text-[#64748B] font-medium">Interactions This Month</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Home