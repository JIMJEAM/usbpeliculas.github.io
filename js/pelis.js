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
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://lumiere-a.akamaihd.net/v1/images/ant-man_and_the_wasp_quantumania_poster_2_la_6eea32a6.jpeg?region=0,0,743,1100" alt="
    Ant-Man and the Wasp: Quantumania" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2413')"> </li>


    <li class="cursor-pointer"> <img  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZX4JT7D7BJDJNIUZYUBD7EFKAU.jpg" alt="Creed III" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://editorial.aristeguinoticias.com/wp-content/uploads/2022/12/winnie-the-pooh-miel-y-sangre-poster-espanol-scaled.jpg" alt="Winnie the Pooh: Miel y Sangre" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2128/01.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 


<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://i.postimg.cc/rwKPZ2NF/evildead.jpg" alt="
    Evil Dead El despertar" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2324')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg" alt="Power Rangers: Ayer, hoy y siempre" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg" alt="Embaucadores" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://posterspy.com/wp-content/uploads/2022/12/Cocaine_Bear_Poster.jpg" alt="
    Bear Cocaine" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001829780398/57009')"> </li>


    <li class="cursor-pointer"> <img  src="https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_55914.jpg" alt="Llaman a la puerta" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/llaman-a-la-puerta_202302/Llaman a la puerta.ia.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//oGHr8yUOXtVK0mGoZURZqqbwXXj.jpg" alt="Identidad desbloqueada" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230227_20230227_1914/01.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://i.ebayimg.com/images/g/8EoAAOSw5W5j6eML/s-l500.jpg" alt="
    Scream 6" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001829780398/59433')"> </li>


    <li class="cursor-pointer"> <img  src="https://www.andesfilms.com.pe/wp-content/thumbgen_cache/7728cf289d0227910838d9e0e55cd3f1.jpg" alt="65: Al Borde de la Extinción" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801606.us.archive.org/29/items/654lb-0rd-3/654lb-0rd3.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b5952b644d35ab311c10c63c178727e0e2d2dcd796c1081566129423497c6410._RI_V_TTW_.jpg" alt="Duro de cuidar 2" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230227_20230227_2250/01.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.nextgame.es/wp-content/uploads/2022/10/Una-Boda-Explosiva-trailer.png" alt="Una boda Explosiva" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia804706.us.archive.org/13/items/b0d_45-pl0M0/b0d_45-pl0M0.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/33404.jpg" alt="Avatar: El Camino del Agua" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia804706.us.archive.org/27/items/4v-a-t-4-r/4v_aT4-r.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/M3GAN-614109678-large.jpg" alt="M3gan" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/m-333gan-dual-latino-ingles/M333gan DUAL(Latino-Inglés).mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 
    
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/img/peliculas/41145/1/1/41145.jpg" alt="Vecino gruñon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia804707.us.archive.org/21/items/1-v-3c-1n-0-gru-n-0n/1_v3c1n0-gruN%CC%830n.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://es.web.img3.acsta.net/pictures/23/01/16/17/21/5753145.jpg" alt="El piloto" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801609.us.archive.org/20/items/3-l-p-1l-0-t-0/3L_P1l0-t0.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://es.web.img2.acsta.net/pictures/22/03/21/17/30/4116877.jpg" alt="
   Fresh" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia904706.us.archive.org/0/items/fr35h.lat/fr35h.lat.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul>  



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//gU4mmINWUF294Wzi8mqRvi6peMe.jpg" alt="Narvik" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2041/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7f6Ya7WpgKXzR2Ha6WPJXnz1DQcjEg9egl6AfZlu-pZjUOC_eLtw8iPgnm06mCGx9Do&usqp=CAU" alt="Magic mike's last dance" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001829780398/55685')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//abBDzmy35A3Nkupn6wK2DKyFamd.jpg" alt="Viking Wolf" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230207_20230207_2245/01.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/11/w1280/p6HNFpXiXIdyMRJTrfkgaPkFCK.jpg" alt="La bala perdida 2" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20Bala%20perdida%202%20(2022)%20Online%20%E2%80%93%20CineHDPlus.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/R_I_P_D_2_Rise_of_the_Damned-169387284-mmed.jpg" alt="R.I.P.D 2: La rebelión de los condenados" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20R.I.P.D.%202-%20Rise%20of%20the%20Damned%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   </div>




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/img/peliculas/40276/1/1/40276.jpg" alt="La mujer rey" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20La%20Mujer%20Rey%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 




    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg"Babylon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230203_20230203/01.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg" alt="Teen Wolf" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2101/01.mp4')"> </li> 
   </div>




   <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/A_todas_partes-867357163-mmed.jpg" alt="A todas partes" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230217_20230217_1536/01.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
