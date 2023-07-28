// import React, { useState } from 'react';
// import jsonData from '../data.json';
// import "./menu.css"


// const Menu = () => {
//   const [originalPrices, setOriginalPrices] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);
//   const [count, setCount] = useState(0);
//     const [totalCost, setTotalCost] = useState(0);
//     const [price,setPrice]= useState("") 

//   React.useEffect(() => {
//     const originalPricesData = jsonData.map(item => parseInt(item.price));
//     setOriginalPrices(originalPricesData);
//   }, []);

//   const handleIncrement = (index) => {
//     console.log(index)

//     if (isVisible === false) {
//       setIsVisible(true);
//     }
//     setCount((prevCount) => prevCount + 1);
//        setTotalCost((prevTotal) => prevTotal + originalPrices[index]);
//        setPrice((prevcost)=> prevcost+ jsonData[index])
//   };


//   const handleDecrement = (index) => {

//     setCount((prevCount) => prevCount - 1);

// setTotalCost((prevTotal) => prevTotal - originalPrices[index]);
//   };


//   return (
//       <div>
//         {jsonData.map((item, index) => (
//           <div className="card" key={index} style={{ width: "18rem" }}>
//             <img src={item.image} className="card-img-top" alt={item.name} />
//             <div className="card-body">
//               <h5 className="card-title">{item.name}</h5>
//               <p className="card-text">Price:{item.price} </p>
//               {isVisible && (
//           <div>
//            <p className="card-text">Total: {count} {}</p>
//            <p className="card-text">Cost(INR): {totalCost}</p>
//           </div>



//         )}

//               <button type="button" className="btn btn-primary" onClick={() => handleIncrement(index)}>+</button>
//               <button type="button" className="btn btn-primary" onClick={() => handleDecrement(index)}>-</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );



    
// };

// export default Menu;


import React from 'react';
import jsonData from '../data.json';
import './menu.css';
import MenuItem from './MenuItem'; // Import the MenuItem component
import Modal from './modal';

const Menu = () => {
  return (
    <div>
      {jsonData.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
      <Modal/>
    </div>
  );
};

export default Menu;



