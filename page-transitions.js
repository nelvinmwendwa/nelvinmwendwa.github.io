(()=>{"use strict";
const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(reduce)return;
document.documentElement.classList.add("transitions-ready");
const enter=()=>{document.body.classList.add("page-enter");window.setTimeout(()=>document.body.classList.remove("page-enter"),520)};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",enter,{once:true});else enter();
window.addEventListener("pageshow",()=>document.body.classList.remove("page-leaving"));
document.addEventListener("click",event=>{
 if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const link=event.target.closest("a[href]");
 if(!link||link.target==="_blank"||link.hasAttribute("download")||link.dataset.noTransition!==undefined)return;
 let next;try{next=new URL(link.href,location.href)}catch{return}
 if(next.origin!==location.origin||next.pathname===location.pathname&&next.search===location.search)return;
 if(next.pathname===location.pathname&&next.hash)return;
 event.preventDefault();document.body.classList.add("page-leaving");
 window.setTimeout(()=>{location.href=next.href},210);
});
})();