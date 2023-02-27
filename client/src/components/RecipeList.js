import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './display.css';

const RecipeList = (props) => {
    const { recipe, setRecipe} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipe/")
        .then((res)=> {
            console.log(res.data);
            setRecipe(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                recipe.slice().reverse().map((recipe, index)=>{
                    return <div key={index}>
                        <h2>{recipe.title}</h2>
                        <p className='add_this_later'>Added on: {new Date(recipe.createdAt).toLocaleString()} |
                        <Link className='link' to={`/recipe/${recipe._id}`}> Details </Link> |
                        <Link className='link' to={`/recipe/edit/${recipe._id}`}> edit </Link> 
                        </p></div>
                })
            }
        </div>
    )
}

export default RecipeList;