import { useState, useEffect } from 'react';

const FoodInfo = () => {
  const [foods, setFood] = useState([]);

  useEffect(() => {
    
    setFood([
      { id: 1, name: '짜장면', desc: '40년맛집' },
      { id: 2, name: '탕수육', desc: '갓튀긴' },
    ]);
  }, []);

  return (
    <section>
      <h2>맛집</h2>
      <ul>
        {foods.map(food => (
          <li key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodInfo;
