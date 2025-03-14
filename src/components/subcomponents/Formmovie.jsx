// title, director, genre, release_year, abstract, image
import {useState} from "react";
import axios from "axios";

export default function Formmovie () {
    // Get Today Date
    const todayDate = new Date();

    // Empty movie object
    const initMovie = {
        title: "",
        director: "",
        genre: "",
        release_year: 2025,
        abstract: "",
        image: null,
    };

    // State Var
    const [addMovie, setAddMovie] = useState(initMovie);

    // Update movie form values
    function setMovieValues(e) {
        const { value, name } = e.target;
        if(name === "image") setAddMovie((currentMovie) => ({...currentMovie, image: e.target.files[0]}));
        else setAddMovie((currentMovie) => ({...currentMovie, [name]: value}));
    }

    // HandleSubmit
    function handleSubmit(e) {
        e.preventDefault();

        // Axios Call
        axios.post("http://localhost:3000/movies", addMovie,
            { headers: { "Content-Type": "multipart/form-data" },
            })
            .then(() => setAddMovie(initMovie))
            .catch((err) => console.log(err.response));
    }

    return (
        <>
            <div className="container mt-4">
                <h2>Add your review</h2>
                <div className="card p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={addMovie.title}
                                onChange={setMovieValues}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Director</label>
                            <input
                                className="form-control"
                                name="director"
                                value={addMovie.director}
                                onChange={setMovieValues}
                                required
                            ></input>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Genre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="genre"
                                value={addMovie.genre}
                                onChange={setMovieValues}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Release Year</label>
                            <input
                                type="number"
                                max={todayDate.getFullYear()}
                                className="form-control"
                                name="release_year"
                                value={addMovie.release_year}
                                onChange={setMovieValues}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Overview</label>
                            <textarea
                                className="form-control"
                                name="abstract"
                                value={addMovie.abstract}
                                onChange={setMovieValues}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cover Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                onChange={setMovieValues}
                                required
                            />
                        </div>

                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">
                                Add Movie
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}