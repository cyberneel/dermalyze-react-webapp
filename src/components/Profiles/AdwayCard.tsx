import {RiFacebookFill, RiInstagramFill} from '@remixicon/react';
function AdwayCard(){
    return <> <div className="card" style={{width: "18rem"}}>
    <img src="src\assets\ProfileImages\adway-close.png" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Adway Kulkarni</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      <div className="social">
                  <a href="" target="_blank"><RiFacebookFill /></a>
                  <a href="" target="_blank"><RiInstagramFill /></a>  
                </div>
    </div>
  </div></>
  
}
export default AdwayCard;