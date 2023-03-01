import React, { useState } from 'react';
import RecipeList from './RecipeList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/main_style.css';
import { Paper } from '@mui/material';
import { Container } from '@mui/material';


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
        <div className='outside'>
            <Container
            maxWidth="lg"
            sx={{
                backgroundColor: "#d9fafb",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
                marginTop: "1rem"
    }}>
                <h1>Our Recipe Book</h1>
                    <Paper className='journal' elevation={10} style={styles.paper}>
                        <Link className='add_link' to='/recipe/add'>Add Recipe</Link>
                        <RecipeList recipe={recipe} setRecipe={setRecipe} deleteRecipe={deleteRecipe}/>
                    </Paper>
                <div className='about'>
                <h2 className='by'>By: Marquessa Macdonald and Savannah Dean</h2>
                    <Link className='about_link' to='/recipe/about'>About this project</Link>
                </div>
            </Container>

        </div>
    )
}

export default Main; 