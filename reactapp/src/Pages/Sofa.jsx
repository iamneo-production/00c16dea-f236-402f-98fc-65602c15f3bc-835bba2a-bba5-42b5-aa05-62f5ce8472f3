import React from 'react';
import '../Assets/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; 
import ProductImage1 from '../Assets/Images/Product1.jpeg'; 
import ProductImage2 from '../Assets/Images/Product2.jpeg'; 
import ProductImage3 from '../Assets/Images/Product3.jpg'; 
import ProductImage from '../Assets/Images/Product4.jpg'; 

function Sofa() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Sofa Set</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-price'>$125.99</span>
            <button onClick={() => handleAddToCart({ id: 5, name: 'Royal Sofa Set', price: 125 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-price'>$200.49</span>
            <button onClick={() => handleAddToCart({ id: 6, name: 'Wooden Sofa', price: 850 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-price'>$420.99</span>
            <button onClick={() => handleAddToCart({ id: 7, name: 'Fabric Sofa Set', price: 420.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={ProductImage} alt='Product 4' />
          <div className='product-info'>
            <span className='product-price'>$800.99</span>
            <button onClick={() => handleAddToCart({ id: 8, name: 'Furny Sofa Set', price: 800.99 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Sofa;
