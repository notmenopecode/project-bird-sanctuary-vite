import { useState} from "react";
import Header from "./components/Header"
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";

function App() {
  const[cart,setCart]= useState([]);
  const[showAlert, setShowAlert]= useState(false);

  function addBirdToCart(birdId){
    if(!cart.some((item)=> item.id===birdId)){
      const selectedBird= birdData.find((bird) => bird.id === birdId);
      setCart([...cart, { ...selectedBird}]);
    }else{
      alert("Bird Already Chosen");
    }
  };

  function removeBirdFromCart(birdId){
    const updatedCart= cart.filter((item)=> item.id !== birdId);
    setCart(updatedCart);
  };

  function calculateTotalCost(){
    return cart.reduce((total, bird) => total + bird.amount, 0);
  };

  function applyDiscount(){
    return cart.length >= 3 ? 10 : 0;
  };

  function handleCheckout(){
    setShowAlert(true);
    setCart([]);
  };






  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <aside className="left-column">
          <Cart
            cart={cart}
            onRemove={removeBirdFromCart}
            total={calculateTotalCost()}
            discount={applyDiscount()}
            onCheckout={handleCheckout}
          />
          {showAlert && (
            <div className="alert">
              <p>You have successfully adopted birds. Thank you!</p>
              <button onClick={() => setShowAlert(false)}>Close</button>
            </div>
          )}
          <Checkout onCheckout={handleCheckout} />
        </aside>
        <div className="right-column">
          <Cards birds={birdData} onAdopt={addBirdToCart} />
        </div>
      </main>
    </div>
  );
};

export default App;