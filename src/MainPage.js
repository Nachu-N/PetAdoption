
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
function MainPage(){
    const [petName, setPetName] = useState('');
  const [adopterName, setAdopterName] = useState('');
  const [adopterPhone, setAdopterPhone] = useState('');
  const navi = useNavigate()
  const handlePetNameChange = (event) => {
    setPetName(event.target.value);
  };

  const handleAdopterNameChange = (event) => {
    setAdopterName(event.target.value);
  };

  const handleAdopterPhoneChange = (event) => {
    setAdopterPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/api/store-value', {
      petName,
      adopterName,
      adopterPhone
    })
      .then((response) => {
        console.log('Success:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    return(
        <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h6>Pet Name:</h6>
            <input type="text" value={petName} onChange={handlePetNameChange} />
        </div>
        <div>
          <h6>Adopter Name:</h6>
          <input type="text" value={adopterName} onChange={handleAdopterNameChange} />
        </div>
        <div>
            <h6>Adopter Phone:</h6>
            <input type="text" value={adopterPhone} onChange={handleAdopterPhoneChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <Link to='/petlist'>PetList</Link>
    </div>
    )
}

export default MainPage