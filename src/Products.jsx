import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HelloContext } from './App';
function Products() {
  const { cart, setCart } = useContext(HelloContext)
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([
    { id: 1, productName: "AC", price: 50000,p_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXn0MWk2p3yIqQGRIAiyBJJwIxEx9HjzLsQ&s" },
    { id: 2, productName: "Refrigerator", price: 70000 ,p_img:"https://img.magnific.com/free-psd/sleek-stainless-steel-french-door-refrigerator_632498-25861.jpg"},
    { id: 3, productName: "Laptop", price: 100000 ,p_img:"https://img.magnific.com/free-photo/laptop-with-sun-background_1232-429.jpg"},
    { id: 4, productName: "Watch", price: 5000,p_img:"https://m.media-amazon.com/images/I/61k4ZoQDKVL._AC_UF1000,1000_QL80_.jpg"},
    { id: 5, productName: "Washing Machine", price: 40000 ,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9VARoXJOwqqAZVxDpMosnPcdSH32d7NmjQ&s"}
  ])
  function addToCart(produce) {
    setCart(previous => [...previous, produce])
  }
  const filteredProducts = products.filter(
    (item) => item.productName.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder='Enter to Search the Product'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        filteredProducts.length === 0 ?
          (<p>Product Unavailable</p>) : (
            <h1>Branded Products</h1>
          )
      }
      {
        products.length === 0 ? (<p>No products available</p>) : (
          <>
          <div id="products">
            {
              filteredProducts.map((v) => (
                <div key={v.id}>
                  <li>{v.productName}</li>
                  <li>{v.price}₹</li>
                  <img src={v.p_img} width="80%" />
                  <button onClick={() => addToCart(v)}>Add to Cart</button>
                </div>
              ))
            }
            </div>
            {
              cart.length === 0 ? (<p>No items Available in cart</p>) : (
                <>
                  <h1>CART ITEMS</h1>

                  {
                    cart.map((v) => (
                      <div key={v.id}>
                        <li>{v.productName}</li>
                      </div>
                    ))
                  }
                </>
              )
            }
          </>
        )
      }
    </>
  )
}

export default Products