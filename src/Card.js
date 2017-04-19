import React from 'react'

function Card (props) {
  return (
    <div className='column column-block' key={props.id}>
      <a href={props.image}>
        <img src={props.image} className='thumbnail' alt='sample ballot' />
      </a>
      <div>{props.attribution}</div>
    </div>
  )
}

export default Card
