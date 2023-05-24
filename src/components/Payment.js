import React from "react";
import './modal.css'
import { useState } from 'react';

const Payment = ({active, setActive}) => {
    const [cardNumber, setcardNumber] = useState('');
  const [cardDate, setcardDate] = useState('');
  const [userCVV, setuserCVV] = useState('');
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userPostNumber, setUserPostNumber] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
 
  const handleCardNumberChange = (event) => {
    setcardNumber(event.target.value);
  };

  const handleCardDateChange = (event) => {
    setcardDate(event.target.value);
  };

  const handleCVVchange = (event) => {
    setuserCVV(event.target.value);
  };
  const handleUserNamechange = (event) => {
    setUserName(event.target.value);
  };
  const handleUserCitychange = (event) => {
    setUserCity(event.target.value);
  };
  const handleUserPostNumberchange = (event) => {
    setUserPostNumber(event.target.value);
  };
  const handleUserPhoneNumberchange = (event) => {
    setUserPhoneNumber(event.target.value);
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    setActive(false)
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('cardDate', cardDate);
    localStorage.setItem('userCVV', userCVV);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userCity', userCity);
    localStorage.setItem('userPostNumber', userPostNumber);
    localStorage.setItem('userPhoneNumber', userPhoneNumber);
    
  };
    
    return (

      <div className="modal-registration-container">

        <div className={active ? 'overlay active' : 'overlay'}></div>
        
        <div className={active ? "modal active" : 'modal'}>

            <div className="modalContent">


            <button className="close-registration-btn" onClick={() => setActive(false)}></button>

                <form className="paymentForm" onSubmit={handleSubmit}>
                    <h2>Регистрация</h2>
                    <div>
                        <label htmlFor="cardNumber">Номер картки:</label>
                        <input type="text" value={cardNumber} onChange={handleCardNumberChange} required></input>
                    </div>
                    <div>
                        <label htmlFor="cardDate">Строк дії картки у форматі мм/рр:</label>
                        <input type="text"  value={cardDate} onChange={handleCardDateChange} required></input>
                    </div>
                    <div>
                    <label htmlFor="userCVV">CVV:</label>
                    <input type="text" value={userCVV} onChange={handleCVVchange} required></input>
                    </div>
                    <div>
                    <label htmlFor="userName">ПІБ:</label>
                    <input type="text" value={userName} onChange={handleUserNamechange} required></input>
                    </div>
                    <div>
                    <label htmlFor="userPhoneNumber">Номер телефону починаючи з +380....:</label>
                    <input type="text" value={userPostNumber} onChange={handleUserPhoneNumberchange} required></input>
                    </div>
                    <div>
                    <label htmlFor="userCity">Місто:</label>
                    <input type="text" value={userCity} onChange={handleUserCitychange} required></input>
                    </div>
                    <div>
                    <label htmlFor="userPostNumber">Номер відділення:</label>
                    <input type="text" value={userPostNumber} onChange={handleUserPostNumberchange} required></input>
                    </div>
                    <div>
                    <button type='submit' className="submit-registration" onClick={() => setActive(false)}>Замовити</button>
                    </div>
                </form>
                </div>
                </div>
        </div>
           
)}
export default Payment;