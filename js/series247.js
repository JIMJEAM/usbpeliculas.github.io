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

    
    <nav class="flex-container">
    <nav class="flex-container row">
    <nav class="flex-container col-lg-12 m-auto">
    

        <a href="series24-7.html ">
            <img src="../imagenes/twitch247.png" class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7retro.html ">
            <img src="https://m.media-amazon.com/images/I/B1d2i--qjtS._SL500_.png " class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7anime.html ">
            <img src="https://www.apkvisit.com/wp-content/uploads/2022/10/anime-tv-anime-watching-app.png " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7series2.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSt__saWKZI-WHtXjPchZ8joqqqscW-Lnk3wgzZv8DVs9vR2bUhqsvskXJg40ooBXtBw&usqp=CAU " class="img-thumbnail " alt="... " class="w-50 "></a>
           
            <a href="series24-7chistosos1.html ">
            <img src="https://i.ytimg.com/vi/YjD5Fy5FNf0/maxresdefault.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7chistosos2.html ">
            <img src="https://i.ytimg.com/vi/vqRC9xVxN5g/maxresdefault.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7seriesretro.html ">
            <img src="https://seriesretro.com/wp-content/uploads/2020/06/5ed8d22a4ac42_originalcursi1.png " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7retrotoons.html ">
            <img src="https://yt3.googleusercontent.com/ytc/AOPolaRr0hJkdPUOXJ1r5v7vrcj1mS4M9Ru0RxEXUnnjBQ=s900-c-k-c0x00ffffff-no-rj " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7cine1.html ">
            <img src="https://i0.wp.com/zoomf7.net/wp-content/uploads/2020/03/sala-de-cine.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7cine2.html ">
            <img src="https://www.lavoz.com.ar/resizer/GCZpJeNMLMBeqQKGN7gWLzG-2cU=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TKK7KZEVE5HYFBLCEN3O4AZXMA.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7tvseries.html ">
            <img src="https://cdn-icons-png.flaticon.com/512/6209/6209965.png " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7Videoclub.html ">
            <img src="https://www.billetweb.fr/files/page/thumb/video-club.jpg?v=1673042814 " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            
            <a href="series24-7comodice.html ">
            <img src="https://images.vix.com/prd/videos/video:mcp:2894482/2d34a437be9a0ad3ea691cccad6a7be5 " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7cartoonnetwork.html ">
            <img src="https://i.ytimg.com/vi/0BkSC197-ss/maxresdefault.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series27telemax.html ">
            <img src="https://3.bp.blogspot.com/-Rj3GihMSCD4/VmDSmjQYmTI/AAAAAAAAANA/ARhShYiOjvI/s1600/gallery_1164_2_21487.png " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7delmercadoP.html ">
            <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0138580a821f86d1e91c4c07593cb66cc4151f007963910cef4c5bad5068feb0._V_SX268_.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7lospitufos.html ">
            <img src="https://i.ytimg.com/vi/5-irFyYPGIQ/maxresdefault.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-780s.html ">
            <img src="https://d14c63magvk61v.cloudfront.net/hls/22865/stringray-remember-the-80s/poster_20200717_232723.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7alternative.html ">
            <img src="https://d14c63magvk61v.cloudfront.net/hls/22865/stingray-rock-alternative/poster_20200717_232723.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7neotv.html ">
            <img src="https://neotvdigital.com.ar/imagenes/fb.png " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7rockon.html ">
            <img src="https://i.etsystatic.com/24478728/r/il/d0df00/3129267801/il_fullxfull.3129267801_l9um.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7vevo90s.html ">
            <img src="https://f9q4g5j6.ssl.hwcdn.net/640a5eaf0606eb634d038662/200?webp=1 " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7neoxtv.html ">
            <img src="https://ml83w0xirk9x.i.optimole.com/cb:PcBh~22e5d/w:auto/h:auto/q:mauto/ig:avif/f:best/https://sonicaargentina.com.ar/portada.webp " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7latinatv.html ">
            <img src="https://pbs.twimg.com/profile_images/1720997460418428928/FZCgbK0S_400x400.jpg " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7toplatino.html ">
            <img src="https://toplatino.net/wp-content/uploads/2019/04/cropped-LogoTL-300-new-9.png " 
            class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7theretroch.html ">
            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/223693973_222094553250827_8970225291809685823_n.jpg?stp=cp0_dst-jpg_e15_p240x240_q65&_nc_cat=110&ccb=1-7&_nc_sid=fa004d&efg=eyJpIjoiYiJ9&_nc_eui2=AeEr3nzIhm8u2QpyOgfogxReM-rCqyDTgAUz6sKrINOABbfA8DQF2_VXYHZDNdGsQWlvEg7cw2MmC1CZgduSS728&_nc_ohc=GaXdz9_h2hAAX_-iaxB&_nc_ht=scontent-dfw5-1.xx&oh=00_AfA5AlMnL_rmjIClXC6pHHy_uaFDGWl4Tvh1KSI0rFU4ug&oe=65C2BE18 " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-lapromesa.html ">
            <img src="https://images.vix.com/prd/videos/video:mcp:3993404/841f639eb43c7db5c7aaaa2d4e7fc286 " 
            class="img-thumbnail " alt="... " class="w-50 "></a>
            
            <a href="series24-7babyshark.html ">
            <img src="https://www.hoyesarte.com/constelac10n/files/2020/01/006.png " 
            class="img-thumbnail " alt="... " class="w-50 "></a>

            <a href="series24-7weatherchannel.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fpJUp6RJeGPaRErrdMEhO5Bdk0hyQ_axHYpDOu6vUb64iO8Ra3EuEQrRf9szwYNK0kw&usqp=CAU" 
            class="img-thumbnail " alt="... " class="w-50 "></a>

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


