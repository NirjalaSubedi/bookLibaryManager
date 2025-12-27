import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [data, setData] = useState({ title: '', author: '', description: '', isAvailable: true });
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchSingleBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/getsinglebook/${id}`);
        setData(res.data.data);
      } catch (err) {
        console.log("Error fetching book", err);
      }
    };
    fetchSingleBook();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/updatebook/${id}`, data);
      alert("Book Updated Successfully!");
      navigate('/');
    } catch (err) {
      alert("Update garna milena!");
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <h2>Edit Book</h2>
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" value={data.title} placeholder="Book Title" 
               style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
               onChange={(e) => setData({...data, title: e.target.value})} required />
        
        <input type="text" value={data.author} placeholder="Author Name" 
               style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
               onChange={(e) => setData({...data, author: e.target.value})} required />
        
        <textarea value={data.description} placeholder="Description" 
                  style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', height: '100px' }}
                  onChange={(e) => setData({...data, description: e.target.value})} />

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" checked={data.isAvailable} 
                 onChange={(e) => setData({...data, isAvailable: e.target.checked})} />
          Available in Library
        </label>

        <button type="submit" style={{ background: '#4f46e5', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Update Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;