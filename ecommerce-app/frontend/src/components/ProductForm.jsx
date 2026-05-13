import { useState, useEffect } from 'react';

function ProductForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Other');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setPrice(initialData.price || '');
      setDescription(initialData.description || '');
      setCategory(initialData.category || 'Other');
      setStock(initialData.stock || '');
    } else { setName(''); setPrice(''); setDescription(''); setCategory('Other'); setStock(''); }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;
    onSubmit({ name, price: Number(price), description, category, stock: Number(stock) });
    if (!initialData) { setName(''); setPrice(''); setDescription(''); setCategory('Other'); setStock(''); }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Product Name *" value={name} onChange={(e) => setName(e.target.value)} required autoFocus />
      </div>
      <div className="input-group">
        <input type="number" placeholder="Price (₹) *" value={price} min={0} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div className="input-group">
        <textarea placeholder="Product description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="input-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="priority-select">
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Food">Food</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="input-group">
        <input type="number" placeholder="Stock quantity" value={stock} min={0} onChange={(e) => setStock(e.target.value)} />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>{initialData ? 'Update Product' : 'Add Product'}</button>
        {onCancel && <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>}
      </div>
    </form>
  );
}
export default ProductForm;
