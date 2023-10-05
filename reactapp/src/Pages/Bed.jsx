import React from 'react';
import '../Assets/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; 
import ProductImage1 from '../Assets/Images/bedproduct1.jpeg'; 
import ProductImage2 from '../Assets/Images/bedproduct2.jpeg'; 
import ProductImage3 from '../Assets/Images/bedproduct3.jpeg';
import ProductImage4 from '../Assets/Images/bedproduct4.jpeg'; 

function Bed() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Bed</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-price'>$209.99</span>
            <button onClick={() => handleAddToCart({ id: 9, name: 'Wooden Bed Set', price: 209.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-price'>$190.49</span>
            <button onClick={() => handleAddToCart({ id: 10, name: 'WOLTA BedRoom Set', price: 190.49 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-price'>$405.79</span>
            <button onClick={() => handleAddToCart({ id: 11, name: 'COSMO BedRoom Set', price: 405.79 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={ProductImage4} alt='Product 4' />
          <div className='product-info'>
            <span className='product-price'>$300.79</span>
            <button onClick={() => handleAddToCart({ id: 12, name: 'King Bed Set', price: 300.79 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bed;
