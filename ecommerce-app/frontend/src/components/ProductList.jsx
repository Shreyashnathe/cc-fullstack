import ProductItem from './ProductItem';
function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) return <div className="empty-state"><p>No products yet. Add one above!</p></div>;
  return <div className="task-list">{products.map((p) => <ProductItem key={p._id} product={p} onDelete={onDelete} onEdit={onEdit} />)}</div>;
}
export default ProductList;
