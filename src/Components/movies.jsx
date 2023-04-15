import '../Styles/movies.css'


import { useState,useEffect } from "react";
import MoviesData from './moviesData.jsx'
import Celebrities from './celebrities.jsx'


const Movies = () => {



let [movie , setMovie]=useState([])

useEffect(()=>
{
    let check = async ()=>
    {
        let response =await fetch(`http://localhost:4000/movies`)
        let data = await response.json()
        setMovie(data)
        let resp = await fetch(`http://localhost:4000/celebrities`) 
        let da= await resp.json()
        setCeleb(da)
    }
    check();
},[])


 
let[Celeb,setCeleb]=useState([])




let remove =(id,tittle)=>
{
     let result=(movie.filter((x)=>(x.id!==id)))
     setMovie(result)
     alert (`${tittle} has been removed from favorites`)
    }

    return ( 
        <div className="values"  >
           <div className="tittle">
           <h1>Favorite Movies And Tv Shows</h1>
           <div className='underline'>
            </div>
           </div>
            <MoviesData  data={movie} fn={remove} tittle="All Movies" />
            <MoviesData  data={movie.filter(x => x.rating > 4.5)} fn={remove}  tittle="Top Rated" />
            <MoviesData  data={movie.filter(x=> x.language == "English")} fn={remove}  tittle="English Movies" />
            <div className="pic" style={{padding:'10px 64px'}}>
            <div  >
           <h1>Top Celebrities</h1>
           <div className='under'></div>
         </div>
           <div >
           <Celebrities data={Celeb}  />
           </div>
            </div>
         
        </div>
     );
}
 
export default Movies;

