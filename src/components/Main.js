import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import React, { useState } from "react";
import { CompletionInfoFlags } from 'typescript';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Выровнять по центру (по желанию)
  height: '90vh',
  justifyContent: 'space-between',
};

const imageStyle = {
    marginTop: '5vh',
    width: '200px', // По желанию: установите ширину изображения
    height: 'auto',
  };


function Main() {
    const [buttonVisible, setButtonVisible] = useState(true);
    const [alertVisible, setAlertVisible] = useState(false);
    const [textFieldVisible, setTextFieldVisible] = useState(true);

const handleClick = () => {
    // При клике изменяем состояние кнопки
    setButtonVisible(false);
    setAlertVisible(true);
    setTextFieldVisible(false);
};
    return (
        
      <div style={containerStyle}>
        {/* <Avatar alt="Remy Sharp" src="/images/cat.jpg" /> */}
        <Avatar
        src="/images/me.jpg" // Замените на фактический путь к изображению
        alt="Описание изображения"
        style={imageStyle}
      />
        <div>Принимаю заявки на разработку сайтов</div>
        {textFieldVisible && (
        <TextField label="Ваше имя" />
        )}
        {textFieldVisible && (
        <TextField label="Как связаться" />
        )}
        {textFieldVisible && (
        <TextField label="Описание проекта" />
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
  }

export default Main;