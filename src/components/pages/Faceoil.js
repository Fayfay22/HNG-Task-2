import React from 'react';  

import heart from '../img/heart.png';
import btext4 from '../img/btext4.png';
import btext5 from '../img/btext5.png';
import f1 from '../img/f1.png';
import f2 from '../img/f2.png';
import f3 from '../img/f3.png';
import f4 from '../img/f4.png';
import f5 from '../img/f5.png';
import f6 from '../img/f6.png';
import f7 from '../img/f7.png';
import f8 from '../img/f8.png';


const Face = () => {
    return (
   <> 

 <div class="container text-left padding body-oil">Face Oil</div>


<div class="container text-center padding">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">

  <div class="col botm d-flex justify-content-center">
      <div class="card oil-card bcard">
        <div class="heart-icon"> <img src={heart} /></div>
        <img src={f1} class="card-img-top" alt="..."/>

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Waxed flowoil</li>
        <li class="list-group-item naira">N 56,900</li>
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
      <img src={f2} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Orange pecemed Oil</li>
          <li class="list-group-item naira">N 789,500</li>
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
        <img src={f3} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Skinluxe Glow Oil Syrup</li>
             <li class="list-group-item naira">N 85,700</li>
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
        <img src={f4} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Skinluxe Glow Oil Syrup XG</li>
        <li class="list-group-item naira">N 87,640</li>
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
        <img src={f5} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Skin Servouir</li>
             <li class="list-group-item naira">N 56,780</li>
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
        <img src={f6} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Resi Antidoted Syriu</li>
             <li class="list-group-item naira">N 765,830</li>
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
        <img src={f7} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Sertious Oil and Brush</li>
        <li class="list-group-item naira">N 32,000</li>
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
        <img src={f8} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
        <li class="list-group-item skin">Orange Syrup </li>
             <li class="list-group-item naira">N 45,700</li>
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
 
export default Face;


