(()=>{"use strict";var t=new Map;t.set("best","http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score"),t.set("action","http://localhost:8000/api/v1/titles/?format=json&genre=action"),t.set("adult","http://localhost:8000/api/v1/titles/?format=json&genre=adult"),t.set("adventure","http://localhost:8000/api/v1/titles/?format=json&genre=adventure");var e=[0,0,0,0,0,0,0,0,0],n=["mySlides0","mySlides1","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8"],o=Array(),s=1;function l(t,o){var s,l=document.getElementsByClassName(n[o]),a=4,i=l.length-4;for(e[o]>i&&(e[o]=i),e[o]<0&&(e[o]=0),s=0;s<l.length;s++)l[s].style.display="none";for(s=e[o];s<l.length;s+=1)a>0&&(l[s].style.display="block",a--)}function a(t,n){l(e[n]+=t,n)}function i(e,n){var l=new XMLHttpRequest,a="",r=t.get(e);l.open("GET",r+"&page="+s,!1),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(0===(a=l.status)||a>=200&&a<400?function(t,e,n){var l=0;for(void 0!==(t=JSON.parse(t)).next&&null!==t.next||(s=0);l<t.results.length&&o.length<7&&o.length<e;l++)console.log("Page ("+s+") Adding "+t.results[l].title+" at "+t.results[l].imdb_url),o=o.concat(t.results[l]);for(console.log("(page "+s+") Nous avons actuellement "+o.length+" films."),(7===o.length||o.length===e)&&(s=0);0!==s;)7!==o.length&&o.length!==e||(s=0),s++,i(n,e)}(l.responseText,n,e):console.log("Something wrong, you'd better do something."))},l.send()}function r(t,e,n){var l,r="next"+e,c="prev"+e,d="\n    <p>".concat(n,' movies</p>\n<div class="slideshow-container">\n    <table>\n        <th>\n            <a class="prev" id="prev').concat(e,'">&#10094;</a>\n        </th>');l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"best",e=arguments.length>1?arguments[1]:void 0;return o=Array(),i(t,e),s=1,o}(n,10);for(var g=0;g<l.length;g++)d+='<th>\n              <div class="mySlides'.concat(e,'">\n                  <img src="').concat(l[g].image_url,'">\n              </div>\n          </th>');d+='\n        <th>\n            <a class="next" id="next'.concat(e,'">&#10095;</a>\n        </th>\n    </table>\n</div>\n    '),t.innerHTML+=d,document.getElementById(r).addEventListener("click",(function(t){t.stopPropagation(),a(1,e)})),document.getElementById(c).addEventListener("click",(function(t){t.stopPropagation(),a(-1,e)}))}window.onload=function(){!function(){for(var t=0,e=document.getElementsByTagName("*"),n=0;n<e.length;n++){var o=e[n],s=o.getAttribute("carousel");null!==s&&(r(o,t,s),t+=1)}for(var a=0;a<10;a++)l(0,a)}()},document.title="JustStreamIt"})();