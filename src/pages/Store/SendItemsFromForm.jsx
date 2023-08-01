import React, { useState } from 'react';

export const SendItemFromForm = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [imgBase64, setImgBase64] = useState('');
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = { id: parseInt(id), name, price: parseFloat(price), description, imgBase64 };
      fetch('https://backend-express-nabboman-render.onrender.com/products/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setId(0);
          setName('');
          setPrice(0);
          setDescription('');
          setImgBase64('');
          setSubmissionSuccess(true);
        })
        .catch(error => console.error(error));
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgBase64(reader.result);
      };
    };
  
    return (
      <div style={{ marginTop: '200px', textAlign: 'center' , height: '35vh'}}>
        {submissionSuccess ? (
          <div>
            <h3 style={{ color: 'green' }}>Submission Successful!</h3>
            <button onClick={() => window.location.reload()}>Premi per aggiungere un altro articolo</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
                    Id:
                    <input type="number" value={id} onChange={e => setId(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </label>
                <label>
                    Image:
                    <input type="file" onChange={handleImageChange} />
                </label>
                <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  };
  