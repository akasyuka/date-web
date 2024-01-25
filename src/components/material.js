import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Выровнять по центру (по желанию)
  height: '90vh',
  justifyContent: 'space-between',
};

const imageStyle = {
    width: '300px', // По желанию: установите ширину изображения
    height: 'auto',
  };
function Material() {
    return (
        
      <div style={containerStyle}>
        <img
        src="/images/cat.jpg" // Замените на фактический путь к изображению
        alt="Описание изображения"
        style={imageStyle}
      />
        <div>Котик избирателен, заполните анкету</div>
        <TextField label="Имя" />
        <TextField label="Инст" />
        <TextField label="О себе" />
        <Button variant="contained" color="primary">
          Отправить
        </Button>
      </div>
    );
  }
export default Material;
