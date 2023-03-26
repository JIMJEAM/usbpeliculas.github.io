//web-component

class Menu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    
    <nav class="flex-container">
    <nav class="row">
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
            <img src="/imagenes/foxsportpremium.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
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
        <a href="http://pelisplaya.net/IPTV13.html " target="_blank">
            <img src="/imagenes/tudn.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV14.html " target="_blank">
            <img src="/imagenes/foxsport1.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV15.html " target="_blank">
            <img src="/imagenes/Sonychannel.png " class="img-thumbnail " alt="... " class="w-50 "></a> 
        <a href="http://pelisplaya.net/IPTV16.html " target="_blank">
            <img src="/imagenes/Paramount.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV17.html " target="_blank">
            <img src="/imagenes/Adrenalinasport.png " class="img-thumbnail " alt="... " class="w-50 "></a> 
        <a href="http://pelisplaya.net/IPTV18.html " target="_blank">
            <img src="/imagenes/Starchannel.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV19.html " target="_blank">
            <img src="/imagenes/Unicable.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV20.html " target="_blank">
            <img src="/imagenes/Distritocomedia.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV21.html " target="_blank">
            <img src="/imagenes/golden.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV22.html " target="_blank">
            <img src="/imagenes/goldenplus.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV23.html " target="_blank">
            <img src="/imagenes/goldenedge.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV24.html " target="_blank">
            <img src="/imagenes/cinecanal.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV25.html " target="_blank">
            <img src="/imagenes/Fx.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV26.html " target="_blank">
            <img src="/imagenes/Ae.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV27.html " target="_blank">
            <img src="/imagenes/Amc.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV28.html " target="_blank">
            <img src="/imagenes/Space.png " class="img-thumbnail " alt="... " class="w-50 "></a>
</nav>
</nav>
    `;
  }
}

customElements.define("menu-component", Menu);
