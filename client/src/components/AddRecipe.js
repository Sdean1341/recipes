import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add.css';

const AddRecipe = (props) => {
    const {recipe, setRecipe} = props;
    const [title, setTitle] = useState(""); 
    const [skillLevel, setskillLevel] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe/', {
            title,
            skillLevel,
            time,
            ingredients,
            instructions,
            otherDetails,
            createdAt: new Date().toLocaleString()
        })
            .then(res=>{
                console.log(res);
                navigate("/recipe");
                console.log(res.data);
                setRecipe([res.data.recipe, ...recipe]);
                console.log(recipe);
            })
            .catch(err=> {
            console.log(err.response.data);
            setErrors(err.response.data.error.errors)
        });
    }
    
    return (
        <div>
            <h1> New Entry</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className='label'>Recipe Title </label><br/>
                <input className='title' type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                {errors.title ? 
                <p>{errors.title.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Skill Level </label><br/>
                <input className='setting'  type="text" value={skillLevel} onChange = {(e)=>setskillLevel(e.target.value)}/>
                {errors.skillLevel ? 
                <p>{errors.skillLevel.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Amount of time </label><br/>
                <input className='time' type="text" value={time} onChange = {(e)=>setTime(e.target.value)}/>
                {errors.time ? 
                <p>{errors.time.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Ingredients</label><br/>
                <textarea className='ingredients' type="text" value={ingredients} onChange = {(e)=>setIngredients(e.target.value)}/>
                {errors.ingredients ?
                <p>{errors.ingredients.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Instructions</label><br/>
                <textarea className='instructions' type="text" value={instructions} onChange = {(e)=>setInstructions(e.target.value)}/>
                {errors.instructions ?
                <p>{errors.instructions.message}</p>
                : null}
            </p>
            <p>
            <label className='label'>Other comments </label><br/>
                <textarea className='comments' type="text" placeholder='e.g. vegetarian, gluten-free, etc.' 
                value={otherDetails} onChange = {(e)=>setOtherDetails(e.target.value)}/>
            </p>
            <button className='submit' type="submit">Add Entry</button>
        </form>
        </div>
    )
}
export default AddRecipe;