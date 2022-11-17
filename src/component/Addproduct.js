import React, { useContext, useState } from 'react'
import productcontext from '../context/products/productContext';



const Addproduct = () => {

    const context = useContext(productcontext);
    const { addProduct } = context;
    const [product, setProduct] = useState({ name: "", quntity: "" })

    const HandelonClick = (e) => {
        e.preventDefault();
        addProduct(product.name, product.quntity)
        setProduct({ name: "", quntity: "" })



    }
    const onChange = (e) => {

        setProduct({ ...product, [e.target.name]: e.target.value })

        console.log(e.target.name)
        console.log(e.target.value)
    }



    return (
        <>
            <>
                <h1 className='border-4 text-5xl font-bold text-green-500 flex justify-center text-center  p-2 '>cart</h1>

                <div className='container flex flex-col justify-center items-center w-auto mt-5   '>
                 

                        <h3 className='text-green-500 capitalize text-2xl text-center font-bold m-2 '>name of the product</h3>
                        <input type="text" className='h-10 w-4/5 border-2 border-red-500  pl-2 rounded-xl sm:w-[25rem]' id='name' name='name' value={product.name} onChange={onChange} />
                        <h3 className='text-green-500 capitalize text-2xl text-center font-bold m-2 '>quantity</h3>
                        <input type="number" className='h-10 w-4/5 border-2 border-red-500  pl-2 rounded-xl sm:w-[25rem]' id='quntity' name='quntity' value={product.quntity} onChange={onChange} />

                        <button className='text-2xl bg-blue-700 w-28 h-12 rounded-2xl text-white capitalize m-3' onClick={HandelonClick} >add</button>
                    

                    
                </div>

            </>

        </>
    )
}

export default Addproduct
