import React, { useContext } from 'react'
import productcontext from '../context/products/productContext';


const ProductItem = (props) => {

    const context = useContext(productcontext);
    const { deleteProduct } = context
    const { product, updateProduct } = props
    return (
        <>
            <div className="cart inline-flex flex-col w-auto h-auto m-2  p-3 border-8">
                <p className='  flex text-2xl capitalize mt-3 font-bold'> Product:  {product.name}</p>
                <p className=' flex text-2xl capitalize mt-3 mb-3 justify-center' > quantity: {product.quntity}</p>
                <div className=' mt-auto flex  justify-around '>
                    <i className="fa-solid fa-trash  text-gray-700  text-2xl cursor-pointer" onClick={() => { deleteProduct(product._id) }}></i>
                    <i className="fa-solid fa-pen-to-square text-2xl text-green-500 cursor-pointer " onClick={() => {
                        updateProduct(product)
                    }}></i>
                </div>



            </div>
        </>
    )
}

export default ProductItem
