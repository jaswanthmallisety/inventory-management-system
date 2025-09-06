import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PRODUCT_API_URL = 'http://localhost:8080/api/products';
const INVENTORY_API_URL = 'http://localhost:8080/api/inventory';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchInventory();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(PRODUCT_API_URL);
    setProducts(response.data);
    if (response.data.length > 0) {
      setSelectedProduct(response.data[0].id);
    }
  };
  
  const fetchInventory = async () => {
    const response = await axios.get(INVENTORY_API_URL);
    setInventory(response.data);
  };
  
  const updateInventory = async (e) => {
    e.preventDefault();
    await axios.post(INVENTORY_API_URL, { productId: selectedProduct, quantity });
    fetchInventory();
    setQuantity('');
  };

  const getProductName = (productId) => {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Unknown';
  };

  return (
    <div className="section">
      <h2>Inventory Stock</h2>
      <form onSubmit={updateInventory}>
        <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
          {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
        <button type="submit">Update Stock</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.productId}>
              <td>{getProductName(item.productId)}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;