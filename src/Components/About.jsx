import React, { useState } from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import ProfilePic from '../images/capture.png'
import Title from '../Components/Title'
import './Styles/About.css';



export default function About() {

    Title('ABOUT');

    const fillStar = (num) => {
        const row = [];
        for (var i = 0; i < num; i++) {
          row.push(<StarIcon className='starBg' key={i}/>);
        }
        return row;
      };

return (
    <div className="container">
        <Card className='cardShadow'>
            <CardContent className='cardContent-bg'>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className='imageBorder'>
                            <img src={ProfilePic} className="imgsize" alt="myself"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <p>Im <b className='myBold'>Gil Flores</b> a highly motivated web developer  with over 3 years of experience in the industry and looking for an opportunity to grow as a fullstack development skills in an innovative environment.</p>
                        <p>I created this portfolio to showcase my developmental skills.</p>
                        <br/>
                        <p><b  className='myBold'>Education</b> - Adamson University</p>
                        <br/>
                        <p><b  className='myBold'>Work Experience</b></p>
                        <p>- <b className='myBold'>Netlingo</b> Jr Frontend Developer September 2022 - present</p>
                        <p>- <b className='myBold'>Overseas Workers Welfare Administration (OWWA)</b> - Fullstack Developer Oct 2019 - Sep 2022 (2 Years, 11 Months)</p>
                        <p>- <b className='myBold'>Sky Cable Corporation</b> - Account Officer Jul 2019 - Sep 2019 (2 Months, 4 Weeks)</p>
                        <br/>
                        <p><b className='myBold'>Skills</b>(Highest star rating = 5)</p>
                        <p>- <b className='myBold'>HyperText Markup Language (HTML)</b> {fillStar(5)}</p>
                        <p>- <b className='myBold'>Bootsrap 4</b> {fillStar(4)}</p>
                        <p>- <b className='myBold'>PHP (PHP: Hypertext Preprocessor)</b> {fillStar(4)}</p>
                        <p>- <b className='myBold'>Ajax</b> {fillStar(3)}</p>
                        <p>- <b className='myBold'>Cascading Style Sheets(CSS)</b> {fillStar(3)}</p>
                        <p>- <b className='myBold'>JavaScript</b> {fillStar(3)}</p>
                        <p>- <b className='myBold'>jQuery</b> {fillStar(3)}</p>
                        <p>- <b className='myBold'>Laravel 7</b> {fillStar(3)}</p>
                        <p>- <b className='myBold'>Material UI</b> {fillStar(2)}</p>
                        <p>- <b className='myBold'>React JS</b> {fillStar(2)}</p>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}
