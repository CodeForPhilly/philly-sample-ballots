import React from 'react'

function Card (props) {
  return (
    <div className='column column-block' key={props.id}>
      <a href={props.photo}>
        <img src={props.photo} className='thumbnail' alt='sample ballot' />
      </a>
      {props.paid_for_by}
    </div>
  )
}

export default Card