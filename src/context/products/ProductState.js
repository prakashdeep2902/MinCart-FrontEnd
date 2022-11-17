import React, { useState } from 'react'
import Productcontext from './productContext'

const ProductState = (props) => {

  const host = "http://localhost:9000"
  const productIntial = [];
  const [products, setProducts] = useState(productIntial)


  const getProducts = async () => {

    const response = await fetch(`${host}/api/fetchallproducts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setProducts(json)
  }


  const addProduct = async (name, quantity) => {

    const response = await fetch(`${host}/api/addproduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name, quantity })
    });

    const product = await response.json();
    setProducts(products.concat(product))
  }


  const deleteProduct = async (id) => {

    const response = await fetch(`${host}/api/updateproduct/${id}`, {
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

  const editProduct = async (id, name, quantity) => {
    // api call
    const response = await fetch(`h${host}/api/deleteproduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name, quantity })
    });
    const json = await response.json();
    console.log(json)
    let newProducts = JSON.parse(JSON.stringify(products))
    // Logic to edit in client
    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];
      if (element._id === id) {
        newProducts[index].name = name;
        newProducts[index].quntity = quantity;
     
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
