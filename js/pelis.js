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
</ul> `

 }
}

customElements.define('menu-component', Menu);