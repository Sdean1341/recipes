import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/detail.css';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    }
}

const Detail = (props) => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deleteRecipe = (recipeId) =>{
        setIsLoading(true)
        axios.delete('http://localhost:8000/api/recipe/' + recipeId)
            .then(res => {;
                setIsLoading(false);
                alert("successfully deleted entry");
                navigate('/recipe')
                
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipe/" + id)
            .then( res => {
                console.log(res.data);
                setRecipe(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <div className='container3'>
            <h1 className='name_this_later'>{recipe.title}</h1>
            <h3 className='name_this_later'>Added on: {recipe.createdAt}</h3> 
            <Paper className='journal' elevation={10} style={styles.paper}>
            <p className='name_this_later'>Skill Level: {recipe.skillLevel}</p>
            <p className='name_this_later'>Amount of time: {recipe.time}</p>
            <p className='name_this_later'>Ingredients: {recipe.ingredients}</p>
            <p className='name_this_later'>Instructions: {recipe.instructions}</p>
            <p className='name_this_later'>Other details: {recipe.otherDetails}</p>
            <Link className='back' to='/recipe/'>Back</Link>
            <Link className='edit_link' to={`/recipe/edit/${recipe._id}`}> Edit </Link> <br/>
            { !isLoading && <button className='btn' onClick={() => deleteRecipe(recipe._id)}>Delete Entry </button> }
            </Paper>
        </div>
    );
}
export default Detail;
