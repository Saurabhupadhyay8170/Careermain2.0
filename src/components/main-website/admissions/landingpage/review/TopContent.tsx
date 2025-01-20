import React from 'react';

const TopContent = () => {
  return (
    <div className="bg-white text-black font-poppins  w-full py-8 px-4 sm:px-14 text-center">
      <h1 className="text-2xl text-primaryBtn sm:text-3xl font-bold mb-2">GUIDE YOUR YOUNGER GENERATION</h1>
      
      <div className="text-xl sm:text-2xl" dangerouslySetInnerHTML={{ __html: "<marquee> Share your personal college journey with us to guide future students in selecting the best college for their aspirations. Whether positive or challenging, your honest experience matters in helping others make informed decisions.</marquee>" }} />

    </div>
  )
}

export default TopContent