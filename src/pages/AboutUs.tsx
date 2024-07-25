import BigBlock from '../components/BigBlock';
import '../App.css'
import LoadingSpinner from '../components/LoadingSpinner';
import NavBar from '../components/NavBar';
import ResultText from '../components/ResultText';
import SubmitButton from '../components/SubmitButton';
import Canvas from '../components/Canvas';
import SingleFileUploader from   '../components/fileUpload';
import Footer from '../components/Footer';
import SameerCard from '../components/Profiles/SameerCard';
import AdwayCard from '../components/Profiles/AdwayCard';
import NeeleshCard from '../components/Profiles/NeeleshCard';
import MurtazaCard from '../components/Profiles/MurtazaCard';
// import Accordion from '../components/Accordion';
function AboutUs(){
    return (<div>
        <NavBar />

    
    <div className = "g-col-4 text-center fs-3 fw-medium" > <p>About us!</p></div>
    {/* <div className = "g-col-2 text-center fs-5 fw-medium-light"><p>A fast and convenient AI model to detect skin conditions.</p></div> */}
    <hr></hr>
    <div>
    <div className = "g-col-4 text-center fs-4 fw-medium" > <p>Our Team</p></div>
        <div className = "row">
        <div className="col-sm-3 mb-5 mb-sm-0" style = {{paddingLeft: "50px"}}>
            <NeeleshCard />
        </div>
        <div className="col-sm-3 mb-2 mb-sm-0">
            <AdwayCard />
        </div>
        <div className="col-sm-3 mb-2 mb-sm-0">
            <SameerCard />
        </div>
        <div className="col-sm-3">
            <MurtazaCard />
        </div>
        </div>

    </div>
    <br /><br />
    <hr />
    <div className = "g-col-4 text-center fs-4 fw-medium" > <p>Our Product</p></div>
    <div className="row justify-content-center">
  <div className="col-md-6 mb-3">
    <div className="card p-3">
      <h2>Inspiration</h2>
      <p className="text-wrap">
        AI and machine learning models have tremendously grown in usage due to their advancements in computing power. More and more, the open-source AI community continues to grow and these advanced models are reaching even the hands of hobbyists. Our inspiration for this project comes from the growth of this new technology; we want to create our own model that will detect and identify skin conditions and recommend treatments based off of that. This project also serves as a great learning experience of the both of us.
      </p>
      <h2>What it does</h2>
      <p>
        Our model takes a picture of skin and sends that to a machine learning model, which analyzes it for any skin conditions. We feed our model with a bunch of images from a database containing images of certain skin conditions. These labeled images help train the model on what to look for, and when it notices a pattern from what it has seen in training images on a brand new image, then it recognizes which skin condition it could be.
      </p>
      <h2>What's next for Dermalyze</h2>
      <p>
        We would like to continue developing our model by making the training and pre-processing steps more optimal. We intend to keep this app as accessible as possible because we found that many of the AIs out there are locked behind a paywall. By keeping our app free, we can increase awareness about existing solutions. To maintain our project's sustainability, we can look into using affiliate links, such as Amazon, to provide users with links to buy products instead of just stating them, allowing us to pocket some money to invest in keeping a server online.
      </p>
    </div>
  </div>
</div>
    
    <Footer />
    </div>)
}
export default AboutUs;