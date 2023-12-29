import Bird from "./Bird";

const Cards = ({birds, onAdopt}) => {
  return (
    <div className="birds">
      <div className="cards">
        <h1>Birds</h1>
        <div className="bird-grid">
          {birds.map((bird) => (
            <Bird
              key={bird.id}
              name={bird.name}
              image={bird.img}
              amount={Number(bird.amount)}
              onAdopt={() => onAdopt(bird.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
