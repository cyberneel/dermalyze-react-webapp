function NavBar(){
    return (<><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
    <img src="src\assets\dermalyzelogo.png" width="30" height="30" className="d-inline-block align-top " alt="" />
        Dermalyze
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Blogs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown" href="/AboutUs" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="true" >
            About Us
          </a>
          {/* <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="#">Our team</a></li>
            <li><a className="dropdown-item" href="#">Who are we</a></li>
           
            <li><a className="dropdown-item" href="#">Our Mission</a></li>
          </ul> */}
        </li>
      </ul>
    </div>
  </nav></>);
}
export default NavBar;