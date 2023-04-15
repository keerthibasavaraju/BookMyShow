const Celebrities
 = (props) => {
  let celeb = props.data


    return ( 
        <div className="celeb" style={{padding:'20px 0px'}}>
             {
            celeb.map((x)=>
            <div  >
                <img src={x.image} alt="" style={{height:'200px',width:'200px',borderRadius:'50%'}} />
                <h3> <center>{x.Name}</center></h3>
            </div>
            )
           }
        </div>
     );
}
 
export default Celebrities
;