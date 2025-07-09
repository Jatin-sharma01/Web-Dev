import React from 'react'

function Food() {

const food1 = "Orange";
const food2 = "Banana";


  return (
    <>
    <ul>
        <li>{food1}</li>
        <li>{food2.toLocaleUpperCase()}</li>
    </ul>
    <hr />
    </>
  )
}

export default Food