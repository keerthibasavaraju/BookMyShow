import '../Styles/addmovies.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addmovies = () => 
{

    let [tittle,setTittle] =useState("")
    let [genre,setGenre] =useState("")
    let [rating,setRating] =useState("")
    let [language,setLanguage] =useState("")

    let navigate = useNavigate()

   let handleSubmit=(e)=>
   {
    e.preventDefault()
 let data ={tittle,genre,rating,language}
 fetch ("http://localhost:4000/movies",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)

 })
      alert ("Movie Added Successfully")
      navigate('/movies')
   }

    return (  
        <div className="addmovies"   >
        <form action="" onSubmit={handleSubmit}>
            <h2>Add your favourite Movies</h2>
                
                <label htmlFor="Tittle">Tittle</label>
                <br />
                <input type="text" name="" id="" value={tittle} onChange={(e)=>setTittle(e.target.value)} placeholder="Tittle"  />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="" id=""  value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="Genre" />
                <br />
                <label htmlFor="rating">Rating</label>
                <br />
                <input type="number" name="" id=""  value={rating} onChange={(e)=>setRating(e.target.value)} placeholder="Rating" />
                <br />
                <label htmlFor="Language">Language</label>
                <br />
                <input type="text" name="" id=""  value={language} onChange={(e)=>setLanguage(e.target.value)} placeholder="Language" />
                <br />
                <button  >Submit</button>
            
        </form>
        <img src="/images/wakanda.webp" alt=""  />
        </div>
    );
}
 
export default Addmovies;