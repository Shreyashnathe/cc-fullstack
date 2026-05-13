import PostItem from './PostItem';
function PostList({ posts, onDelete, onEdit }) {
  if (posts.length === 0) return <div className="empty-state"><p>No posts yet. Write one above!</p></div>;
  return <div className="task-list">{posts.map((post) => <PostItem key={post._id} post={post} onDelete={onDelete} onEdit={onEdit} />)}</div>;
}
export default PostList;
