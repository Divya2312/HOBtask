import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div style={{marginLeft:"1px"}}>
   <header className=" homepage-header bg-primary">
  <div className="container-fluid">
    <a className="header-link" aria-current="page" href="#" > Make beautiful designs faster. Try Pro for free for 7 days. Then $9/mo → </a> 
  </div>
</header>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Icons</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Illustrations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">3D Illustrations</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Top selling</a></li>
            <li><a className="dropdown-item" href="#">Most Followers</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pricing
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <ul class="navbar-nav text-lg-right">
        <li class="nav-item">
            <a href="/user/login" class="nav-link">Sign in</a>
        </li>
        <li class="nav-item">
            <a href="/user/signup" class="nav-link">Sign up</a>
        </li>
      </ul>
      </ul>
      </div>
      </div>
    </nav>
    <div className='img1'>
    <img src="https://www.iconfinder.com/static/img/logo/black.svg?7cfe2038c8" class="img-thumbnail" alt="icon"  height="600" ></img>
    </div> 

  {/* <input label="Search 6M icons, 3D and illustrations..." type={text}/> */}

  <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" placeholder='Search 6M icons, 3D and illustrations...' />
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>

<div className='social-links'>
  <p>Popular Searches: <a href='#'>Instagram</a>, <a href='#'>Facebook</a>, <a href='#'>Arrow</a>, <a href='#'>Phone</a>, <a href='#'>Youtube</a>, <a href='#'>Search</a>, <a href='#'>User</a> </p>
</div>
<div className='third-component'>
  <h6 style={{paddingTop:"2rem"}}>HELPING DESIGNERS MAKE A LIVING DOING WHAT THEY LOVE</h6>
  <h1 style={{fontWeight:"1000", fontSize:"5rem"}}>Become A Contributor</h1>
  <h3 sty>At Iconfinder, we want to put more good design out into the world, one icon or illustration at a time. Join us.</h3>
  <div className='multiple-btns'>
  <a className='uploading-button' href='#'>Start uploading content</a>
  <a className='read-more-link' href='#'>Read more </a>
</div>



  
</div>

</div>

 
  );
}

export default App;
