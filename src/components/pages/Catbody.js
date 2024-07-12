import React from 'react';  

import check from '../img/check.png';
import add from '../img/add.png';
import cart1 from '../img/cart1.png';
import cart2 from '../img/cart2.png';
import cart3 from '../img/cart3.png';

const Catb = () => {
    return (
   <> 

   <div class="container text-center padding botm">
    
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Cart</li>
            <li class="breadcrumb-item"><a href="checkout">Checkout</a></li>
        </ol>
    </nav>
  </div>
 
  
 
     {/* Cart Section Start desktop */}

     <div class="d-none d-lg-block">

     <div class="container text-left padding">
            <div class="col check-text botm select">
                <img src={check} /> <span class="select">select all four items</span>
            </div>
      </div>

      <div class="container text-left padding">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">


      <div class="col  d-flex justify-content-center">
      <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col"><img src={check} class="cartmargin" /></div>
                        </div>
                    </div>           
         </div>

         <div class="col d-flex justify-content-center">
                    <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col cartmarleft"><img src={cart1} /></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="container text-left cartmarleft2" >
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col cart-text1">Skinluxe Glow Cream XG </div>
                            <div class="col cart-text2">Body Oil</div>
                            <div class="col cart-text3 pad">N 52, 860</div>
                            <div class="col cart-text4">6 Units Left</div>
                            <div class="col pad"><img src={add} /></div>
                        </div>
                    </div>
                </div>

                <div class="col cartmarleft2">
                    <div class="container text-left">
                        <div class="row row-cols-1 r ow-cols-sm-1 row-cols-md-1">
                            <div class="col check-text ">Order Summary </div>
                            <div class="col order1 pad">Sub Total (4 Items) <span class="amnt1c">N 211,440</span></div>
                            <div class="col order1 pad">Shipping Fee<span class="amnt2c">N 11,300</span></div>
                            <div class="col order2 pad">Total after discount <span class="amnt3c">N 222,740</span></div>
                        </div>
                        <div class="col order2 pad"><a href="checkout"><button class="custom-button">Proceed To Checkout</button></a></div>
                    </div>
                </div>
          </div>
      </div>

      <div class="container text-left padding">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">


      <div class="col  d-flex justify-content-center">
      <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col"><img src={check} class="cartmargin" /></div>
                        </div>
                    </div>           
         </div>

         <div class="col d-flex justify-content-center">
                    <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col cartmarleft"><img src={cart2} /></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="container text-left cartmarleft2" >
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                        <div class="col cart-text5">Skin Este Glow </div>
                        <div class="col cart-text2">Moisturizer</div>
                        <div class="col cart-text3 pad">N 86, 780</div>
                            <div class="col cart-text4">6 Units Left</div>
                            <div class="col pad"><img src={add} /></div>
                        </div>
                    </div>
                </div>   
          </div>
      </div>

      <div class="container text-left padding">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">


      <div class="col  d-flex justify-content-center">
      <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col"><img src={check} class="cartmargin" /></div>
                        </div>
                    </div>           
         </div>

         <div class="col d-flex justify-content-center">
                    <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col cartmarleft"><img src={cart3} /></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="container text-left cartmarleft2" >
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                        <div class="col cart-text1">Safera Mentius Oil </div>
                        <div class="col cart-text2">Body Oil</div>
                        <div class="col cart-text3 pad">N 88, 000</div>
                            <div class="col cart-text4">6 Units Left</div>
                            <div class="col pad"><img src={add} /></div>
                        </div>
                    </div>
                </div>   
          </div>
      </div>



      <div class="container text-left padding">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">


      <div class="col  d-flex justify-content-center">
      <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col"><img src={check} class="cartmargin" /></div>
                        </div>
                    </div>           
         </div>

         <div class="col d-flex justify-content-center">
                    <div class="container text-left">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                            <div class="col cartmarleft"><img src={cart1} /></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="container text-left cartmarleft2" >
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1">
                        <div class="col cart-text5">Skinluxe Glow Cream XG Improved Sygen Syrup </div>
                        <div class="col cart-text2">Face Oil</div>
                        <div class="col cart-text3 pad">N 52, 860</div>
                            <div class="col cart-text4">6 Units Left</div>
                            <div class="col pad"><img src={add} /></div>
                        </div>
                    </div>
                </div>   
          </div>
      </div>

     </div>

     {/* Cart Section end desktop */}


  {/* Cart Section Start mobile */}

  <div class="d-lg-none">

  <div class="container text-left">
        <div class="col cart-text2 botm select">
            Cart Summary <b class="select"> cart (4)</b>
        </div>
    </div>

    <div class="container text-center cart-box">
        <div class="row row-cols-2">
            <div class="col"><img src={cart1} class="cartmobwid" /></div>
    
    
            <div class="col">
                <div class="container text-center">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                        <div class="col cart-text1m">Skinluxe Glow Cream XG </div>
                        <div class="col cart-text2m">Body Oil</div>
                        <div class="col cart-text3m pad">N 52, 860</div>
                        <div class="col cart-text4m">6 Units Left</div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>


    <div class="container text-center cart-box">
        <div class="row row-cols-2">
            <div class="col"><img src={cart2} class="cartmobwid" /></div>
    
    
            <div class="col">
                <div class="container text-center">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                        <div class="col cart-text1m">Skinluxe Glow Cream XG </div>
                        <div class="col cart-text2m">Body Oil</div>
                        <div class="col cart-text3m pad">N 52, 860</div>
                        <div class="col cart-text4m">6 Units Left</div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>


    <div class="container text-center cart-box">
        <div class="row row-cols-2">
            <div class="col"><img src={cart3} class="cartmobwid" /></div>
    
    
            <div class="col">
                <div class="container text-center">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                        <div class="col cart-text1m">Skinluxe Glow Cream XG </div>
                        <div class="col cart-text2m">Body Oil</div>
                        <div class="col cart-text3m pad">N 52, 860</div>
                        <div class="col cart-text4m">6 Units Left</div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>

    <div class="container text-center cart-box">
        <div class="row row-cols-2">
            <div class="col"><img src={cart1} class="cartmobwid" /></div>
    
    
            <div class="col">
                <div class="container text-center">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                        <div class="col cart-text1m">Skinluxe Glow Cream XG </div>
                        <div class="col cart-text2m">Body Oil</div>
                        <div class="col cart-text3m pad">N 52, 860</div>
                        <div class="col cart-text4m">6 Units Left</div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>

    <div class="col padding">
                    <div class="container text-left">
                        <div class="row row-cols-1 r ow-cols-sm-1 row-cols-md-1">
                            <div class="col check-text ">Order Summary </div>
                            <div class="col order1 pad">Sub Total (4 Items) <span class="">N 211,440</span></div>
                            <div class="col order1 pad">Shipping Fee<span class="">N 11,300</span></div>
                            <div class="col order2 pad">Total after discount <span class="">N 222,740</span></div>
                        </div>
                        <div class="col order2 pad"><a href="checkout"><button class="custom-button2">Proceed To Checkout</button></a></div>
                    </div>
                </div>


  </div>

  {/* Cart Section End mobile */}


   </>







    );
};
 
export default Catb;


