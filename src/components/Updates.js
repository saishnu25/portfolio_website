import React from 'react';
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Update
export const StyledUpdates = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 50%, #13327C 100%);
    padding-left: 5%;
    padding-right: 5%;
    font-size: 150%;
    font-family: verdana;
    color: white;
    line-height: 2.5;

`

//Styled Left Description
export const StyledDescriptionLeft = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 115%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
    align-items: center;

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            background-color: gray;
        }
    }

`

//Image Left Layout
export const ImagesLeft = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 10%;
    align-items: left;
    float: left;
    
`

//Styled Right Description
export const StyledDescriptionRight = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 10%;
    font-size: 115%;
    font-family: montserrat;
    color: white;
    line-height: 2.5;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 3%;
        justify-content: center;
        width: 80vw;
    }

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            transform: color;     
        }
    }

`

//Image Right Layout
export const ImagesRight = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 10%;
    align-items: right;
    float: right;
    
`

//Styled Spotify
export const StyledSpotify = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 5%;
    padding-right: 10%;
    line-height: 2.5;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 3%;
        justify-content: center;
        width: 80vw;
    }

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            transform: color;
            transform: scale(1.1);
        }
    }

`

//Updates Function
export default function Updates(){

    return(
        <div>
            <StyledUpdates className = "fade-in-center">
            <h1>
                Updates
            </h1>
            </StyledUpdates>

            <StyledDescriptionLeft className = "fade-in-left">
                <br/>
               <h3><strong>Projects:</strong></h3>
            </StyledDescriptionLeft>

            <StyledDescriptionLeft className = "fade-in-left">
                Check back soon!

                <br/><br/><br/>
            </StyledDescriptionLeft>
            
            <br/>

        </div>

    
    )

}