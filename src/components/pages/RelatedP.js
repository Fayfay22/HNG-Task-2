import React from 'react';  

import heart from '../img/heart.png';
import btext4 from '../img/btext4.png';
import btext5 from '../img/btext5.png';
import p5 from '../img/p5.png';
import p6 from '../img/p6.png';
import p7 from '../img/p7.png';
import p8 from '../img/p8.png';


const Relp = () => {
    return (
   <> 

 <div class="container text-left padding body-oil">Related to this product</div>


<div class="container text-center padding">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">

  <div class="col botm d-flex justify-content-center">
      <div class="card oil-card bcard">
        <div class="heart-icon"> <img src={heart} /></div>
        <img src={p7} class="card-img-top" alt="..."/>

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Paleted Skin Oil </li>
          <li class="list-group-item naira">N 67,000</li>
          <li class="list-group-item supply">Supplied by: Jenny’sGlow<br /><br />
            <img src={btext4} class="btext" /><br /><br />
            <div class="cart-icon"> <img src={btext5} /></div>
          </li>
        </ul>
      </div>
    </div>

    
    <div class="col botm d-flex justify-content-center">
      <div class="card oil-card bcard">
        
      <div class="heart-icon"> <img src={heart} /></div>
      <img src={p5} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Paleted Senused Oil</li>
        <li class="list-group-item naira">N 76,231</li>
          <li class="list-group-item supply">Supplied by: Jenny’sGlow<br /><br />
            <img src={btext4} class="btext"/><br /><br />
            <div class="cart-icon"> <img src={btext5} /></div>
          </li>
        </ul>

      </div>
    </div>



    <div class="col botm d-flex justify-content-center">
      <div class="card oil-card bcard">
        <div class="heart-icon"> <img src={heart} /></div>
        <img src={p6} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Oil Spray</li>
          <li class="list-group-item naira">N 72,000</li>
          <li class="list-group-item supply">Supplied by: Jenny’sGlow<br /><br />
            <img src={btext4} class="btext" /><br /><br />
            <div class="cart-icon"> <img src={btext5}/></div>
          </li>
        </ul>
      </div>
    </div>



    <div class="col botm d-flex justify-content-center">
       <div class="card oil-card bcard">
        <div class="heart-icon"> <img src={heart} /></div>
        <img src={p8} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Exonented Lectus Oil</li>
        <li class="list-group-item naira">N 46,000</li>
          <li class="list-group-item supply">Supplied by: Jenny’sGlow<br /><br />
            <img src={btext4} class="btext" /><br /><br />
            <div class="cart-icon"> <img src={btext5} /></div>
          </li>
        </ul>
      </div>
    </div>

   


  </div>
  </div>

   </>
 
    );
};
 
export default Relp;


