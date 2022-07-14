function GifFilter(props){
    return(
<div>
    <form>
    <label  htmlFor="GifFilter"> Search these Gifs:</label>
    <input id="search" type="text" value={props.value} name="GifFilter" />
    <button id='button'onSubmit={props.onSubmit}>Submit</button>
    </form>
    </div>
    )
}

export default GifFilter