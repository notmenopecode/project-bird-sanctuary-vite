const Cart = ({cart, onRemove, total, discount,onCheckout}) => {
  
  
  
  
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ol>
        {cart.map((bird) =>(
          <li key={bird.id}>
            {bird.name} - {bird.amount}
            <button onClick={() => onRemove(bird.id)}>Remove</button>
          </li>
        ))}
      </ol>
      <h4>Total Price: ${total}</h4>
      <h5>Discount: {discount}%</h5>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
