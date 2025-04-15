import { useState, useEffect } from 'react';

const Attraction = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    
    setPlaces([
      { id: 1, name: '경복궁', desc: '조선시대 대표 궁궐' },
      { id: 2, name: '남산타워', desc: '서울의 랜드마크' },
    ]);
  }, []);

  return (
    <section>
      <h2>여행 명소</h2>
      <ul>
        {places.map(place => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Attraction;
