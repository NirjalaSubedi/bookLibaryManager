import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3000/getbooks');
        setBooks(res.data.data);
      } catch (err) { console.log(err); }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>📚 My Library</h1>
        <button style={{ backgroundColor: '#4f46e5', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
          + Add New Book
        </button>
      </header>

      <div className="grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{book.title}</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>by <strong>{book.author}</strong></p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#475569' }}>{book.description}</p>
            
            <div className={`status-badge ${book.isAvailable ? 'available' : 'unavailable'}`}>
              {book.isAvailable ? '● Available' : '● Not Available'}
            </div>
            
            <div style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '15px', display: 'flex', gap: '10px' }}>
               <button style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}>Edit</button>
               <button style={{ flex: 1, padding: '8px', borderRadius: '6px', border: 'none', background: '#fee2e2', color: '#991b1b', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;