import React from 'react';
import '../Assets/Category.css'; 
import ProductImage1 from '../Assets/Images/Dinning Table.jpeg';
import ProductImage2 from '../Assets/Images/Dinning Table2.jpeg';
import ProductImage3 from '../Assets/Images/DinningTable3.jpeg';
import ProductImage4 from '../Assets/Images/TableProduct4.jpg';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; 

function Dinning() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Dinning Table</h1>
      <div className='product-container'>

        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-price'>$350.99</span>
            <button onClick={() => handleAddToCart({ id: 1, name: 'Dinning Table', price: 350.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-price'>$250.99</span>
            <button onClick={() => handleAddToCart({ id: 2, name: 'Nested Dinning Table', price: 250.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-price'>$400.49</span>
            <button onClick={() => handleAddToCart({ id: 3, name: 'Wooden Dinning Table', price: 400.49 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 (Orange) */}
        <div className='product'>
          <img src={ProductImage4} alt='Product 4' />
          <div className='product-info'>
            <span className='product-price'>$600.99</span>
            <button onClick={() => handleAddToCart({ id: 4, name: 'Aurum Dinning Table', price: 600.99 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dinning;