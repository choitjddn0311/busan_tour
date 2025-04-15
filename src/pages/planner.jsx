import { useState } from 'react';

const Planner = () => {
  const [plan, setPlan] = useState([]);

  const addPlan = (newItem) => {
    setPlan([...plan, newItem]);
  };

  return (
    <section>
      <h2>일정 만들기</h2>
      <button onClick={() => addPlan('남산타워 방문')}>+ 일정 추가</button>
      <ul>
        {plan.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Planner;
