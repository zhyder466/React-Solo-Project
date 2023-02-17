import React from 'react'

export default function Body(props) {
  return (
    <div className="body">
      <div>
        <img className="image" src={props.img} />
      </div>

      <div className="second-div">
        <img className="location-logo" src="./components/location.png" />
        <span>{props.location}</span>
        <span className="underline">View on Google Maps</span>
        <h1>{props.title}</h1>
        <div className="third-div">
          <h4>{props.date}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
