import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const API_URL = import.meta.env.VITE_API_URL || '/api/posts';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try { const res = await axios.get(API_URL); setPosts(res.data); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const addPost = async (data) => {
    try { const res = await axios.post(API_URL, data); setPosts([res.data, ...posts]); }
    catch (err) { console.error(err); }
  };

  const updatePost = async (id, data) => {
    try { const res = await axios.put(`${API_URL}/${id}`, data); setPosts(posts.map(p => p._id === id ? res.data : p)); setEditingPost(null); }
    catch (err) { console.error(err); }
  };

  const deletePost = async (id) => {
    try { await axios.delete(`${API_URL}/${id}`); setPosts(posts.filter(p => p._id !== id)); }
    catch (err) { console.error(err); }
  };

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.author && p.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="app-container">
      <header>
        <h1>Blog Hub</h1>
        <p>Share your thoughts with the world</p>
      </header>
      <main>
        <PostForm onSubmit={editingPost ? (d) => updatePost(editingPost._id, d) : addPost} initialData={editingPost} onCancel={editingPost ? () => setEditingPost(null) : null} />
        <div className="filters-container">
          <input type="text" placeholder="Search posts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
        </div>
        {loading ? <div className="empty-state">Loading posts...</div> : <PostList posts={filtered} onDelete={deletePost} onEdit={setEditingPost} />}
      </main>
    </div>
  );
}
export default PostsPage;
