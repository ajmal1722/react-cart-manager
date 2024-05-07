import React from 'react'

const ViewCart = () => {
    return (
        <div className='fixed top-0 right-0 h-full w-screen backdrop-blur-sm'>
            <div className="bg-white h-full lg:w-1/2 md:w-2/3 w-screen absolute right-0">
                <div className="flex justify-end p-6 mb-5">
                    <button className='text-2xl font-semibold'>
                        X
                    </button>
                </div>
                <div className="border-2 rounded-xl h-24 m-2">
                    <div className="flex">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
