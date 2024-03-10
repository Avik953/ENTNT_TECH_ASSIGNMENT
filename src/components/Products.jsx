import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, editProduct, deleteProduct } from '../assets/actions'; 

const Products = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [editMode, setEditMode] = useState(false); 
  const [selectedProductId, setSelectedProductId] = useState(null); 
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProductId) { 
      const product = products.find(p => p.id === selectedProductId);
      if (product) {
        setName(product.name);
        setCategory(product.category);
        setPrice(product.price);
        setStock(product.stock);
      }
    }
  }, [products, selectedProductId]); 

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1, 
      name,
      category,
      price: parseFloat(price),
      stock,
    };
    dispatch(addProduct(newProduct));
    setName('');
    setCategory('');
    setPrice(0);
    setStock(0);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const editedProduct = {
      id: selectedProductId,
      name,
      category,
      price: parseFloat(price),
      stock,
    };
    dispatch(editProduct(editedProduct));
    setEditMode(false);
    setSelectedProductId(null);
    setName('');
    setCategory('');
    setPrice(0);
    setStock(0);
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleEditClick = (productId) => {
    setEditMode(true);
    setSelectedProductId(productId);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedProductId(null);
    setName('');
    setCategory('');
    setPrice(0);
    setStock(0);
  };

  return (
    <div className="main-content">
      <h2>Products Management</h2>
      <form onSubmit={editMode ? handleEditProduct : handleAddProduct}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
        {editMode ? (
          <>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
            <button type="submit">Save Changes</button>
          </>
        ) : (
          <button type="submit">Add Product</button>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditClick(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
              </tr>))}
              </tbody>
        </table>
        </div>
  )};

  export default Products;