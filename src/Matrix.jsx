import React, { useState } from 'react';


const Matrix = () => {

  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (index === 8) {
      const newColors = [...colors];
      clickOrder.forEach((i, idx) => {
        setTimeout(() => {
          newColors[i] = 'orange';
          setColors([...newColors]);
        }, idx * 500);
      });
    } else {
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  };

  function reset(){
    setColors(Array(9).fill('white'));
    setClickOrder([]);
  }

  return (
    <div className = 'flex flex-col items-center'>
    <div className="matrix my-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box rounded-xl"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
    <button className = 'rounded-xl border w-full bg-white text-black text-lg px-4' onClick = {reset}>Reset</button>
    </div>
  );
};

export default Matrix;
