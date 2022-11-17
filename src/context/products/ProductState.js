import React, { useState } from 'react'
import Productcontext from './productContext'

const ProductState = (props) => {


  const productIntial = [];
  const [products, setProducts] = useState(productIntial)


  const getProducts = async () => {

    const response = await fetch(`http://localhost:9000/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setProducts(json)
  }


  const addProduct = async (name, quntity) => {

    const response = await fetch(`http://localhost:9000/products/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name, quntity })
    });

    const product = await response.json();
    setProducts(products.concat(product))
  }


  const deleteProduct = async (id) => {

    const response = await fetch(`http://localhost:9000/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const json = response.json();
    console.log(json)
    const newProducts = products.filter((product) => { return product._id !== id })
    setProducts(newProducts)
  }

  // Edit a Note

  const editProduct = async (id, name, quntity) => {
    // api call
    const response = await fetch(`http://localhost:9000/products/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name, quntity })
    });
    const json = await response.json();
    console.log(json)
    let newProducts = JSON.parse(JSON.stringify(products))
    // Logic to edit in client
    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];
      if (element._id === id) {
        newProducts[index].name = name;
        newProducts[index].quntity = quntity;
     
        break;
      }
    }
    setProducts(newProducts);

  }


  return (
    <Productcontext.Provider value={{ products, getProducts, addProduct, deleteProduct, editProduct }}>
      {props.children}
    </Productcontext.Provider>
  )
}

export default ProductState
