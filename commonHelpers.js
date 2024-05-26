(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector(".forma");const n=document.querySelector(".list-gallery"),l="https://pixabay.com/api/",u="43441081-c9c9daac9af91d4227dda2db1",p=new URLSearchParams({key:u,q:"car",image_type:"photo",orientation:"horizontal",safesearch:"true"});function d(r=l,s={}){return fetch(r,s).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}d(`${l}?${p}`).then(r=>n.insertAdjacentHTML("beforeend",f(r.hits))).catch(r=>console.log(r));function f(r){return r.map(({id:s,tags:o,likes:c,views:e,comments:t,downloads:i,webformatURL:a,largeImageURL:m})=>`
        <li class = "list__item" data-id = "${s}">
       
        <img  class = "gallery-image" src="${a}" alt = "${o}"/>
        
            <div class = "wrapper">

                <ul class ="wrapper-info ">
                    <li class = "likes">
                    <p class ="title">Likes</p>
                    <p class = "info">${c}</p>
                    </li>
                    <li class = "views">
                    <p class ="title">Views</p>
                    <p class = "info">${e}</p>
                    </li>
                    <li class = "comments">
                    <p class ="title">Comments</p>
                    <p class = "info">${t}</p>
                    </li>
                    <li class = "downloads">
                    <p class ="title">Downloads</p>
                    <p class = "info">${i}</p>
                    </li>
                 
                </ul>
            </div>
        </li>
`).join("")}document.querySelector(".forma");document.querySelector(".list-gallery");
//# sourceMappingURL=commonHelpers.js.map
