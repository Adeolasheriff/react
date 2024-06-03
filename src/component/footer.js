import { Twitter } from "./icons";
import { Facebook } from "./icons";
import { Instagram } from "./icons";
import { Pin } from "./icons";

function Footer () {

  return (
    <div style={{backgroundColor:'black'}}>
 <div style={{marginLeft:'70px'}}>
  <Twitter/>
  <Facebook/>
  <Instagram/>
  <Pin/>

  </div>
 </div>
 
    
    )
    
  }
  export default Footer;
  
  /* <Bell/> */









// const [tweet,setTweet] = useState( [
//   {title: 'this is my first website',body:'and its color red',p: 'continue'},
//   {title:'this is my second website',body:'and its color blue',p:'stop'},
//   {title:'now a professional',body:'color pink',p:'lorem'}
// ])


// return (
//   <div key={tweet.id}>
//     {tweet.map((tweet)=>(
//       <div>
//         <p>{tweet.title}</p>
//         <p>{tweet.body}</p>
//         <h3>{tweet.p}</h3>
//          </div>
//     ))}
//   </div>
// )
