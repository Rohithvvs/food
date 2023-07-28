import React, { useState } from 'react';

const Card = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleIncrement = () => {
    if (isVisible === false) {
      setIsVisible(true);
    }
    
    setCount((prevCount) => prevCount + 1);
    setTotalCost((prevTotal) => prevTotal+Number(item.price));
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    setTotalCost((prevTotal) => prevTotal-Number(item.price));
  };

  return (
    <div>
    <div className="card" style={{ width: '18rem' }}>
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price: {item.price}</p>
        {isVisible && (
          <div>
            <p className="card-text">Total: {count}</p>
            <p className="card-text">Cost(INR): {totalCost}</p>
          </div>
        )}

<button type ="button" className={`btn ${totalCost>0? 'btn-success' : "btn-primary"}`} onClick={handleIncrement}>+</button>
<button type ="button" className={`btn ${totalCost>0? 'btn-danger' : "btn-primary"}`} onClick={handleDecrement}>-</button>
         
      </div>
  
    </div>
        
        </div>

   
  );
};




export default Card;
