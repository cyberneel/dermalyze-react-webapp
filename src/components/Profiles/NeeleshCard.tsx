import {RiFacebookFill, RiInstagramFill} from '@remixicon/react';
function NeeleshCard(){
    return <> <div className="card" style={{width: "18rem"}}>
    <img src="src\assets\ProfileImages\neelesh-1400x1866.png" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Neelesh Chevuri</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      <div className="social">
                  <a href="" target="_blank"><RiFacebookFill /></a>
                  <a href="" target="_blank"><RiInstagramFill /></a>  
                </div>
    </div>
  </div></>
  }
export default NeeleshCard;