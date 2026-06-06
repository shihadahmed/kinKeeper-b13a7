import React from 'react';


function Error() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 font-mono select-none"
      style={{ backgroundColor: '#244D3F', color: '#D1FAE5' }}
    >
      <div className="max-w-2xl w-full text-left md:pl-12">
        
        {/* Error Header Block */}
        <div className="inline-block bg-gray-300 text-[#244D3F] px-6 py-1 text-2xl md:text-3xl font-bold mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          Error - 404
        </div>

        {/* Message */}
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          An error has occurred, to continue:
        </p>

        {/* List Options */}
        <ul className="space-y-3 text-base md:text-lg mb-12 list-none pl-0">
          <li className="flex items-start">
            <span className="mr-2">*</span>
            <span>
              Return to our{' '}
              <a href="/" className="underline hover:text-white transition-colors">
                homepage
              </a>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">*</span>
            <span>
              Send us an{' '}
              <a href="mailto:webmaster@example.com" className="underline hover:text-white transition-colors">
                e-mail
              </a>{' '}
              about this error and try later.
            </span>
          </li>
        </ul>

        {/* Footer Navigation */}
        <div className="flex items-center gap-4 text-base md:text-lg mt-6 pt-6 border-t border-emerald-800/30">
          <a href="/" className="underline hover:text-white transition-colors">
            index
          </a>
          <span className="text-emerald-700">|</span>
          <a href="mailto:webmaster@example.com" className="underline hover:text-white transition-colors">
            webmaster
          </a>
        </div>

      </div>
    </div>
  )
}

export default Error