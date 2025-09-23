
// Map photo filenames to human-friendly titles + descriptions.
// Add or adjust entries as needed; keys should be the file's basename.
const GQC_CAPTIONS = {
  "hero-frame.jpg": ["Commercial: Framing in Golden Hour","Large multi-family framing under way at sunset."],
  "clt-panel-lift.jpg": ["CLT: Panel Lift","Crew flying cross-laminated timber panel into position."],
  "crew-overlook.jpg":["Commercial: Crew Overlook","QA/QC walkthrough over a multi-building site."],
  "tower-operator.jpg":["Commercial: Tower Operator","Precision crane work keeps schedule moving."],
  "interior-corridor.jpg":["Commercial: Interior Corridor","Fire-rated corridor framing aligned for MEP rough-in."],
  "yellow-basket.jpg":["CLT: Basket to Deck","Operator heading to the deck for rigging ops."],
  "gable-house.jpg":["CLT: Haus Gables","Modern geometry executed with CLT assembly."],
  "panel-sky.jpg":["CLT: Panel Flying","Custom shape panel placed with millimeter accuracy."]
};

function applyCaptions(selector=".gallery figure"){
  document.querySelectorAll(selector).forEach(fig=>{
    const img = fig.querySelector("img");
    if(!img) return;
    const name = (img.getAttribute("data-name") || img.src.split('/').pop()).toLowerCase();
    const base = name.replace(/\?.*$/,"");
    const meta = GQC_CAPTIONS[base];
    let title = img.getAttribute("alt") || base;
    let desc = img.getAttribute("data-desc") || "";
    if(meta){ title = meta[0]; desc = meta[1]; img.setAttribute("alt", title); }
    let cap = fig.querySelector("figcaption");
    if(!cap){ cap = document.createElement("figcaption"); fig.appendChild(cap); }
    cap.innerHTML = `<span class="title">${title}</span><span class="desc">${desc}</span>`;
  });
}
document.addEventListener("DOMContentLoaded", ()=>applyCaptions());
