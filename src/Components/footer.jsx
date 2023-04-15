
import '../Styles/footer.css'

const Footer=()=>
{
    let icon=[
        {icons: ' /images/facebook.png'},
        {icons:'/images/insta.png' },
        {icons:'/images/twitter.png' },
        {icons:'/images/you.png ' },
        {icons:'/images/pinterest.png' }
    ]


    return (
        <div className="footer">
            <div className="flogo">
            <img src= "/images/logo1.svg" alt="" />
            </div>
            <div className="link">
               
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us Feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
                
            </div>
            <div className="social">
             {
                icon.map((x)=>( <img src={x.icons} alt="" />
                    ))
             }
            </div>
            <div className="cp">
                <p>
                    &copy; 12435464,bookmyshow.com, Inc.or its afflicates
                </p>
            </div>
        </div>
    );
}
export default Footer;


