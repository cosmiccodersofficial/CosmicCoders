import React from 'react'
// import team from '../../images/Our Team.png'
const OurTeam = () => {
  return (
    <div className="flex flex-col h-screen pt-16 mt-20">
      <h1 className='text-3xl pb-10 font-semibold'>Our Team</h1>
      {/* First Row */}
      <div className="flex">
        <div className="flex-1 bg-gray-300 p-4 m-2 rounded-full">Column 1</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 2</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 3</div>
      </div>

      {/* Second Row */}
      <div className="flex">
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 4</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 5</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 6</div>
      </div>

      {/* Third Row */}
      <div className="flex">
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 7</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 8</div>
        <div className="flex-1 bg-gray-300 p-4 m-2">Column 9</div>
      </div>
    </div>
  )
}

export default OurTeam
