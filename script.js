(function(){
function go(){var c=navigator.connection;if(location.protocol==='file:'||(c&&(c.saveData||/(^|-)2g$/.test(c.effectiveType||''))))return;
var l=document.querySelectorAll('.top a:not([aria-current])');
l.forEach(function(a,i){setTimeout(function(){try{fetch(a.href,{credentials:'same-origin'}).catch(function(){})}catch(e){}},i*400)})}
function idle(){(window.requestIdleCallback||function(f){setTimeout(f,300)})(go)}
if(document.readyState==='complete')idle();else window.addEventListener('load',idle)
})();
(function(){
var els=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px 12% 0px',threshold:0});els.forEach(function(e){io.observe(e)})}
document.querySelectorAll('[data-copy]').forEach(function(b){
b.hidden=false;
b.addEventListener('click',function(){
var t=b.getAttribute('data-copy'),l=b.textContent;
function ok(){b.textContent='Adresse copiée ✓';b.classList.add('ok');setTimeout(function(){b.textContent=l;b.classList.remove('ok')},2200)}
function fb(){var a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(e){}a.remove()}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb)}else{fb()}
})})})();