<li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/3eQMzMd2qsZkAJbk4wekp3Crg54.jpg?ssl=1" alt="Black Adam" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://199.188.103.26/rombwgshgfhgdsjr/85455532potroxvix/Pel%C3%ADculas/Black%20Adam%202022latHD.mp4')"> </li>


<li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/M_rame-350956231-mmed.jpg" alt="Mírame" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia804700.us.archive.org/13/items/m_1r4-m3/m_1r4-m3.mp4')"> </li> 
</div>




<li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/9azVNvLVswNn1dj43YbJ5sZiykd.jpg?ssl=1" alt="Hasta la muerte" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://proteiosmorelia.site/stuff/till.mp4')"> </li> 


</a>
</section>

</div>

</div>
</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/huZhrNzGlzO9DFkO7ymGU8nwCuO.jpg?ssl=1" alt="El tubo" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/tubo.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/dRaAyoHr3Zs1njTrn0F201d9H2k.jpg?ssl=1" alt="Dependientes 3" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/clerks3.mp4')"> </li>
   </div>



    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/tQstTS2Q3ZaeWu3fsGDDIr0EBnW.jpg?ssl=1" alt="Hallowen el final" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/halloween.mp4')"> </li> 


</div>

</div>
</ul> 


   
<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/ebZLD9PD1YGU15QoY1PfVOj2x1n.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/cerveza.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Cyrano-850889711-large.jpg" alt="Cyrano" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://casiano.store/stuff/cyrano.mp4')"> </li>
   </div>



    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/j14T7JfdN0XEgLao56aYKQoGwq7.jpg?ssl=1" alt="Mi dulce monstruo" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/dulce.mp4')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/f37G0xxPdWw6IeeuMHxU05mMU2A.jpg?ssl=1" alt="Los perdonados" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://casiano.store/stuff/forgiven.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/bYnlT2TbgSMytw0mVTQWAZ4mXNq.jpg?ssl=1" alt="El mar del norte" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/marnorte.mp4')"></li>
   </div>


   <li class="cursor-pointer"> <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/10/w1280/vYhPCfSDlLObeV5bUIkmeUyR4gl.jpg" alt="El extraño" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/extrano.mp4')"> </li> 

</div>

</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39908-115310-20220812023302.jpg" alt="Érase Una Vez Un Genio" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/esperando.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/wDLthZ6Hgn8RY55p0bkcmLV4Nw6.jpg?ssl=1" alt="Fantasmas de guerra" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/war.mp4')"></li>
   </div>



    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/h8gyJKvIHzXo5HrGOe2WOJEe0IV.jpg?ssl=1" alt="Emergencia en el aire" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/emergenciabien.mp4')"> </li> 


</div>

</div>
</ul>



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/cKnaBlyhclpCMKAMQg96Lih1oab.jpg?ssl=1" alt="Pinocho" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://proteiosmorelia.site/stuff/pinocho.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/lGIkv9fQ3i7yVcJXDvG0Vry00LI.jpg?ssl=1" alt="La bestia" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/bestia.mp4')"> </li>
   </div>



    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39753-784619-20220722063400.jpg" alt="
    Vértigo" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://polimor.club/movies/vertigo.mp4')"> </li> 

    
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/pig-271208833-large.jpg" alt="Pig" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/pig.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/kXmnXE5RhLtmF9kGUMFA13KPSsN.jpg?ssl=1" alt="La caída" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/caida.mp4')"> </li>
   </div>



    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/4njdAkiBdC5LnFApeXSkFQ78GdT.jpg?ssl=1" alt="Medieval" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/medieval.mp4')"> </li> 

    
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://images.justwatch.com/poster/300974125/s718/causeway.%7Bformat%7D" alt="Causeway" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/resurgir.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/aw05OSgJFxsMiLAN0UQG2gCdTGY.jpg?ssl=1" alt="Sonríe" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/smile2.mp4')"></li>
   </div>



    <li class="cursor-pointer"> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/2Aame7mFIgHd7leTubAVAg66bdo.jpg?ssl=1" alt="Pasaje al paraíso" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/viaje.mp4')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

</div>

</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Malcriados-327749313-large.jpg" alt="Malcriados" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/432245/small_7c1513335e89b414939c6a26486f4117-994_poster.jpg" alt="¡Nop!" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4')"> </li>
   </div>



    <li class="cursor-pointer"> <img src="https://assets.cinepolisklic.com/cmsklicia/movieimages/chernobil-la-pelicula/poster_originalsize_250X375.jpg" alt="Chernóbil: La Película" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia802601.us.archive.org/3/items/ch-3rn-0/Ch3rn_0.mp4')"> </li> 

  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Huesera-823576509-large.jpg" alt="Huesera" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia904706.us.archive.org/0/items/hu-3-53.r-4/Hu3_53.r4.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://mx.web.img3.acsta.net/pictures/23/01/20/12/19/2283426.jpg" alt="Jung E" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia904705.us.archive.org/30/items/j-u-n-6-3/J_uN6_3.mp4')"></li>
   </div>



    <li class="cursor-pointer"> <img src="https://www.ennetflix.mx/media/15/amor-al-cuadrado_81259382.jpg" alt="Amor al cuadrado" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2393')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>
        
    </a>
