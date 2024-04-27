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
function AboutUs(){
    return (<div>
        <NavBar />

    
    <div className = "g-col-4 text-center fs-3 fw-medium" > <p>About us!</p></div>
    <div className = "g-col-2 text-center fs-5 fw-medium-light"><p>A fast and convenient AI model to detect skin conditions.</p></div>
    <hr></hr>
    <div>
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
    <Footer />
    </div>)
}
export default AboutUs;