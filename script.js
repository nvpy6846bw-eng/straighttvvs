/*==================================
STRAIGHTTVVS
STYLE.CSS
PART 2
==================================*/

/*=========================
GALLERY
=========================*/

#gallery{

background:#050505;

}

.gallery{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:25px;

}

.item{

position:relative;

overflow:hidden;

border-radius:20px;

background:#151515;

border:1px solid rgba(255,255,255,.08);

cursor:pointer;

transition:.4s;

}

.item img{

width:100%;

height:100px;

object-fit:cover;

display:block;

transition:.5s;

}

.item::before{

content:"";

position:absolute;

top:-150%;

left:-150%;

width:300%;

height:300%;

background:linear-gradient(

120deg,

transparent,

rgba(255,255,255,.25),

transparent

);

transform:rotate(25deg);

transition:.8s;

}

.item:hover::before{

top:100%;

left:100%;

}

.item:hover img{

transform:scale(1.08);

}

.item:hover{

border-color:white;

box-shadow:0 0 30px rgba(255,255,255,.20);

}

/*=========================
WHY CHOOSE US
=========================*/

.why{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(240px,1fr));

gap:30px;

}

.why div{

background:rgba(255,255,255,.04);

backdrop-filter:blur(12px);

padding:40px;

border-radius:22px;

text-align:center;

border:1px solid rgba(255,255,255,.08);

transition:.35s;

}

.why div:hover{

transform:translateY(-10px);

box-shadow:0 0 35px rgba(255,255,255,.18);

}

.why i{

font-size:45px;

margin-bottom:20px;

color:white;

}

.why h3{

margin-bottom:15px;

font-size:28px;

}

.why p{

color:#c5c5c5;

line-height:1.7;

}

/*=========================
CONTACT
=========================*/

#contact{

text-align:center;

background:linear-gradient(

180deg,

#090909,

#050505

);

}

#contact h2{

font-family:'Cinzel',serif;

font-size:60px;

margin-bottom:20px;

}

#contact p{

font-size:20px;

color:#cfcfcf;

margin-bottom:40px;

}

.buttons{

display:flex;

justify-content:center;

align-items:center;

gap:20px;

flex-wrap:wrap;

}

.buttons a{

padding:16px 35px;

border-radius:50px;

text-decoration:none;

font-weight:600;

background:white;

color:black;

transition:.35s;

}

.buttons a:hover{

transform:translateY(-5px);

box-shadow:0 0 30px rgba(255,255,255,.35);

}

.buttons i{

margin-right:8px;

}

/*=========================
FOOTER
=========================*/

footer{

padding:70px 20px;

text-align:center;

background:#030303;

border-top:1px solid rgba(255,255,255,.08);

}

footer h2{

font-family:'Cinzel',serif;

font-size:42px;

margin-bottom:10px;

}

footer span{

color:var(--silver);

}

footer p{

color:#9e9e9e;

margin-top:10px;

}

/*=========================
SCROLL REVEAL
=========================*/

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/*=========================
FLOATING DIAMOND GLOW
=========================*/

.hero::before{

content:"";

position:absolute;

width:260px;

height:260px;

background:white;

border-radius:50%;

filter:blur(140px);

opacity:.08;

top:10%;

left:8%;

animation:float1 8s ease-in-out infinite;

}

.hero::after{

content:"";

position:absolute;

width:320px;

height:320px;

background:#d8d8d8;

border-radius:50%;

filter:blur(150px);

opacity:.06;

bottom:8%;

right:10%;

animation:float2 10s ease-in-out infinite;

}

@keyframes float1{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-35px);

}

100%{

transform:translateY(0);

}

}

@keyframes float2{

0%{

transform:translateX(0);

}

50%{

transform:translateX(30px);

}

100%{

transform:translateX(0);

}

}

/*=========================
BUTTON PULSE
=========================*/

.pulse{

animation:pulse 1.2s ease;

}

@keyframes pulse{

0%{

transform:scale(1);

}

50%{

transform:scale(1.05);

box-shadow:0 0 35px rgba(255,255,255,.45);

}

100%{

transform:scale(1);

}

}

/*=========================
RESPONSIVE
=========================*/

@media(max-width:992px){

.hero h1{

font-size:78px;

}

.aboutGrid{

grid-template-columns:1fr;

}

.features{

flex-direction:column;

}

}

@media(max-width:768px){

nav{

padding:18px 5%;

flex-wrap:wrap;

}

nav ul{

display:none;

}

.hero h1{

font-size:58px;

}

.hero p{

font-size:18px;

}

.heroButtons{

flex-direction:column;

align-items:center;

}

.primary,

.secondary{

width:230px;

text-align:center;

}

.gallery{

grid-template-columns:1fr;

}

.priceCards{

grid-template-columns:1fr;

}

.why{

grid-template-columns:1fr;

}

.buttons{

flex-direction:column;

}

#contact h2{

font-size:42px;

}

section{

padding:80px 8%;

}

}

@media(max-width:480px){

.logo{

font-size:28px;

}

.hero h1{

font-size:48px;

}

.title h2{

font-size:36px;

}

.card h1{

font-size:55px;

}

.item img{

height:260px;

}

}
