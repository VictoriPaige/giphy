function Display({gifs}){
    return(
        <div>
           {gifs.map((gif, index)=>{
            return (
                <img src={gif.images.fixed_width_small.url} key={index} />
                ) 
           })}
        </div>
    )
}

export default Display