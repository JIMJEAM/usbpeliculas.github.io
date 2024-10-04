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
            <img src="/imagenes/RT.png " class="img-thumbnail " alt="... " class="w-50 ">
        <a href="http://pelisplaya.net/IPTV5.html ">
            <img src="/imagenes/foxsportpremium.jpg " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV6.html " target="_blank">
            <img src="/imagenes/SportsNews.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV7.html " target="_blank">
            <img src="/imagenes/beIN-Sports-LaLiga.webp " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV8.html " target="_blank">
            <img src="/imagenes/foxsport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV9.html " target="_blank">
            <img src="/imagenes/clarosport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV10.html " target="_blank">
            <img src="/imagenes/goldenplus.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV11.html " target="_blank">
            <img src="/imagenes/allsport.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV12.html " target="_blank">
            <img src="/imagenes/azteca7.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV13.html " target="_blank">
            <img src="/imagenes/tudn.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV14.html " target="_blank">
            <img src="/imagenes/foxsport1.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV15.html " target="_blank">
            <img src="/imagenes/twp.png " class="img-thumbnail " alt="... " class="w-50 "></a> 
        <a href="http://pelisplaya.net/IPTV16.html " target="_blank">
            <img src="/imagenes/surfchannel.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV17.html " target="_blank">
            <img src="/imagenes/tucine.png " class="img-thumbnail " alt="... " class="w-50 "></a> 
        <a href="http://pelisplaya.net/IPTV18.html " target="_blank">
            <img src="/imagenes/novelasco.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV19.html " target="_blank">
            <img src="/imagenes/foro.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV20.html " target="_blank">
            <img src="/imagenes/amas.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV21.html " target="_blank">
            <img src="/imagenes/chiquilines.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV22.html " target="_blank">
            <img src="/imagenes/topcine.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV23.html " target="_blank">
            <img src="/imagenes/horrorfy.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV24.html " target="_blank">
            <img src="/imagenes/cinesureno.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV25.html " target="_blank">
            <img src="/imagenes/fightnetwork.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV26.html " target="_blank">
            <img src="/imagenes/glory.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV27.html " target="_blank">
            <img src="/imagenes/hardknocks.png " class="img-thumbnail " alt="... " class="w-50 "></a>
        <a href="http://pelisplaya.net/IPTV28.html " target="_blank">
            <img src="/imagenes/impact.png " class="img-thumbnail " alt="... " class="w-50 "></a>
            <a href="http://pelisplaya.net/IPTV29.html " target="_blank">
            <img src="/imagenes/GenTv.png " class="img-thumbnail " alt="... " class="w-50 "></a>
              <a href="http://pelisplaya.net/IPTV30.html " target="_blank">
            <img src="/imagenes/telemundo.png " class="img-thumbnail " alt="... " class="w-50 "></a>
</nav>
</nav>
    `;
  }
}

customElements.define("menu-component", Menu);
