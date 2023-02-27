import React, { useState } from 'react';
import RecipeList from './RecipeList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './main_style.css'
import { Paper } from '@mui/material';

const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    }
}

const Main = (props) => {
    const [recipe, setRecipe] = useState([]);
    const deleteRecipe = recipeId => {
        axios.delete('http://localhost:8000/api/recipe/' + recipeId)
            .then(res => {
                setRecipe(recipe.filter(p => p._id != recipeId));
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='container'>
            <Link className='about_link' to='/recipe/about'>About this project</Link>
                <h1>Recipe Book</h1>
                    <Paper className='journal' elevation={10} style={styles.paper}>
                        <Link className='add_link' to='/recipe/add'>Add Recipe</Link>
                        <RecipeList recipe={recipe} setRecipe={setRecipe} deleteRecipe={deleteRecipe}/>
                    </Paper>
            </div>
        </>
    )
}

export default Main; 