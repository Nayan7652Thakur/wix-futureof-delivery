import React from 'react'

const Footer = () => {
  return (
    <div className="overflow-y-hidden mt-16 lg:mt-32">
      <main className="ml-6 md:ml-10 lg:ml-24">
        <h1 className='text-3xl w-72 md:w-[625px]  lg:w-3/4 md:text-6xl lg:text-7xl'>Be the First to Receive the Latest News From Volaso. </h1>
        <div className='mt-14 lg:pr-28 mr-12 lg:pl-7'>
          <label className='text-gray-500'>Email *</label>
          <input type="text" className='w-full border-b border-gray-500 mt-7 mr-9' />
          <div className='flex flex-col md:flex-row '>
            <div className='lg:w-1/2 md:w-2/4 mt-7'>
              <input type="checkbox" />
              <span className='text-xs md:text-md'> Yes, subscribe me to your newsletter.*</span>
            </div>
            <button className='bg-black text-white border hover:text-black hover:border-black hover:bg-white py-2 mt-2 w-full rounded-full'>SUBSCRIBE</button>
          </div>
        </div>


        {/* footer  */}
        <div className='flex flex-col gap-12 lg:gap-56 lg:flex-row mt-10 lg:mt-40'>
          {/* name */}
          <div>
            <h2>Volaso</h2>
          </div>
          <div className='w-full flex flex-col'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8'>
              <div className='mb-10 md:mb-0'>
                <h3>COMPANY</h3>
                <li className='list-none text-gray-500'>Technology</li>
                <li className='list-none text-gray-500'>About</li>
              </div>
              <div>
                <h3>
                  LEGAL
                </h3>
                <li className='list-none text-gray-500'>Terms & Conditions</li>
                <li className='list-none text-gray-500'>Privacy Policy</li>
              </div>
              <div>
                <h3>
                  SOCIAL
                </h3>
                <li className='list-none text-gray-500'>LinkedIn</li>
                <li className='list-none text-gray-500'>Facebook</li>
                <li className='list-none text-gray-500'>Instagram</li>
              </div>
              <div>
                <h3>
                  CONTACT
                </h3>
                <li className='list-none text-gray-500'>info@mysite.com</li>
                <li className='list-none text-gray-500'>

                  Tel: 123-456-7890
                </li>
                <li className='list-none text-gray-500'>
                  500 Terry Francine St.</li>
                <li className='list-none text-gray-500'>
                  San Francisco CA 94158
                </li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
}

export default Footer