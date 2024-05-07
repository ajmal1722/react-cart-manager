import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { view_cart } from '../redux/cart/ViewCartSlice'
import { MdDelete } from 'react-icons/md'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const ViewCart = () => {
    const dispatch = useDispatch()
    const isViewCart = useSelector(state => state.viewCart.value);

    // const cartElementsDispatch = useDispatch()
    const cartElements = useSelector(state => state.addToCart.value)
    console.log(cartElements)

    const displayCart = () => {
        dispatch(view_cart({ viewCart: !isViewCart }))
    }
    return (
        <div className='fixed top-0 right-0 h-full w-screen backdrop-blur-sm'>
            <div className="bg-white h-full lg:w-1/2 md:w-2/3 w-screen absolute right-0">
                <div className="flex justify-end p-6 mb-5">
                    <button onClick={displayCart} className='text-2xl font-semibold text-gray-900'>
                        X
                    </button>
                </div>
                { cartElements.map(product => {
                    return (
                        <div className="border-2 rounded-xl h-24 m-2">
                            <div className="flex items-center justify-between text-black">
                                <div className="w-20 h-20 mx-6 my-2">
                                    <img src={product.image} className='h-20'/>
                                </div>
                                <div className="text-lg">
                                    {product.price}
                                </div>
                                <div className='flex' >
                                    <CiCirclePlus className='text-2xl'/>
                                    <div className='mx-3'>
                                        1
                                    </div>
                                    <CiCircleMinus className='text-2xl'/>
                                </div>
                                <div className='w-12'>
                                    <MdDelete className='text-xl'/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewCart
