(()=>{"use strict";var t=new Map;t.set("best","http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score"),t.set("action","http://localhost:8000/api/v1/titles/?format=json&genre=action"),t.set("adult","http://localhost:8000/api/v1/titles/?format=json&genre=adult"),t.set("adventure","http://localhost:8000/api/v1/titles/?format=json&genre=adventure");var n=[0,0,0,0,0,0,0,0,0],e=["mySlides0","mySlides1","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8"],o=Array(),r=1,a=new Map;function i(t,o){var r,a=document.getElementsByClassName(e[o]),i=4,l=a.length-4;for(n[o]>l&&(n[o]=l),n[o]<0&&(n[o]=0),r=0;r<a.length;r++)a[r].style.display="none";for(r=n[o];r<a.length;r+=1)i>0&&(a[r].style.display="block",i--)}function l(t,e){i(n[e]+=t,e)}function c(n,e){var a=new XMLHttpRequest,i="",l=t.get(n);a.open("GET",l+"&page="+r,!1),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(0===(i=a.status)||i>=200&&i<400?function(t,n,e){var a=0;for(void 0!==(t=JSON.parse(t)).next&&null!==t.next||(r=0);a<t.results.length&&o.length<7&&o.length<n;a++)o=o.concat(t.results[a]);for(7!==o.length&&o.length!==n||(r=0);0!==r;)7!==o.length&&o.length!==n||(r=0),r++,c(e,n)}(a.responseText,e,n):console.log("Something wrong, you'd better do something."))},a.send()}function s(t,n,e){var i,s="next"+n,u="prev"+n,d="\n    <p>".concat(e,' movies</p>\n<div class="slideshow-container">\n    <table>\n        <th>\n            <a class="prev" id="prev').concat(n,'">&#10094;</a>\n        </th>');i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"best",n=arguments.length>1?arguments[1]:void 0;return o=Array(),c(t,n),r=1,o}(e,10);for(var f=0;f<i.length;f++)d+='<th>\n              <div class="mySlides'.concat(n,'" id="').concat("movie"+n+"_"+f,'">\n                  <img src="').concat(i[f].image_url,'">\n              </div>\n          </th>'),a.set("movie"+n+"_"+f,i[f]);d+='\n        <th>\n            <a class="next" id="next'.concat(n,'">&#10095;</a>\n        </th>\n    </table>\n</div>\n    '),t.innerHTML+=d,document.getElementById(s).addEventListener("click",(function(t){t.stopPropagation(),l(1,n)})),document.getElementById(u).addEventListener("click",(function(t){t.stopPropagation(),l(-1,n)}))}function u(t){document.getElementById("topmovie").innerHTML='\n  <table>\n    <tr>\n      <td width="200px" height="230px">'.concat(t.title,'\n      </td>\n      <td rowspan="3">\n        <img src="').concat(t.image_url,'">\n      </td>\n    </tr>\n    <tr>\n    <td>\n    Here is the film resume.\n    </td>\n    </tr>\n    <tr>\n      <td class="playbutton">\n      <a href="').concat(t.imdb_url,'" target="_blank"><center>Play</center></a>\n      </td>\n    </tr>\n  </table>\n  ')}function d(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(l)throw a}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function y(){var t="",n="";u(a.get("movie0_0"));var e,o=function(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(l)throw a}}}}(a);try{var r=function(){function o(){u(this.movie)}function r(){!function(t){var n="",e="",o="",r=document.getElementById("myModal");document.getElementsByClassName("close")[0].onclick=function(){r.style.display="none"},window.onclick=function(t){t.target==r&&(r.style.display="none")};var a,i=d(t.genres);try{for(i.s();!(a=i.n()).done;)n=n+a.value+" "}catch(t){i.e(t)}finally{i.f()}var l,c=d(t.directors);try{for(c.s();!(l=c.n()).done;)e=e+l.value+" "}catch(t){c.e(t)}finally{c.f()}var s,u=d(t.actors);try{for(u.s();!(s=u.n()).done;)o=o+s.value+" "}catch(t){u.e(t)}finally{u.f()}document.getElementById("modalText").innerHTML='\n<p>L’image de la pochette du film</p>\n<img src="'.concat(t.image_url,'">\n<p>Le Titre du film : ').concat(t.title,"</p>\n<p>Le genre complet du film : ").concat(n,"</p>\n<p>Sa date de sortie : ").concat(t.year,"</p>\n<p>Son Rated : ").concat(t.votes,"</p>\n<p>Son score Imdb : ").concat(t.imdb_score,"</p>\n<p>Son réalisateur : ").concat(e,"</p>\n<p>La liste des acteurs : ").concat(o,"</p>\n<p>Sa durée</p>\n<p>Le pays d’origine</p>\n<p>Le résultat au Box Office</p>\n<p>Le résumé du film</p>\n  ")}(this.movie)}t=e.value,n=document.getElementById(t[0]),o=o.bind({movie:t[1]}),r=r.bind({movie:t[1]}),n.addEventListener("click",(function(t){t.stopPropagation,document.getElementById("myModal").style.display="block",r()})),n.addEventListener("mouseover",(function(t){t.stopPropagation,o()}))};for(o.s();!(e=o.n()).done;)r()}catch(t){o.e(t)}finally{o.f()}}window.onload=function(){document.getElementById("myModal").style.display="none",function(){for(var t=0,n=document.getElementsByTagName("*"),e=0;e<n.length;e++){var o=n[e],r=o.getAttribute("carousel");null!==r&&(s(o,t,r),t+=1)}for(var a=0;a<10;a++)i(0,a);y()}()},document.title="JustStreamIt"})();