import React from "react";
import data from "./dummy-data";



class MovieCard extends React.Component {
    movie = {};

    constructor(props) {
        super(props);
        this.movie = props.movie;
        this.connection = props.lain;
    }
    
    render() {
        return (
            <div className="container my-5">
                <div id="daftar-anime" className="row">
                    {data.map((movie, mal_id) => 
                        <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                            <div class="card h-100" key={mal_id}>
                                <img
                                src={movie.image_url}
                                class="card-img-top"
                                alt="skilvul"
                                />
                                <div class="card-body">
                                <h5>{movie.title}</h5>
                                <h6 class={`badge bg-danger`}>{movie.type}</h6>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                                </div>
                                <div class="card-body">
                                <a
                                    href={movie.url}
                                    class="btn btn-primary w-100 text-uppercase"
                                >
                                    readmore
                                </a>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MovieCard;
