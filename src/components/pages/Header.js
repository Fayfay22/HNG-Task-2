import React from 'react';  
import logo from '../img/logo.png';
import search from '../img/search.png';
import carty from '../img/carty.png';
import ngn from '../img/ngn.png';
import line from '../img/line.png';
import ham from '../img/ham.png';
import bar from '../img/bar.png';

const Nav = () => {
    return (       
   <>
{/* Header desktop Start */}
  <div class="d-none d-lg-block">
  <nav class="navbar">

      <div class="container">
          <a class="navbar-brand" href="/"><img src={logo} alt="Logo" /></a>
          <div class="navbar-menu-left"></div>

          <div class="navbar-menu-center">
              <ul class="navbar-menu">
                  <li class="nav-item"><a class="nav-link" href="#">Body Oil</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Natural</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Moisturizer</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Face Oil</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Night Cream</a></li>
                  </ul>
          </div>

          <div class="navbar-menu-right">
              <ul class="navbar-menu">
                  <li class="nav-item"><a class="nav-link" href="#"><img src={search}
                              class="navimglog" />
                          <img src={line} class="navimglog" /></a></li>

                  <li class="nav-item"><a class="nav-link" href="cart"><img src={carty}
                              class="navimglog" /></a></li>
                  <li class="nav-item"><a class="nav-link" href="#"><img src={ngn} /></a></li>
              </ul>
          </div>
      </div>
  </nav>
 </div>
{/* Header desktop End */}


{/* Header mobile Start */}

  <div class="d-lg-none">

      <div class="offcanvas offcanvas-start offcn" tabindex="-1"
          id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
              <button type="button " class="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
          </div>
      
          <div class="offcanvas-body padding2">
              <div class="nav-item"><a class="nav-link" href="/">Home</a></div>
              <div class="nav-item"><a class="nav-link" href="#">Body Oil</a></div>
              <div class="nav-item"><a class="nav-link" href="#">Natural</a></div>
              <div class="nav-item"><a class="nav-link" href="#">Moisturizer</a></div>
              <div class="nav-item"><a class="nav-link" href="#">Face Oil</a></div>
              <div class="nav-item"><a class="nav-link" href="#">Night Cream</a></div>
          </div>
      </div>
      
      <div class="container-fluid text-left">
          <div class="row row-cols-4 row-cols-sm-3 row-cols-md-3">

              <div class="col">
                  <div class="container-fluid text-left">
                      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                          <div class="col">
                              <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                  aria-controls="offcanvasExample">
                                  <img src={ham} class="nav2" />
                              </a>
                          </div>
      
                      </div>
                  </div>
              </div>

              <div class="col">
                  <div class="container-fluid text-left">
                      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                          <div class="col">
                              <a class="/" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                  aria-controls="offcanvasExample">
                                  <img src={logo} class="nav3" />
                              </a>
                          </div>
      
                      </div>
                  </div>
              </div>


              <div class="col">
                  <div class="container-fluid text-left">
                      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                          <div class="col">
                              <a href="cart">
                                  <img src={carty} class="nav4" />
                              </a>
                          </div>
      
                      </div>
                  </div>
              </div>

              <div class="col">
                  <div class="container-fluid text-left">
                      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                          <div class="col">
                               <img src={ngn}class="nav5" />
                          </div>
      
                      </div>
                  </div>
              </div>

          </div>
      </div>

      <div class="container text-center botm pad"><img src={bar} class="nav6" /> </div>
</div>

{/* Header mobile End */}

   </>
 
    );
};
 
export default Nav;


