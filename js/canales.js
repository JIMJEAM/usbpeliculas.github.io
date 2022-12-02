//web-component

class Menu extends HTMLElement {
	constructor() {
	super();
	this.innerHTML = `
    
    <nav class="flex-container d-lg-flex">
    <nav class="flex-container d-lg-flex ">
        <a href="http://peliculasplaya.netlify.app/IPTV.html ">
            <img src="/imagenes/music-top.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV2.html ">
            <img src="/imagenes/cnn-es.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV3.html ">
            <img src="/imagenes/Mliga.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV4.html ">
            <img src="/imagenes/foxsport2.png " class="img-thumbnail " alt="... " class="w-50 ">
        <a href="http://peliculasplaya.netlify.app/IPTV5.html ">
            <img src="/imagenes/bein-sport-extra.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV6.html " target="_blank">
            <img src="/imagenes/Espn2.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV7.html " target="_blank">
            <img src="/imagenes/beIN-Sports-LaLiga.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV8.html " target="_blank">
            <img src="/imagenes/Tntsport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV9.html " target="_blank">
            <img src="/imagenes/clarosport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV10.html " target="_blank">
            <img src="/imagenes/Sky-bundes-liga.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV11.html " target="_blank">
            <img src="/imagenes/sky-sports-premier-league.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://peliculasplaya.netlify.app/IPTV12.html " target="_blank">
            <img src="/imagenes/nfl.png " class="img-thumbnail " alt="... " class="w-50 "></a>                            
    </nav>
</nav>
    `

 }
}

customElements.define('menu-component', Menu);
