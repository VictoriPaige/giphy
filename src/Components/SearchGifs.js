import React from "react";
import pullGifs from "../Services/Constants";
import { useState, useEffect } from "react";

export default function ImageContainer(){
async function searchFor(keyword){

    try{
        const res = await pullGifs(keyword)
        console.log(res)}
        catch(error){console.log('error')}
    }
}




// import { useState, useEffect } from "react";
// import {pullGifs} from '../Services/Giphy'

// function SearchGifs(){
//     const [Gif,setGif]=useState('');
//     async function handleSubmit(event) {
//         event.preventDefault()
//           let input = document.querySelector('#search')
//           const image = await pullGifs(input.value)
//           //console.log(image)
//         //   setGif(image.data.) //NOT RIGHT!?!
        
//       }
      
        
//         return (
//           <div>
//             <form>
//             <label> <h1><b>Search Gifs </b></h1></label>
//               <input id='search' type="text"/>
//             <button onClick={handleSubmit}>Search</button>
//             </form>
//             <p>{Gif}</p>
//           </div>
    
//     })

//     export default SearchGifs