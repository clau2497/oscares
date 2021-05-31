import React, {useEffect, useState} from "react";
import '../MovieInfo/index.css'
import movie_data from "../../constant/movie_data"
import {useParams} from "react-router-dom";
import like from "../../assets/img/like.png";


const Information = () => {
    let {movieId} = useParams()
    const [movieInfo, setMovieInfo] = useState({})

    useEffect(() => {
        getMovieInfo();
    }, []);


    const getMovieInfo = () => {
        let movieInfoFinded = movie_data.data.filter(movie => {
            return movie.key == movieId
        })

        setMovieInfo(movieInfoFinded[0])
    }

    return (
        <>

            <div id="card">
                <h1>{movieInfo.title}</h1>
                <h3>Titulo original: {movieInfo.originaltitle}</h3>
                <div className="container">


                    <img id="imginfo" src={movieInfo.img}/>
                    <p id="text"><b> Sipnosis: </b> {movieInfo.synopsis} </p>

                    <div id="text">
                        <div><b> Duración: </b> {movieInfo.duration} &nbsp;&nbsp;</div>
                        <div><b> País:</b> {movieInfo.country} &nbsp;&nbsp;</div>
                        <div><b> Director: </b> {movieInfo.director} &nbsp;&nbsp;</div>
                        <div><b> Guíon: </b> {movieInfo.script}</div>
                    </div>
                    <div id="text">
                        <div><b> Música: </b> {movieInfo.music} </div>
                        <div><b> Fotografía: </b> {movieInfo.director}</div>
                    </div>

                    <div id="text">
                        <div><b> Reparto: </b> {movieInfo.distribution}  </div>
                    </div>
                    <div id="text">
                        <div><b> Productora: </b> {movieInfo.producer}</div>
                    </div>


                    <div id="text">
                        <div><b> Género: </b> {movieInfo.gender}  </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Information

