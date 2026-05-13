import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const API_URL = import.meta.env.VITE_API_URL || '/api/products';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try { const res = await axios.get(API_URL); setProducts(res.data); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const addProduct = async (data) => {
    try { const res = await axios.post(API_URL, data); setProducts([res.data, ...products]); }
    catch (err) { console.error(err); }
  };

  const updateProduct = async (id, data) => {
    try { const res = await axios.put(`${API_URL}/${id}`, data); setProducts(products.map(p => p._id === id ? res.data : p)); setEditingProduct(null); }
    catch (err) { console.error(err); }
  };

  const deleteProduct = async (id) => {
    try { await axios.delete(`${API_URL}/${id}`); setProducts(products.filter(p => p._id !== id)); }
    catch (err) { console.error(err); }
  };

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (categoryFilter !== 'All') return matchSearch && p.category === categoryFilter;
    return matchSearch;
  });

  return (
    <div className="app-container">
      <header>
        <h1>ShopEasy</h1>
        <p>Browse and manage your products</p>
      </header>
      <main>
        <ProductForm onSubmit={editingProduct ? (d) => updateProduct(editingProduct._id, d) : addProduct} initialData={editingProduct} onCancel={editingProduct ? () => setEditingProduct(null) : null} />
        <div className="filters-container">
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="filter-select">
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {loading ? <div className="empty-state">Loading products...</div> : <ProductList products={filtered} onDelete={deleteProduct} onEdit={setEditingProduct} />}
      </main>
    </div>
  );
}
export default ProductsPage;
