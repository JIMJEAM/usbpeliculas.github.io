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

        
     <li > <img  src="https://pics.filmaffinity.com/bullet_train-757922812-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801402.us.archive.org/4/items/tr_3n/b_ull3t.mp4')"> </li>

 
     <li > <img src="https://pics.filmaffinity.com/orphan_first_kill-880267341-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801508.us.archive.org/12/items/f-1r-5t-k-1ll/F1r5t_K1ll.mp4')"> </li>
    </div>



     <li> <img src="https://descargasenhd.net/wp-content/uploads/2022/09/sNAMqQ9T7YnXnvUSufeWzaRgK6Y-200x300.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601502.us.archive.org/31/items/p.R3_y/p.R3_y0k.mp4')"> </li> 
 
   

 </div>
  </ul>
</div>
</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXND26B/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801507.us.archive.org/7/items/1nf-1n-1t-3.5t-0rm/1nf1n1t3.5t0rm.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/minions_the_rise_of_gru-608394212-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia802505.us.archive.org/11/items/m-1n-1-0n-5/m-1n-1-0n-5.mp4')"></li>
    </div>



     <li> <img src="https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601505.us.archive.org/28/items/l-1-y-3.4-r/L1_y3.4R.mp4')"> </li> 
 
     <li><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
  </ul>
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://pics.filmaffinity.com/iron_cross_the_road_to_normandy-587205455-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801500.us.archive.org/2/items/1r-0n-cr-055/1r0n_Cr%20055.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_valet-243941141-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601508.us.archive.org/20/items/ch-1-p-n/Ch_1P%20%27n%20.mp4')"> </li> 

 </div>
  </ul>
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://m.media-amazon.com/images/I/513XjcK7OmL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/r-3dd-2022/R3dd2022.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_batman-449856406-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/b-4-t-m-4-n/B4%20t_m4N.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/resident_evil_welcome_to_raccoon_city-764554100-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601405.us.archive.org/23/items/rp-189-pr/RP189PR.mp4')"> </li>
     
     <li><a href="#reproducir↑">  ► ↑ </a></li>

 </div>
  </ul>
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://m.media-amazon.com/images/I/71iwxS0LgUS.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia601502.us.archive.org/17/items/0t-31tr-4n-51lv-4n-142022/0t31tr4n51lv4n142022.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/the_matrix_resurrections-864937945-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/ghostbusters_afterlife-667822266-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601504.us.archive.org/31/items/c4s42021/c4s42021.mp4')"> </li> 

 </div>
  </ul>
</div>
</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li > <img  src="https://pics.filmaffinity.com/marry_me-852565093-large.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia802508.us.archive.org/26/items/c-454-t-3-c-0nm-1-g-0/C454%20t3%20c0nm1%20g0.ia.mp4')"> </li>

 
     <li > <img  src="https://pics.filmaffinity.com/ambulance-409574561-large.jpg" alt="moon" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia601400.us.archive.org/13/items/4m-bu-14nc-14/4mBu_14nc14.mp4')"></li>
    </div>



     <li> <img src="https://pics.filmaffinity.com/moonfall-138176660-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia802505.us.archive.org/7/items/m-0-0n-f-4l-l/M0%200n%20f4lL.mp4')"> </li>
     
     <li><a href="#reproducir↑">  ► ↑ </a></li>
`

 }
}

customElements.define('menu-component', Menu);


