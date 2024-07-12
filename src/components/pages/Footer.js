import React from 'react';  

import bunny from '../img/bunny.png';
import leaf from '../img/leaf.png';
import glute from '../img/glute.png';
import recylce from '../img/recylce.png';
import v1 from '../img/v1.png';
import v2 from '../img/v2.png';
import v4 from '../img/v4.png';
import v5 from '../img/v5.png';
import v6 from '../img/v6.png';
import v7 from '../img/v7.png';
import v8 from '../img/v8.png';


const Foot = () => {
    return (
   <> 

   {/* Footer Section Start desktop */}

   <div class="d-none d-lg-block">

   <div class="padding2">
  
   <div class="container-fluid background3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col d-flex justify-content-center"><img src={bunny} /> &nbsp;&nbsp;
        <b class="foot1"> No tests on animals</b>
      </div>
      <div class="col d-flex justify-content-center"><img src={leaf} /> &nbsp;&nbsp;
        <b class="foot1"> No animal-derived ingredients</b>
      </div>
      <div class="col d-flex justify-content-center"><img src={glute} /> &nbsp;&nbsp;
        <b class="foot1"> No gluten, or gluten byproducts</b>
      </div>
      <div class="col d-flex justify-content-center"><img src={recylce} /> &nbsp;&nbsp;
        <b class="foot1"> Recyclable packaging</b>
      </div>
    </div>
   </div>
   </div>



   <div class="background1">
  
   <div class="container text-center">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">


    <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">How can we Help?</div>
                <div class="col pad foot3">Skinluxe branches</div>
                <div class="col foot3">Contact Us</div>
                <div class="col foot3">FAQ</div>
                <div class="col foot3">Our Brand</div>
                <div class="col botm foot3">Blog</div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">Products</div>
                <div class="col pad foot3">Men Skincare</div>
                <div class="col foot3">Women Skincare</div>
                <div class="col botm foot3">Gifts & Sets</div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">keep in touch with Skinluxe</div>
                <div class="col pad foot3">Join the Skinluxe newsletter and be first to hear about news, offers and
                  skincare
                  advice</div>
                <div class="col pad">
                  <div class="input-group mb-3 ">
                    <input type="text " class="subt" placeholder="Email Address"
                      aria-label="Recipient's username" />&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light">Subscribe</button>
                  </div>
  
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label foot4" for="flexCheckDefault">
                    By submitting your email, you agree to receive advertising emails from Skinluxe. Please review our
                    Privacy Policy.
                  </label>
                </div>
              </div>
            </div>
          </div>



    </div>
    </div>
    </div>

    <div class="background4">
      <div class="container text-center">
        <div class="row">
    
          <div class="col foot6"><img src={v8} />
              2024 Skinluxe. All Rights Reserved. </div>
    
              <div class="col foot6 footmar">
                Terms & Conditions &nbsp;&nbsp; Privacy Policy
              </div>
    
          </div>
        </div>
      </div>
  


    
   </div>
   
{/* Footer Section end desktop */}

<div class="d-lg-none">

    <div class="padding2">
  
      <div class="container text-left background3">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col "><img src={bunny} /> &nbsp;&nbsp;
            <b class="foot1"> No tests on animals</b>
          </div>
          <div class="col"><img src={leaf} /> &nbsp;&nbsp;
            <b class="foot1"> No animal-derived ingredients</b>
          </div>
          <div class="col"><img src={glute} /> &nbsp;&nbsp;
            <b class="foot1"> No gluten, or gluten byproducts</b>
          </div>
          <div class="col"><img src={recylce} /> &nbsp;&nbsp;
            <b class="foot1"> Recyclable packaging</b>
          </div>
        </div>
      </div>
    </div>


    <div class="background1">
  
      <div class="container text-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

        <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">How can we Help?</div>
                <div class="col pad foot3">Skinluxe branches</div>
                <div class="col foot3">Contact Us</div>
                <div class="col foot3">FAQ</div>
                <div class="col foot3">Our Brand</div>
                <div class="col botm foot3">Blog</div>
              </div>
            </div>
          </div>



          <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">Products</div>
                <div class="col pad foot3">Men Skincare</div>
                <div class="col foot3">Women Skincare</div>
                <div class="col botm foot3">Gifts & Sets</div>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="container text-center">
              <div class="row row-cols-1">
                <div class="col foot2">keep in touch with Skinluxe</div>
                <div class="col pad foot3">Join the Skinluxe newsletter and be first to hear about news, offers and
                  skincare
                  advice</div>
                <div class="col pad">
                  <div class="input-group mb-3 ">
                    <input type="text " class="subt" placeholder="Email Address"
                      aria-label="Recipient's username" />&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light">Subscribe</button>
                  </div>
  
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label foot4" for="flexCheckDefault">
                    By submitting your email, you agree to receive advertising emails from Skinluxe. Please review our
                    Privacy Policy.
                  </label>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>  
    </div>


    <div class="background2">
     <div class="container text-left">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    
          <div class="col foot5"><img src={v1} /> &nbsp;&nbsp;
            123 Wellington Bassey Way </div>
          <div class="col foot5"> <img src={v2} />&nbsp;&nbsp; 234-904-500-4705</div>
        </div>
      </div>

      <div class="container text-left pad">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col"><img src={v4} /><span>
              <img src={v5}/>&nbsp;&nbsp;</span>
            <img src={v6} /> &nbsp;&nbsp;
            <img src={v7} />
          </div>
        </div>
      </div>
    </div>

    <div class="background4">
      <div class="container text-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    
          <div class="col foot6"><img src={v8} />
              2024 Skinluxe. All Rights Reserved. </div>
    
              <div class="col foot6 pad">
                Terms & Conditions &nbsp;&nbsp; Privacy Policy
              </div>
    
          </div>
        </div>
    </div>
   





</div>





{/* Footer section start mobile */}







   </>
 
    );
};
 
export default Foot;


