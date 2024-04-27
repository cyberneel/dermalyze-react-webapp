import BigBlock from '../components/BigBlock';
import '../App.css'
import LoadingSpinner from '../components/LoadingSpinner';
import NavBar from '../components/NavBar';
import ResultText from '../components/ResultText';
import SubmitButton from '../components/SubmitButton';
import Canvas from '../components/Canvas';
import SingleFileUploader from   '../components/fileUpload';
import Footer from '../components/Footer';
function Homepage(){
    return (<div>
        <NavBar />
    {/* <ListGroup /> */}
    <BigBlock />
    {/* <ProgressBar /> */}
    <><div className = "g-col-4 text-center fs-3 fw-medium" > <p>Upload an image below to get your results!</p></div></>
    <Canvas />

    <SingleFileUploader />
    <SubmitButton />
    <ResultText />
    <LoadingSpinner/>
    <Footer />
    </div>)
}
export default Homepage;