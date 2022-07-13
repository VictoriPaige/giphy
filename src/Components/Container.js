import{useState, useEffect} from 'react';
import pullGifs from '../Services/Constants';


function Container(){
     const [gif, setGif]=useState('')
     
    //  async function handleSubmit(event) {
    //     event.preventDefault()
    //       let input = document.querySelector('#search')
    //       const result = await pullGifs(input.value)
    //       setGif(result.data.data)
    //  }

     useEffect(async() => {
        const data = await pullGifs();
    // console.log(data) 
    setGif(data)
    }, [])

 console.log(gif);


return(
 <div>
        <form>
            <input id="search" type="text"/>
            {/* onChange value  */}
            {/* onClick={handleSubmit} */}
        <button name="submit">Search</button>
        </form>
        {/* <p>{gif}</p> */}
    </div> 

)}



export default Container