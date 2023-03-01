import React from 'react';
import { Paper } from '@mui/material';
import '../styles/about.css';
import { Link } from 'react-router-dom';

const styles = {
    paper: {
        width: "40rem", padding: "1rem",
        backgroundColor: "#d9fafb"
    }
}
function About() {
return (
    <div className='about_container'>
        <h1 className='h1_about'>About</h1>
        <Paper className='paper' elevation={10} style={styles.paper}>
        <p className='text_paragraph'>The group members in this project, Marquessa and Savannah, lived together for almost four years.
        The kitchen was the place that we bonded the most. We love cooking, eating, drinking and playing games together in our kitchen,
        and creating a website together where we can try out new recipes and add them to recipe book seemed like the perfect 
        project. We had a lot of fun creating this personal recipe book and hope you enjoy our site.   -Marquessa and Savannah
        </p>
        </Paper>
        <Link className='back' to='/recipe/'>Back</Link>
    </div>
);
}

export default About;