
import React, { useEffect, useContext, useRef, useState } from 'react'
import productcontext from '../context/products/productContext'
import Addproduct from './Addproduct'
import ProductItem from './ProductItem'

const Products = () => {

    const context = useContext(productcontext)
    const { products, getProducts, editProduct } = context;

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);

    const [product, setProduct] = useState({ id: "", ename: "", equntity: "" })

    const updateProduct = (currentProduct) => {

        ref.current.click();
        setProduct({ id: currentProduct._id, ename: currentProduct.name, equntity: currentProduct.quntity })

    }
    const handleClick = (e) => {

        editProduct(product.id, product.ename, product.equntity)
        refClose.current.click();
    }

    const onChange = (e) => {

        setProduct({ ...product, [e.target.name]: e.target.value })
    }







    return (
        <>

            <Addproduct />

            <button ref={ref} type="button" className=" bg-black w-[10rem] h-[3rem] ml-2 d-none   text-white rounded-full" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label">name of product</label>
                                    <input type="text" className="form-control" id="ename" name="ename" value={product.ename} aria-describedby="emailHelp" onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="equntity" className="form-label">quantity of product</label>
                                    <input type="number" className="form-control" id="equntity" name="equntity" value={product.equntity} onChange={onChange} required />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary  bg-blue-700" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary bg-blue-700" onClick={handleClick}>Update product</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className=' flex justify-center text-center text-4xl capitalize text-green-600 mt-3'>your products are</h1>
               <div className=" flex m-auto w-[100%]  justify-center items-center container md:text-5xl  mt-5 text-3xl capitalize text-blue-800">
                    {products.length === 0 && 'No products to display'}
                </div>
            <div className='mt-3 w-[80%] m-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2   md:grid-cols-4 md:gap-2  lg:grid-cols-4 lg:gap-1 '>


             

                {
                    products.map((product) => {
                        return <ProductItem key={product._id} updateProduct={updateProduct} product={product} />
                    })}

            </div>


        </>
    )
}

export default Products
