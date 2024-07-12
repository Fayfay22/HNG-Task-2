import React from 'react';  

import radio from '../img/radio.png';


const Checkb = () => {
    return (
   <> 

<div class="container text-center padding">

<nav aria-label="breadcrumb">
   <ol class="breadcrumb">
       <li class="breadcrumb-item"><a href="/">Home</a></li>
       <li class="breadcrumb-item"><a href="cart">Cart</a></li>
       <li class="breadcrumb-item active" aria-current="page">Checkout</li>
   </ol>
 </nav>
</div>

<div class="container text-left padding">
<div class="col check-text botm">Checkout</div>
<div class="col check1">Select your preferred payment method</div>
</div>
  
 
     {/* Cart Section Start */}

    

     <div class="container text-left padding">
     <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">

     <div class="col">
            <div class="container text-left">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">

                    <div class="col">
                        <form>
                            <div class="radio-group">
                                <input type="radio" id="option1" name="customRadio" value="option1" />
                                <label for="option1">
                                    <img src={radio} alt="Option 1" /> 
                                </label>
                                <label class="check2">
                                   Card
                                </label><br/><br/>
                                <label class="check3">
                                    Pay via your credit or debit card
                                </label><br/><br/>
                                <label class="check4">
                                    Recommended
                                 </label>
                            </div>
                        </form>
                    </div>
                  
                    <div class="col pad">
                        <form>
                            <div class="radio-group">
                                <input type="radio" id="option1" name="customRadio" value="option1" />
                                <label for="option1">
                                    <img src={radio} alt="Option 1" />
                                </label>
                                <label class="check2">
                                    Bank transfer
                                </label><br/><br/>
                                <label class="check3">
                                    Transfer to the companies bank account. You will be <br/>
                                    required to confirm transaction.ay via your credit or debit card
                                </label><br/><br/>
                                
                            </div>
                        </form>
                    </div>
                  
                    <div class="col pad">
                        <form>
                            <div class="radio-group">
                                <input type="radio" id="option1" name="customRadio" value="option1" />
                                <label for="option1">
                                    <img src={radio} alt="Option 1" />
                                </label>
                                <label class="check2">
                                    Payment on delivery
                                </label><br/><br/>
                                <label class="check3">
                                    Pay our distributors with cash <br/>
                                    once they deliver to you.nies bank account. 
                                </label><br/><br/>
                                
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


        <div class="col d-none d-lg-block">
            <div class="container text-left order-box">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                    <div class="col check-text ">Order Summary </div>
                    <div class="col order1 pad">Sub Total (4 Items) <span class="amnt1">N 211,440</span></div>
                    <div class="col order1 pad">Shipping Fee<span class="amnt2">N 11,300</span></div>
                    <div class="col order2 pad">Total after discount <span class="amnt3">N 222,740</span></div>   
                    <div class="col order2 pad"><button class="custom-button">Pay Now</button></div>   
                </div>
            </div>
        </div>

        <div class="col d-lg-none">
            <div class="container text-left">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                    <div class="col check-text padding">Order Summary </div>
                    <div class="col order1 pad">Sub Total (4 Items) <span class="amnt1">N 211,440</span></div>
                    <div class="col order1 pad">Shipping Fee<span class="amnt2">N 11,300</span></div>
                    <div class="col order2 pad d-lg-none">Total after discount <span class="amnt3m">N 222,740</span></div>
                    <div class="col order2 pad"><button class="custom-button2">Pay Now</button></div> 
                </div>
            </div>
        </div>


     </div>
     </div>


     {/* Cart Section end */}




   </>







    );
};
 
export default Checkb;


