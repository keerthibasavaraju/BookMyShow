import '../Styles/home.css'



const home=()=>
{

let data = 
[
  {image:'/images/one.jpg'}, // pass value without singlecodes bcz its the file document
  {image:'/images/one.jpg'},
  {image:'/images/one.jpg'},
  {image:'/images/one.jpg'}
]

    return(
<div className="Home">

    <div className="banner">
    <img width="100%" src="/images/avatar-2.jpg" alt="" />
    </div>
    
    <div className="poster">
      <div className="title">
        <h1>
            Recommended Movies
        </h1>
        <a href="" style={{textDecoration:"none",fontweight:"bolder"}}>See All &gt;</a>
        

      </div>
      <div className="images">
       {
        data.map ((x)=>
        (
              <img src={x.image} alt=""  />
        )
          
        
        )}
        
      </div>

    </div>

</div>
    );
}
export default home;