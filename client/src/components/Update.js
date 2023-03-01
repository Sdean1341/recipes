import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/add.css'
//this is using the same one as "add recipe since the styles will be so similar"

const Update = (props) => {
    const { id } = useParams();
    const {recipe, setRecipe} = props;
    const [title, setTitle] = useState(""); 
    const [skillLevel, setskillLevel] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/' + id)
            .then(res => {
                setTitle(res.data.title);
                setskillLevel(res.data.skillLevel);
                setTime(res.data.time);
                setIngredients(res.data.ingredients);
                setInstructions(res.data.instructions);
                setOtherDetails(res.data.otherDetails);
            })
            .catch(err => console.log(err))
    }, [])
    const updatedRecipe = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/recipe/' + id, {
            title,
            skillLevel,
            time,
            ingredients,
            instructions,
            otherDetails
        })
            .then(res => {
                console.log(res);
                navigate("/recipe");
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.error.errors)
                })
    }
    return (
        <div className='container2'>
            <h1 className='update'>Update Entry</h1>
            <form onSubmit={updatedRecipe}>
            <p>
                <label className='label'>Recipe Title </label><br/>
                <input className='title' type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                {errors.title ? 
                <p>{errors.title.message}</p>
                : null}
            </p>
            <div className='middle'>
            <div className='left'>
            <p>
                <label className='label'>Skill Level </label><br/>
                <input className='box1'  type="text" value={skillLevel} onChange = {(e)=>setskillLevel(e.target.value)}/>
                {errors.skillLevel ? 
                <p>{errors.skillLevel.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Amount of time </label><br/>
                <input className='box1' type="text" value={time} onChange = {(e)=>setTime(e.target.value)}/>
                {errors.time ? 
                <p>{errors.time.message}</p>
                : null}
            </p>
            </div>
            <div className='right'>
            <p>
                <label className='label'>Ingredients</label><br/>
                <textarea className='box' type="text" value={ingredients} onChange = {(e)=>setIngredients(e.target.value)}/>
                {errors.ingredients ?
                <p>{errors.ingredients.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Instructions</label><br/>
                <textarea className='box' type="text" value={instructions} onChange = {(e)=>setInstructions(e.target.value)}/>
                {errors.instructions ?
                <p>{errors.instructions.message}</p>
                : null}
            </p>
            </div>
            </div>
            <p>
            <label className='label'>Other comments </label><br/>
                <textarea className='box' type="text" placeholder='e.g. vegetarian, gluten-free, etc.' 
                value={otherDetails} onChange = {(e)=>setOtherDetails(e.target.value)}/>
            </p>
            <Link className='back' to='/recipe/'>Back</Link><br/>
            <button className='submit' type="submit">Submit</button> 
            </form>
        </div>
    )
}
export default Update;