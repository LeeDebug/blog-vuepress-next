var a_idx=0;function getRandom(e,o){return Math.floor(Math.random()*(e-o+1)+o)}jQuery(document).ready((function(e){e("body").click((function(o){var t=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"),a=e("<span/>").text(t[a_idx]);a_idx=(a_idx+1)%t.length;var n=o.pageX,d=o.pageY;a.css({"z-index":1e69,top:d-20,left:n,position:"absolute","font-weight":"bold",color:`rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,"user-select":"none",cursor:"default"}),e("body").append(a),a.animate({top:d-180,opacity:0},1500,(function(){a.remove()}))}))}));