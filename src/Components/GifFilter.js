function GifFilter(props){
    return(
<div>
    <form onSubmit={props.onSubmit}>
    <label  htmlFor="GifFilter"> Search these Gifs:</label>
    <input id="search" type="text" value={props.value} name="GifFilter" />
    <button id='button'>Submit</button>
    </form>
    </div>
    )
}

export default GifFilter