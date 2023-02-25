import React from 'react';
import NumberButton from '../NumberButton';

const index = () => {
    const testArray = [1, 2];
  return (
    <div>
        {testArray.map((value, index) => (
            <NumberButton
            key={value}
            number={value}
            />
        ))}
    </div>
  )
}

export default index;
