import React from "react";
import "./basket.css";
import { useState } from "react";
import Payment from './Payment';

const Basket = (props) => {

    let priceCounter = 0;

    const itemInBasket = (item) => (JSON.parse(localStorage.getItem(item)));

    const removeFromBasket = (item) => {
        localStorage.removeItem(item);
        props.changeContent(Object.keys(localStorage));
    };

    const calculatePrice = () => {
        props.storage.map(key => ( priceCounter = priceCounter + Number(itemInBasket(key).price.split(' ').join(''))));
        return priceCounter;
    };
    const [paymentActive, setpaymentActive] = useState(false);

    return(

    <div className="modal-container">

        <div className={props.basketActive ? 'overlay active' : 'overlay'}></div>

        <div className={ props.basketActive ? 'basket active' : 'basket'}>
        
        <button className="close-basket-btn" onClick={() => props.setBasketActive(false)}></button>

        <h2 className="basket-head">Кошик</h2>
        
        {localStorage.length === 0 && <p className="message-empty"> У вас ще немає замовлених товарів </p>}

        {localStorage.length !== 0 &&
            <div>
                {props.storage.map(key => 
                    (<div key={key} className='basket-item-container'>
                        <p className='item-name'>{itemInBasket(key).name}</p>
                            <img src={itemInBasket(key).img} alt="busket"/>
                            <span className='item-price'>Ціна: {itemInBasket(key).price}</span>
                            <button onClick={() => removeFromBasket(key) } className='remove-btn'></button>
                    </div>

                    ))}
                <p className="sum">Сума: {calculatePrice()}</p>
                <button className='registration' onClick={()=>setpaymentActive(!paymentActive)}>перейти до сплати</button>
                <Payment active={paymentActive} setActive={setpaymentActive} />
            </div>
        }
        </div>
    </div>
    
);
};


export default Basket;

