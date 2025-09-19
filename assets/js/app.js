
const menu=document.querySelector('.menu');const burger=document.querySelector('.burger');
if(burger){burger.addEventListener('click',()=>{const isOpen=menu.style.display==='flex';menu.style.display=isOpen?'none':'flex';});}
(function(){
  const tabs = document.querySelectorAll('.tab'); const panes = document.querySelectorAll('.tabpane');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('is-active')); panes.forEach(p=>p.classList.remove('is-active'));
    t.classList.add('is-active'); const id=t.dataset.tab; const pane=document.getElementById(id); if(pane) pane.classList.add('is-active');
  }));
})();
