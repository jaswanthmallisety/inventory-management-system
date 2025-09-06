import React, { useState, useEffect } from 'react';
import axios from 'axios';

// The API Gateway URL
const API_URL = 'http://localhost:8080/api/products';

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { name, description, price });
      fetchProducts(); // Refresh list
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="section">
      <h2>Products</h2>
      <form onSubmit={addProduct}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;