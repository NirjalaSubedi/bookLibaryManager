import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [data, setData] = useState({ 
    title: '', 
    author: '', 
    description: '',
    isAvailable: true 
  });
  
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/createbook', data);
      alert("Book Added Successfully!");
      navigate('/'); 
    } catch (err) {
      console.error(err);
      alert("Error: Book add garna sakiena.");
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '50px' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', cursor: 'pointer',border:'none' }}>
        Back to Library
      </button>
      
      <div className="book-card" style={{ padding: '30px' }}>
        <h2 style={{ marginBottom: '20px' }}>Add New Book to Library</h2>
        
        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label>Book Title *</label>
            <input 
              type="text" 
              placeholder="Enter book title" 
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ddd' }}
              onChange={(e) => setData({...data, title: e.target.value})} 
              required 
            />
          </div>

          <div>
            <label>Author Name *</label>
            <input 
              type="text" 
              placeholder="Enter author's name" 
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ddd' }}
              onChange={(e) => setData({...data, author: e.target.value})} 
              required 
            />
          </div>

          <div>
            <label>Description</label>
            <textarea 
              placeholder="Write a short summary..." 
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ddd', height: '100px' }}
              onChange={(e) => setData({...data, description: e.target.value})} 
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              background: '#4f46e5', 
              color: 'white', 
              padding: '15px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;