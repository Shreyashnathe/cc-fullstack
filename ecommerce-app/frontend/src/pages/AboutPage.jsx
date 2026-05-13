function AboutPage() {
  return (
    <div className="app-container">
      <header><h1>About ShopEasy</h1><p>Cloud-deployed e-commerce platform</p></header>
      <main>
        <div className="task-form">
          <h2>Welcome to ShopEasy!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            ShopEasy is a full-stack MERN e-commerce application deployed on AWS EC2 for browsing and managing products.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Add and manage product listings.</li>
            <li>Track price, stock, and category.</li>
            <li>Filter products by category.</li>
            <li>Backend API connected to MongoDB Atlas.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default AboutPage;
