var video = document.getElementById('video'); 
function videoUrl(url){ video.pause();
const source = video.querySelector("source"); 
source.setAttribute('src', url); 
video.load(); video.play(); }



//web-component

class Menu extends HTMLElement {
	constructor() {
	super();
	this.innerHTML = `

    
    <nav class="flex-container d-lg-flex">
    <nav class="flex-container d-lg-flex">

        <a href="series24-7.html ">
            <img src="https://phantom-marca.unidadeditorial.es/ff129bbe4e38ec6dd131e989f544d6bf/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/04/16148576621458.jpg" class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7retro.html ">
            <img src="https://m.media-amazon.com/images/I/B1d2i--qjtS._SL500_.png " class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7anime.html ">
            <img src="https://sites.google.com/site/animetvr1/_/rsrc/1510376631349/config/customLogo.gif?revision=9 " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7series2.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSt__saWKZI-WHtXjPchZ8joqqqscW-Lnk3wgzZv8DVs9vR2bUhqsvskXJg40ooBXtBw&usqp=CAU " class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7chistosos1.html ">
            <img src="https://i.ytimg.com/vi/YjD5Fy5FNf0/maxresdefault.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7chistosos2.html ">
            <img src="https://i.ytimg.com/vi/vqRC9xVxN5g/maxresdefault.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7amoreV.html ">
            <img src="https://images.vix.com/prd/videos/video:mcp:2764953/497e1bf9f560d85fe83bfd66b50231b2?tr=w-1200,h-627,f-jpeg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7aquiyahora.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMgDImwSXvoIT0hmKWJhMh6uec5qttFbAjrR4yhFf1g9h0F7TX3Zn0Qy_6Xv_ku_0tPI&usqp=CAU " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7cine1.html ">
            <img src="https://i0.wp.com/zoomf7.net/wp-content/uploads/2020/03/sala-de-cine.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7cine2.html ">
            <img src="https://www.lavoz.com.ar/resizer/GCZpJeNMLMBeqQKGN7gWLzG-2cU=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TKK7KZEVE5HYFBLCEN3O4AZXMA.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7Fpeluche.html ">
            <img src="https://images.vix.com/prd/videos/video:mcp:2938580/650c3f327a024e2301af1ed5e548e3b7?tr=w-1200,h-627,f-jpeg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7cine2.html ">
            <img src="https://images.vix.com/prd/videos/video:mcp:2961743/82d38de8b493aa4bc7689d9468300422?tr=w-1200,h-627,f-jpeg " class="img-thumbnail " alt="... " class="w-50 "></a>
            <nav/>
            <nav/>
            
`

 }
}
//video-control

var video = document.getElementById('video'); 
function videoUrl(url){ video.pause();
const source = video.querySelector("source"); 
source.setAttribute('src', url); 
video.load(); video.play(); }

customElements.define('menu-component', Menu);


