import { Fragment } from 'react';
import './App.css';

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  
  const style = {
    display:'inline-block',
    border:'2px solid black',
    margin:'20px',
    padding: '10px',
    borderRadius: '10px',
  }

  return(
    <Fragment>
        {products.map((el, i) => (
        <div style={style} key={i}>
          <img src={el.image} alt="Girl in a jacket"></img>
          <div><b>{el.name}</b></div>
          <div>{el.price}</div>
        </div>
        ))}
    </Fragment>
  )
}

export default App;
