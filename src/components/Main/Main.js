import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import React, { useState } from "react";
import './Main.css';



const imageStyle = {
    marginTop: '5vh',
    width: '200px',
    height: 'auto',
    alignSelf: 'center',
  };

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    inst: '',
    about: '',
  });

  const [textFieldVisible, setTextFieldVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  };

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/saveAboutForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Post request successful');
      } else {
        console.error('Error in post request');
      }
    } catch (error) {
      console.error('Error in post request:', error);
    };
    setButtonVisible(false);
    setAlertVisible(true);
    setTextFieldVisible(false);
  };

  return (
    <div class="containerStyle">
      {textFieldVisible && (
        <TextField
          name="name"
          label="Имя"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      )}
      {textFieldVisible && (
        <TextField
          name="inst"
          label="Инст"
          value={formData.inst}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      )}
      {textFieldVisible && (
        <TextField
          name="about"
          label="О себе"
          value={formData.about}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      )}
      {buttonVisible && (
        <Button variant="contained" color="primary" onClick={handleClick}>
          Отправить
        </Button>
      )}
      {alertVisible && (
        <Alert severity="success">
          Отправлено
        </Alert>
      )}
    </div>
  );
};

export default Main;