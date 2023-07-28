import React,{Component} from 'react';
import './4cr.css';
import v1 from './img/vdo1.mp4'
class Dkapp extends Component{
  render(){
  return(
    <div>
       
    <div className='im'>
        <div >
        <img className='im1' src='https://c4.wallpaperflare.com/wallpaper/987/979/583/run-beauty-run-wallpaper-preview.jpg'></img>
        {/* <h1 className='hd'>READY TO FLY?</h1> */}
        </div>
        <div >
        <img className='im2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpX-UnVYv9BF9y_5IH7FpuhCT845g_2vy5w&usqp=CAU'></img>
        </div>
     </div>
      
      <video className='vd' controls height={300} width={500}>
        <source src={v1}></source>
    </video>

     <div className='im'>
        <div >
        <img className='im3' src='https://10mosttoday.com/wp-content/uploads/2021/02/Appaloosa.jpg'></img>
        </div>
        <div >
        <img className='im4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaTqTi4AsNgXirrI0pEVgt1gsDxAg7u-ezg&usqp=CAU'></img>
        </div>
    </div>
    </div>

   
  


  );
}
}
export default Dkapp;