import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { view_cart } from '../redux/cart/ViewCartSlice'
import { remove_item } from '../redux/cart/addToCartSlice'
import { MdDelete } from 'react-icons/md'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import toast, { Toaster } from 'react-hot-toast';

const ViewCart = () => {
    const dispatch = useDispatch()
    const isViewCart = useSelector(state => state.viewCart.value);

    // const cartElementsDispatch = useDispatch()
    const cartElements = useSelector(state => state.addToCart.value)
    console.log(cartElements)

    const displayCart = () => {
        dispatch(view_cart({ viewCart: !isViewCart }))
    }

    const removeFromCart = (index) => {
        dispatch(remove_item(index))
        toast.success('Item removed from cart succesfully!')
    }

    return (
        <div className='fixed top-0 right-0 h-full w-screen backdrop-blur-sm overflow-y-auto'>
            <div className="bg-white lg:w-1/2 md:w-2/3 w-screen absolute right-0 min-h-screen">
                <div className="flex justify-end p-6 mb-5">
                    <button onClick={displayCart} className='text-2xl font-semibold text-gray-900'>
                        X
                    </button>
                </div>
                { cartElements.map((product, index) => {
                    return (
                        <div key={index} className="border-2 rounded-xl h-24 m-2">
                            <div className="flex items-center justify-between text-black">
                                <div className="w-20 h-20 mx-6 my-2">
                                    <img src={product.image} className='h-20'/>
                                </div>
                                <div className="text-lg">
                                    ${product.price}
                                </div>
                                <div className='flex' >
                                    <CiCirclePlus className='text-2xl'/>
                                    <div className='mx-3'>
                                        1
                                    </div>
                                    <CiCircleMinus className='text-2xl'/>
                                </div>
                                <div className='w-12'>
                                    <MdDelete onClick={() => removeFromCart(index)} className='text-xl cursor-pointer'/>
                                </div>
                            </div>
                            <Toaster/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewCart
