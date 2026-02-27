import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';

const Add = () => {

  const [image, setImage] = useState(null);

  return (
    <div className='add'>
      <form className="add-form">
        <div className="form-left">
          <p className="section-title">Upload Image</p>
          <label htmlFor="image" className="upload-label">
            <img 
              src={image ? URL.createObjectURL(image) : assets.upload_area} 
              alt="Upload" 
              className="upload-img"
            />
          </label>
          <input 
            onChange={(e) => setImage(e.target.files[0])} 
            type="file" 
            id='image' 
            hidden 
            required
          />
        </div>

        <div className="form-right">
          <div className="add-product-name flex-col">
            <p className="section-title">Product Name</p>
            <input type="text" name='name' placeholder='Type Here' />
          </div>

          <div className="add-product-description flex-col">
            <p className="section-title">Product Description</p>
            <textarea name="description" rows="5" placeholder='Write Description' required></textarea>
          </div>

          <div className="add-category-price">
            <div className="add-category flex-col">
              <p className="section-title">Category</p>
              <select name="category">
                <option value="Salad">Salad</option>
                <option value="Burger">Burger</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Roll">Roll</option>
                <option value="Dessert">Dessert</option>
                <option value="Biryani">Biryani</option>
                <option value="Pizza">Pizza</option>
                <option value="Platter">Platter</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p className="section-title">Price</p>
              <input type="number" name='price' placeholder='500' />
            </div>
          </div>

          <button type='button' className='add-btn'>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Add;