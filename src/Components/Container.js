import{useState, useEffect} from 'react';
import pullGifs from '../Services/Constants';
import Display from './Display';
import GifFilter from './GifFilter';

function Container(){
     const [gif, setGif]=useState([])

     const handleSubmit=async()=>{
        window.event.preventDefault();
          let input = document.querySelector('#search')
          const result = await pullGifs(input.value)
          result && setGif(result)
     }
    //  console.log(gif)

     useEffect(() => handleSubmit(), [])

return(
 <div>
    <GifFilter onSubmit={handleSubmit} />
    <Display gifs={gif}/>
 </div>

)}

export default Container