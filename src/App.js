import React from 'react'
import Home from './component/Home'
import ProductState from './context/products/ProductState'

const App = () => {
  return (
    <>

      <ProductState>
        <Home />
      </ProductState>


    </>



  )
}

export default App
