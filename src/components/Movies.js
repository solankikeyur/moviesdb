import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

export default function Movies(props) {

    const [moviesCollection, setMoviesCollection] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(props.searchText) {
            fetchMovies();
        } else {
            setMoviesCollection([]);
        }
    }, [props.searchText])

    useEffect(() => {
        fetchMovies();
    }, [pageNo])


    const fetchMovies = async () => {
        if(props.searchText) {
            props.setLoader(true);
            const response = await fetch( `https://www.omdbapi.com/?s=${props.searchText}&apikey=c90274af&page=${pageNo}`);
            const jsonData = await response.json();
            setMoviesCollection(jsonData.Search);
            setTotalRecords(jsonData.totalResults);
            props.setLoader(false);
        }
    }

    const handleNextClick = async () => {
       
        if(pageNo + 1 <= Math.ceil(totalRecords/10)) {
            await setPageNo(pageNo + 1);
        }
        
    }

    const handlePrevClick = async () => {
        await setPageNo(pageNo - 1);
    }


    if(moviesCollection.length > 0 && !props.loader)  {

        return (
            <div className='container'>
                {props.searchText ? <h6>{totalRecords} movies found.</h6> : null}
                <div className='row'>
                    { moviesCollection ? moviesCollection.map((movie) => {
                        return <div className='col-md-3 mt-4' key={movie.imdbID}>
                                    <MovieCard title={movie.Title} image={movie.Poster} type={movie.Type} year={movie.Year}></MovieCard>
                                </div>
                    }) : "No Movies Found" }
                    
                </div>
                <hr></hr>
                <div className='container mt-4'>
                    <div className="d-flex mb-3">
                        <div className="p-2">
                            <button className='btn btn-dark btn-lg' disabled={pageNo <= 1 ? true : false} onClick={handlePrevClick}>Prev</button>
                        </div>
                        <div className="ms-auto p-2">
                            <button className='btn btn-dark btn-lg' disabled={pageNo+1 > Math.ceil(totalRecords/10) ? true : false} onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
            )
    } else {
        return (
            <div className='container'>
                No movies found.
            </div>
        )
    }
  
}
