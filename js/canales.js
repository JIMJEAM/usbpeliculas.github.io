//web-component

class Menu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    
    <nav class="flex-container">
    <nav class="flex-container row">
    <nav class="flex-container col-lg-12 m-auto">
    
        <a href="http://pelisplaya.net/IPTV.html ">
            <img src="/imagenes/music-top.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV2.html ">
            <img src="/imagenes/cnn-es.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV3.html ">
            <img src="/imagenes/Aztecauno.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV4.html ">
            <img src="/imagenes/foxsport2.png " class="img-thumbnail " alt="... " class="w-50 ">
        <a href="http://pelisplaya.net/IPTV5.html ">
            <img src="/imagenes/bein-sport-extra.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV6.html " target="_blank">
            <img src="/imagenes/SportsNews.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV7.html " target="_blank">
            <img src="/imagenes/beIN-Sports-LaLiga.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV8.html " target="_blank">
            <img src="/imagenes/Tntsport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV9.html " target="_blank">
            <img src="/imagenes/clarosport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV10.html " target="_blank">
            <img src="/imagenes/Tennis-Channel.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV11.html " target="_blank">
            <img src="/imagenes/allsport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV12.html " target="_blank">
            <img src="/imagenes/nfl.png " class="img-thumbnail " alt="... " class="w-50 "></a>                            
    </nav>
</nav>
</nav>
    `;
  }
}

customElements.define("menu-component", Menu);
