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

       
    <li > <img  src="https://static.cinepolis.com/img/peliculas/41139/1/1/41139.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://regioplay.xyz/701023/Puss.in.Boots.The.Last.Wish.2022.lati.mp4')"> </li>


    <li > <img  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl9iV9tc_Oc3k-YGGanZbjkW2BIXjVzhzZaxclapKn9m9A8NCoD_74t039ghYsUkP7VnC8_GxBYShF1QNrrDwzWLGv66z3vkMqiUhBXii0C3qhceqW0fV1BtR5-MFJncyV3Qv0e98CTLKr1t5Km-uOHbuiArqGBzR8wXBbpeYTbLH91HlBAS9MGCI6vQ/s1600/poster-huevitos-congelados.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('http://regioplay.xyz/701023/Huevitos.congelados.2022.lati.mp4')"></li>
   </div>




   <li> <img src="https://pbs.twimg.com/media/FYrp2tQXwAArECL.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://regioplay.xyz/701023/Guillermo.del.Toros.Pinocchio.2022.lati.mp4
   ')"> </li> 


    </a>
</section>

</div>

</div>
</ul>     

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/11/w1280/p6HNFpXiXIdyMRJTrfkgaPkFCK.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20Bala%20perdida%202%20(2022)%20Online%20%E2%80%93%20CineHDPlus.mp4')"> </li>


    <li > <img  src="https://pics.filmaffinity.com/R_I_P_D_2_Rise_of_the_Damned-169387284-mmed.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20R.I.P.D.%202-%20Rise%20of%20the%20Damned%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   </div>




   <li> <img src="https://static.cinepolis.com/img/peliculas/40276/1/1/40276.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20La%20Mujer%20Rey%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 




    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/3eQMzMd2qsZkAJbk4wekp3Crg54.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://199.188.103.26/rombwgshgfhgdsjr/85455532potroxvix/Pel%C3%ADculas/Black%20Adam%202022latHD.mp4')"> </li>


    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/q1I02yesCWTLn1C1o64k0ezZgf9.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/bros.mp4')"></li>
   </div>




   <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/9azVNvLVswNn1dj43YbJ5sZiykd.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://proteiosmorelia.site/stuff/till.mp4')"> </li> 


    </a>
</section>

</div>

</div>
</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/huZhrNzGlzO9DFkO7ymGU8nwCuO.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/tubo.mp4')"> </li>


    <li > <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/dRaAyoHr3Zs1njTrn0F201d9H2k.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/clerks3.mp4')"> </li>
   </div>



    <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/tQstTS2Q3ZaeWu3fsGDDIr0EBnW.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/halloween.mp4')"> </li> 


</div>

</div>
</ul> 


   
<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/ebZLD9PD1YGU15QoY1PfVOj2x1n.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/cerveza.mp4')"> </li>


    <li > <img src="https://pics.filmaffinity.com/Cyrano-850889711-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://casiano.store/stuff/cyrano.mp4')"> </li>
   </div>



    <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/j14T7JfdN0XEgLao56aYKQoGwq7.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/dulce.mp4')"> </li> 

    <li><a href="#reproducir↑">  ► ↑ </a></li>
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/f37G0xxPdWw6IeeuMHxU05mMU2A.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://casiano.store/stuff/forgiven.mp4')"> </li>


    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/bYnlT2TbgSMytw0mVTQWAZ4mXNq.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/marnorte.mp4')"></li>
   </div>


   <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/10/vYhPCfSDlLObeV5bUIkmeUyR4gl.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/extrano.mp4')"> </li> 

</div>

</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39908-115310-20220812023302.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/esperando.mp4')"> </li>


    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/wDLthZ6Hgn8RY55p0bkcmLV4Nw6.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/war.mp4')"></li>
   </div>



    <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/h8gyJKvIHzXo5HrGOe2WOJEe0IV.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/emergenciabien.mp4')"> </li> 


</div>

</div>
</ul>



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/cKnaBlyhclpCMKAMQg96Lih1oab.jpg?ssl=1" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://proteiosmorelia.site/stuff/pinocho.mp4')"> </li>


    <li > <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/09/lGIkv9fQ3i7yVcJXDvG0Vry00LI.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/bestia.mp4')"> </li>
   </div>



    <li> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39753-784619-20220722063400.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://polimor.club/movies/vertigo.mp4')"> </li> 

    
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li > <img  src="https://pics.filmaffinity.com/pig-271208833-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/pig.mp4')"> </li>


    <li > <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/kXmnXE5RhLtmF9kGUMFA13KPSsN.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/caida.mp4')"> </li>
   </div>



    <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/4njdAkiBdC5LnFApeXSkFQ78GdT.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/medieval.mp4')"> </li> 

    
  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://pics.filmaffinity.com/causeway-924344630-mmed.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/resurgir.mp4')"> </li>


    <li > <img  src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/aw05OSgJFxsMiLAN0UQG2gCdTGY.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/smile2.mp4')"></li>
   </div>



    <li> <img src="https://i0.wp.com/polimor.club/wp-content/uploads/2022/11/2Aame7mFIgHd7leTubAVAg66bdo.jpg?ssl=1" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/viaje.mp4')"> </li> 

    <li><a href="#reproducir↑">  ► ↑ </a></li>

