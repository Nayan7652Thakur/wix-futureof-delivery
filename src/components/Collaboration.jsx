import React from 'react'

const Collaboration = () => {
  return (
      <div className="bg-subtle-gradient relative pt-52 overflow-hidden text-black">
               {/* Top */}
               <div className="pl-24 mb-12 flex gap-14 flex-col">
                   {/* Line */}
                   <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                       <div className="w-[10%] bg-black" />
                       <div className="w-[82%] bg-gray-300" />
                   </div>
   
                   <p className="text-md tracking-widest">
                   COLLABORATION
                   </p>
   
                   <h1 className="text-5xl md:text-[82px] font-extralight leading-tight">
                   Our Industry Partners
                   </h1>
               </div>
   
   
               {/* Bottom */}
   
              
   
           </div>
  )
}

export default Collaboration