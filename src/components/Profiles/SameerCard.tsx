import {RiFacebookFill, RiInstagramFill} from '@remixicon/react';
function SameerCard(){
    return <>
    <div className="card" style={{width: "18rem"}}>
  <img src="src\assets\ProfileImages\sameerpicture.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Sameer Agarwal</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=100083941898216" target="_blank"><RiFacebookFill /></a>
                  <a href="https://www.instagram.com/sam.eer.agarwal/" target="_blank"><RiInstagramFill /></a>  
                </div>
  </div>
</div></>
}
export default SameerCard;