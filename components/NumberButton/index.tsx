import React, { useState } from 'react';

type Props = {
    number: number
}

const index = ({number}: Props) => {
    const [choice, setChoice] = useState(false)

    const handlerColorButton = () => {
        setChoice(!choice)
        console.log('Choice', choice)
    }

  return (
    <div>
      <p style={{backgroundColor: `${choice ? "#FFF000" : "#CCCCCC"}`}} onClick={handlerColorButton}>{number}</p>
    </div>
  )
}

export default index;
