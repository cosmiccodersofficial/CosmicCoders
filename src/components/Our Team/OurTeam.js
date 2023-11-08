import React from 'react'
// import team from '../../images/Our Team.png'
const OurTeam = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("../../images/Our Team.png")' }}>
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
        {/* Row 1 */}
        <div className="row-span-1 col-span-3 flex justify-center items-center text-white text-2xl font-bold">
          Row 1
        </div>
        {/* Row 2 */}
        sdfjhdsjfhs
        <div className="row-span-1 col-span-1 flex justify-center items-center text-white text-2xl font-bold">
          Row 2, Column 1
        </div>
        <div className="row-span-1 col-span-1 flex justify-center items-center text-white text-2xl font-bold">
          Row 2, Column 2
        </div>
        <div className="row-span-1 col-span-1 flex justify-center items-center text-white text-2xl font-bold">
          Row 2, Column 3
        </div>
        {/* Row 3 */}
        <div className="row-span-1 col-span-2 flex justify-center items-center text-white text-2xl font-bold">
          Row 3, Column 1
        </div>
        <div className="row-span-1 col-span-1 flex justify-center items-center text-white text-2xl font-bold">
          Row 3, Column 2
        </div>
      </div>
    </div>
  )
}

export default OurTeam
