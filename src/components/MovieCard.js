import React from 'react'

export default function MovieCard(props) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.title} height="300" />
            <div className="card-body">
                <div className="card-header bg-white">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Type</b> - {capitalizeFirstLetter(props.type)}
                    </li>
                    <li className="list-group-item">
                        <b>Year</b> - {props.year}
                    </li>
                </ul>
            </div>
        </div>
    )
}
