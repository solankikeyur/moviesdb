import React from 'react'

export default function SearchBar(props) {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-12'>
                <div className="input-group mb-3 input-group-lg">
                    <input onChange={props.handleSearchInput} type="text" className="form-control" placeholder={props.placeholder} aria-label={props.placeholder}  />
                    <button className="btn btn-outline-secondary" type="button" onClick={props.handleSearchBtn} >{props.btnName}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