</section>

</div>

</div>
</ul>   


 
 <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/bullet_train-757922812-large.jpg" alt="Tren bala" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801402.us.archive.org/4/items/tr_3n/b_ull3t.mp4')"> </li>

 
     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/orphan_first_kill-880267341-large.jpg" alt="La Huérfana: el origen" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801508.us.archive.org/12/items/f-1r-5t-k-1ll/F1r5t_K1ll.mp4')"> </li>
    </div>



     <li class="cursor-pointer"> <img src="https://i0.wp.com/cinecalidad.icu/wp-content/uploads/2022/08/sNAMqQ9T7YnXnvUSufeWzaRgK6Y.jpg?fit=200%2C300&ssl=1" alt="Depredador la presa" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601502.us.archive.org/31/items/p.R3_y/p.R3_y0k.mp4')"> </li> 
 
   

 </div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXND26B/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg" alt="Tormenta infinita" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801507.us.archive.org/7/items/1nf-1n-1t-3.5t-0rm/1nf1n1t3.5t0rm.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/minions_the_rise_of_gru-608394212-large.jpg" alt="Minions: nace un villano" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia802505.us.archive.org/11/items/m-1n-1-0n-5/m-1n-1-0n-5.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img src="https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg" alt="El Valet" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601505.us.archive.org/28/items/l-1-y-3.4-r/L1_y3.4R.mp4')"> </li> 
 
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/iron_cross_the_road_to_normandy-587205455-large.jpg" alt="Cruz de Hierro: El camino a Normandía" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801500.us.archive.org/2/items/1r-0n-cr-055/1r0n_Cr%20055.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_valet-243941141-large.jpg" alt="Chip y Dale: Al Rescate" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601508.us.archive.org/20/items/ch-1-p-n/Ch_1P%20%27n%20.mp4')"> </li> 

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://m.media-amazon.com/images/I/513XjcK7OmL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Red" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/r-3dd-2022/R3dd2022.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_batman-449856406-large.jpg" alt="The Batman" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/b-4-t-m-4-n/B4%20t_m4N.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/resident_evil_welcome_to_raccoon_city-764554100-large.jpg" alt="Resident Evil: Bienvenidos a Raccoon City" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601405.us.archive.org/23/items/rp-189-pr/RP189PR.mp4')"> </li>
     
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://m.media-amazon.com/images/I/71iwxS0LgUS.jpg" alt="Hotel Transylvania: transformanía" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia601502.us.archive.org/17/items/0t-31tr-4n-51lv-4n-142022/0t31tr4n51lv4n142022.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_matrix_resurrections-864937945-large.jpg" alt="Matrix Resurrecciones" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/ghostbusters_afterlife-667822266-large.jpg" alt="Ghostbusters: el legado
     A 2021 ‧ Comedia/Fantasía ‧ 2h 4m
     " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601504.us.archive.org/31/items/c4s42021/c4s42021.mp4')"> </li> 

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/marry_me-852565093-large.jpg" alt="Merry me" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia802508.us.archive.org/26/items/c-454-t-3-c-0nm-1-g-0/C454%20t3%20c0nm1%20g0.ia.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/ambulance-409574561-large.jpg" alt="Ambulancia" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia601400.us.archive.org/13/items/4m-bu-14nc-14/4mBu_14nc14.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/img/peliculas/39361/1/1/39361.jpg" alt="Thor: Amor y trueno" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia801500.us.archive.org/3/items/t-h-0-r/T_h0-r.mp4')"> </li>

     <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/ovHxxphDgjyEpYriDoGoIHfrdZL.jpg" alt="A quien solia conocer" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2392')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Mortal_Kombat-143448809-large.jpg" alt="Mortal Combat" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/m-0rt-4l-k-0mb-4/M0rt4l%20K0mb4%2B.mp4')"></li>
    </div>



     <li class="cursor-pointer"> <img  src="https://mundosuperman.com/wp-content/uploads/2020/05/Snyder-Cut.jpg" alt="La Liga de la Justicia de Zack Snyder" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://ia601506.us.archive.org/6/items/meme-5/jus.mp4')"> </li>
     
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

     <section class="cuerpo">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <a href="#reproducir↑" class="float-pelis">
        <i class="fas fa-film my-float-pelis"></i>
        
`

 }
}

customElements.define('menu-component', Menu);


