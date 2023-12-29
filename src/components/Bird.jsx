
const Bird = ({ name, image, amount,onAdopt}) => {
  return (
    <div  className="bird-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Amount: ${amount}</p>
        <button onClick={onAdopt}>Adopt</button>
       
    </div>
  );
};

export default Bird