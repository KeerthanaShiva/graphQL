import React, { useState } from 'react'
import { useQuery, gql, useLazyQuery } from '@apollo/client'
import { Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button';

const QUERY_ALL_USERS = gql`
query GetAllUsers{
    users {
      age
      id
      name
      username
    }
  }
`
const QUERY_ALL_MOVIES = gql`
query GetAllMovies{
    movies{
        name
        yearOfPublication
    }
  }
`
const QUERY_MOVIE = gql`
query GetMovie{
    movie{
        name
        yearOfPublication
    }
  }
`
const GET_MOVIE_BY_NAME = gql`
query Movie($name:String!){
  movie(name:$name){
         name
         yearOfPublication
  }
}
`

function DisplayData() {

    const [ movieSearched, setMovieSearched ] = useState("");
    const { data, loading } = useQuery(QUERY_ALL_USERS);
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, { data: movieSearchedData, error: movieError }] = useLazyQuery(GET_MOVIE_BY_NAME);

    if (loading) {
        return <h1>Data is loading</h1>
    }
    if (data) {
        console.log(data);
    }
    if(movieData){
        console.log(movieData);
    }
    if(movieSearchedData){
        console.log("hello");
        console.log(movieSearchedData);
    }
    if(movieError){
        console.log("hello error");
        console.log(movieSearched);
        console.log(movieError);
    }
    return (
        <div>
            {data && data.users.map((user) => {
                return <div>
                    <h1>Name:{user.name}</h1>
                    <h1>Age:{user.age}</h1>
                    <h1>Nationality:{user.nationality}</h1>

                </div>
            })}
            {movieData && movieData.movies.map((movie) => {
                return <div>
                    <h1>Name:{movie.name}</h1>
                </div>

            })}
            <Grid item sm={6} xs={6} md={6}>
                <TextField
                    label="Movie name"
                    variant='standard'
                    placeholder='interstellar...'
                    onChange={(event) => {
                        setMovieSearched(event.target.value);
                    }
                    }
                />
            </Grid>
            <button onClick={()=>{fetchMovie({variables:{name:movieSearched}})}}>Fetch data</button>

            <div>
                {movieSearchedData && ( <div>
                    <h1>Movie name: {movieSearchedData.movie.name}</h1>
                    <h1>Year Of Publication:{movieSearchedData.movie.yearOfPublication}</h1></div>)}
                    {movieError && <h1>There was an error fetching the data</h1>}
            </div>
        </div>
    )
}

export default DisplayData
