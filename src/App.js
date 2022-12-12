import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './card'
import Cart from './cart';
import { useState } from 'react';
function App() {
  let products = [
    {
      id: 1,
      name: "realme Book slim",
      img: "https://image01.realme.net/general/20210812/1628766726159.png.webp",
      price: 48000

    },
    {
      id: 2,
      name: "realme 8 (Cyber Silver)",
      img: "https://image01.realme.net/general/20210323/1616485180533.png.webp",
      price: 18000

    },
    {
      id: 3,
      name: "realme Buds Air 3",
      img: "https://image01.realme.net/general/20220321/1647863780293.png.webp",
      price: 3000

    },
    {
      id: 4,
      name: "realme Watch 2 (Gold)",
      img: "https://image01.realme.net/general/20211201/1638356650962.png.webp",
      price: 6000

    },
    {
      id: 5,
      name: "realme Buds 2 (Black)",
      img: "https://image01.realme.net/general/20200603/1591155797643.jpg.webp",
      price: 2500

    },
    {
      id: 6,
      name: "realme Wireless Mouse",
      img: "https://image01.realme.net/general/20211229/1640775018908.jpg.webp",
      price: 700

    },
    ,
    {
      id: 7,
      name: "realme Smart TV 4K",
      img: "https://image01.realme.net/general/20200930/1601463930406.jpg.webp",
      price: 40000

    },
    {
      id: 8,
      name: "realme Pad real Gold",
      img: "https://image01.realme.net/general/20210907/1630992241023.png.webp",
      price: 25000

    },
    {
      id: 9,
      name: "realme 100W Soundbar",
      img: "https://image01.realme.net/general/20201009/1602214791898.jpg.webp",
      price: 8000

    }
  ];
  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  let AddtoCart = (product) => {
    setCart([...cartList, { ...product, quantity: 1 }]);
    setTotal(total + product.price);

  }
  let removeCart = (product) => {
    let itemIndex = cartList.findIndex((item) => product.id === item.id);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    setTotal(total - (product.price * product.quantity));
  }
  let incQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
    setCart([...cartList]);
    setTotal(total + cartItem.price);

  }
  let decQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
    setCart([...cartList]);
    setTotal(total - cartItem.price);

  }

  return (
    <>
      <header className="bg-dark py-1 sticky-top">
        <div className="container px-4 px-lg-5 my-4">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Realme</h1>
            <p className="lead fw-normal text-white-50 mb-0">Brand Mall</p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className='row mt-3' >
          <div className='col-lg-9'>
            <div className='row'>
              {
                products.map((product, index) => {
                  return <Card key={index} product={product} AddtoCart={AddtoCart} cartList={cartList} />
                })
              }
            </div>

          </div>
          <div className='col-lg-3'>
            <h3>Your Cart Items  </h3>
            <Cart cartList={cartList} removeCart={removeCart} incQuantity={incQuantity} decQuantity={decQuantity} />
            <div className='col-lg-3 w-100 mt-2 total'>
              <h4>Total : {total} /-</h4><button className=' btn btn-outline-secondary floatright'> Place order</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
