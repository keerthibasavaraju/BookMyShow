const MoviesData = (props) => 
{

  let movie = props.data
  let remove = props.fn
 
  
    
  return (  
        <div className="moviesData" style={{margin:"0px  64px" }}>
            
            <h1>{props.tittle}  </h1>
            
            {
                (movie.length==0)? <h1><center>No movies to display &#128554;</center></h1>:movie.map((x)=>(
                <div className='moviesdata'>
                <h1>Tittle: {x.tittle} </h1>
                <h2>Ratings: {x.rating} &#11088;</h2>
                <h4>Genere: {x.genre} / Language:{x.language}</h4>
                
                <button onClick={()=>remove(x.id,x.tittle)}>Remove &#128078;</button> 
               </div>
                )
               )
            }
           
        
           
        </div>
    );
}
 
export default MoviesData;