</div>

</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li > <img  src="https://pics.filmaffinity.com/Abracadabra_2-412182137-mmed.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://regioplay.xyz/228022/Hocus.Pocus.2.2022.lati.mp4')"> </li>


    <li > <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/432245/small_7c1513335e89b414939c6a26486f4117-994_poster.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('http://regioplay.xyz/228022/Nope.2022.lati.mp4')"> </li>
   </div>



    <li> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/38356-635259-20220708040700.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://regioplay.xyz/228022/DC.League.of.Super.Pets.2022.lati.mp4')"> </li> 

  

</div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li > <img  src="https://pics.filmaffinity.com/Mentada_de_padre-636355999-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://regioplay.xyz/228022/Mentada.de.padre.2019.lati.mp4')"> </li>


    <li > <img  src="https://pics.filmaffinity.com/Luck-722224530-mmed.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl(http://regioplay.xyz/228022/Luck.2022.lati.mp4')"></li>
   </div>



    <li> <img src="https://m.media-amazon.com/images/M/MV5BZDU1OGM0YzUtMzM2ZC00Y2VjLTliOWItY2IyOTQyODJhNTczXkEyXkFqcGdeQXVyMTI2MDIxOTY0._V1_.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://regioplay.xyz/228022/Las.leyendas.El.origen.2021.lati.mp4')"> </li> 

    <li><a href="#reproducir↑">  ► ↑ </a></li>
        
    </a>
</section>

</div>

</div>
</ul>   


 
 <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://pics.filmaffinity.com/bullet_train-757922812-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801402.us.archive.org/4/items/tr_3n/b_ull3t.mp4')"> </li>

 
     <li > <img src="https://pics.filmaffinity.com/orphan_first_kill-880267341-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801508.us.archive.org/12/items/f-1r-5t-k-1ll/F1r5t_K1ll.mp4')"> </li>
    </div>



     <li> <img src="https://descargasenhd.net/wp-content/uploads/2022/09/sNAMqQ9T7YnXnvUSufeWzaRgK6Y-200x300.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601502.us.archive.org/31/items/p.R3_y/p.R3_y0k.mp4')"> </li> 
 
   

 </div>

</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXND26B/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801507.us.archive.org/7/items/1nf-1n-1t-3.5t-0rm/1nf1n1t3.5t0rm.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/minions_the_rise_of_gru-608394212-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia802505.us.archive.org/11/items/m-1n-1-0n-5/m-1n-1-0n-5.mp4')"></li>
    </div>



     <li> <img src="https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601505.us.archive.org/28/items/l-1-y-3.4-r/L1_y3.4R.mp4')"> </li> 
 
     <li><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://pics.filmaffinity.com/iron_cross_the_road_to_normandy-587205455-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801500.us.archive.org/2/items/1r-0n-cr-055/1r0n_Cr%20055.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_valet-243941141-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601508.us.archive.org/20/items/ch-1-p-n/Ch_1P%20%27n%20.mp4')"> </li> 

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://m.media-amazon.com/images/I/513XjcK7OmL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/r-3dd-2022/R3dd2022.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_batman-449856406-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/b-4-t-m-4-n/B4%20t_m4N.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/resident_evil_welcome_to_raccoon_city-764554100-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601405.us.archive.org/23/items/rp-189-pr/RP189PR.mp4')"> </li>
     
     <li><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://m.media-amazon.com/images/I/71iwxS0LgUS.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia601502.us.archive.org/17/items/0t-31tr-4n-51lv-4n-142022/0t31tr4n51lv4n142022.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_matrix_resurrections-864937945-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/ghostbusters_afterlife-667822266-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601504.us.archive.org/31/items/c4s42021/c4s42021.mp4')"> </li> 

 </div>
 
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://pics.filmaffinity.com/marry_me-852565093-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia802508.us.archive.org/26/items/c-454-t-3-c-0nm-1-g-0/C454%20t3%20c0nm1%20g0.ia.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/ambulance-409574561-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia601400.us.archive.org/13/items/4m-bu-14nc-14/4mBu_14nc14.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/moonfall-138176660-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia802505.us.archive.org/7/items/m-0-0n-f-4l-l/M0%200n%20f4lL.mp4')"> </li>
     
     <li><a href="#reproducir↑">  ► ↑ </a></li>

     <section class="cuerpo">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <a href="#reproducir↑" class="float-pelis">
        <i class="fas fa-film my-float-pelis"></i>
`

 }
}

customElements.define('menu-component', Menu);


