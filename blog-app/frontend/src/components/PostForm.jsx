import { useState, useEffect } from 'react';

function PostForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Other');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
      setAuthor(initialData.author || '');
      setCategory(initialData.category || 'Other');
    } else { setTitle(''); setContent(''); setAuthor(''); setCategory('Other'); }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, content, author, category });
    if (!initialData) { setTitle(''); setContent(''); setAuthor(''); setCategory('Other'); }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Post Title *" value={title} onChange={(e) => setTitle(e.target.value)} required autoFocus />
      </div>
      <div className="input-group">
        <textarea placeholder="Write your content here..." value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className="input-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="priority-select">
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>{initialData ? 'Update Post' : 'Publish Post'}</button>
        {onCancel && <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>}
      </div>
    </form>
  );
}
export default PostForm;
