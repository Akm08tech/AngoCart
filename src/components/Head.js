import React from 'react';
import './Head.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Head = () => {

    const handleButtonClick=()=>{
       alert('done');
    }
  return (
    <>
    <div className="container">
      <div className="top-icons">
      </div>
      <div className="content">
       <LocationOnIcon fontSize='small'/> MON-SAT (6:00AM – 9:30PM) <PhoneIcon fontSize='small'/>+244 933 888 888 <EmailIcon  fontSize='small'/>info@angocart.com
      </div>
      </div>
      <div className='head2'>
      <div className="moving-container">
        <div className="moving-text-container">
          <p className="moving-text">Enjoy Pay On Delivery & Bank Transfer & Get Upto 30% Off! HURRY UP! Use 📦DCODE5 & Get 5% Extra Off.
</p>
          <button onClick={handleButtonClick} className='btn'>Buy Now</button>
        </div>
        </div>
        </div>
  </>
  );
};

export default Head;
