// import Image from '../image/1.png';
function Header ( ) {
    return (
        <div className="head container">
        <img src = "image/1.png" className="im" alt="logo"/>
         <div className="la">
         <h1 className="law"> Laura Smith</h1>
         <h3 className="dev" >Frontend developer</h3>
         </div>
         <p className="law-p">laurasmith.website</p>

           <button className="first" style={{color:"blue"}} >Email</button>
           <button className="firs">Linkedin</button>
           {/* <img src={Image} alt="" /> */}
        </div>
    )
}
export default Header;


