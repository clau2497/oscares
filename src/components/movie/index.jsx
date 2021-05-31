import React, {useEffect, useState} from "react"
import './index.css'
import movie_data from "../../constant/movie_data"
import like from "../../assets/img/like.png"
import dislike from "../../assets/img/dislike.png"
import {Link} from "react-router-dom"

const Catalogue = () => {

    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        setMoviesData(movie_data.data)
    }

    const incrementVote = (key) => {
        const newArray = moviesData.map(movie => {
            movie.key == key
                ? movie.votes = movie.votes + 1
                : movie.votes = movie.votes
            return movie
        })
        setMoviesData(newArray)
    }

    const decrementVote = (key) => {
        const newArray = moviesData.map(movie => {
            movie.key == key
                ? movie.votes = movie.votes - 1
                : movie.votes = movie.votes
            return movie
        })
        setMoviesData(newArray)
    }

    const orderArray = () => {
        const orderArray = moviesData.sort((a, b) => b.votes - a.votes)
        setMoviesData(orderArray)
    }

    return (
        <>
            <h1>Categoría: Película más popular</h1>
            <h3>Vota por tu favorita</h3>
            <div className="container">
            <button  id="ordenby"
                     onClick={() => orderArray()}
            >
               Ordenar por los más votados
            </button>
            </div>
            <div className="container">

                {

                    moviesData.map(movie => {
                        return <Movie_card
                            movie={movie}
                            increment={incrementVote}
                            decrement={decrementVote}
                        />
                    })
                }

            </div>
        </>
    )
}


const Movie_card = (props) => {



    return (


        <div id="background" className="card"
             style={{
                 backgroundImage: `url(${props.movie.img})`

             }}>

            <div id="buttons">
                <button
                    id="confirmationbutton"
                    onClick={() => props.increment(props.movie.key)}
                >
                    <img id="icon" src={like}/></button>
                <h4>{props.movie.votes}</h4>
                <button
                    id="cancelarbutton"
                    onClick={() => props.decrement(props.movie.key)}
                >
                    <img id="icon" src={dislike}/>
                </button>
            </div>

            <div className="container">

                <Link
                    classname="link"
                    to={`/information/${props.movie.key}`}>
                    <b>
                        Más información
                    </b>
                </Link>
            </div>
        </div>


    )
}

export default Catalogue

