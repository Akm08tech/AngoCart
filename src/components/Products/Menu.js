import React, { useEffect, useState} from 'react';
import axios from 'axios';
import phone_icon from '../../assets/phone_icon.png';
import './Menu.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  product_img  from '../../assets/product_img.png';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { API_BASE_URL } from '../../config/Config';
import { responsiveFontSizes } from '@mui/material';
const Menu = () => {
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = useState(1); 
    const [otp, setotp] = useState(1); 
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        
      };
      const [inputValue, setInputValue] = useState('');
      const requiredDigits = 10; 
    
      const handlenext =(e)=>{
        
            if (step < 3) {
                setStep(step + 1);
              }
             
         
      }
      useEffect(()=>{
        axios.post('https://dev.techstreet.in/angocartecomm/public/api/v1/otp').then((response)=>{
              setotp(response.otp);
        });
   })
      const handclose = () => {
        setOpen(false);
        setStep(1); // Reset the step when the modal is closed
      };
      const handleBack = () => {
        // Handle "Back" button click to navigate to the previous step
        if (step > 1) {
          setStep(step - 1);
        }
      };
      const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setPhoneNumber(value);
      };
     
      const getButtonColor = () => {
        if (inputValue.length === requiredDigits) {
          return 'green'; 
        } else {
          return 'grey'; 
        }
      };
      const inputstyle = {
        width: '300px', 
        height: '40px',  
        border: `2px solid white`,
      };
      const buttonStyle = {
        backgroundColor: getButtonColor(),
        width: '280px', 
        height: '40px',  
      }; 
      const stepContent = () => {
        switch (step) {
          case 1:
            return (
              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
            Phone Number Verification 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Enter your Phone Number to login/signup
          </Typography>
          <h3>Enter your Phone Number to login/signup</h3>
          <div style={{ display: 'flex', alignItems: 'center' }} className='custom-input'>
          <img src={phone_icon} alt="Icon" className="input-icon" />+91
        <input type='text' placeholder=''  onChange={handleInputChange}  style={inputstyle}/>
      </div>
          <br/>
          <button style={buttonStyle} onClick={handlenext}>Next</button>
              </div>
            );
          case 2:
            return (
              <div>
                  <button onClick={handleBack}>back</button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
            Phone Number Verification 
          
          </Typography>
 
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
          <h3>  Enter Four Dogit code send to your number {phoneNumber}</h3> 
          <div style={{ display: 'flex', alignItems: 'center' }} className='custom-input'>
        <input type='text' placeholder=''  onChange={handleInputChange}  style={inputstyle}/>
      </div>
          <br/>
          <button style={buttonStyle} onClick={handlenext}>Next</button>
              </div>
            );
          case 3:
            return (
              <div>
               Page not found.
          </div>
            );
          default:
            return null;
        }
      };
    
  return (
    <header className="header">
      <div className="logo">
        <img src= {product_img} alt="Company Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search products by name..." />
      </div>

      <div className="user-options">
        <button className="login-button" onClick={handleOpen}>Login/Sign Up</button>
        <Modal
        open={open}
        onClose={handclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {stepContent()}
         
          <h5>By continuing you agree to our  terms of service
                 and privacy policy </h5>
          </div>
        </Box>
      </Modal>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
      <br/>
    </header>
  );
};

export default Menu;