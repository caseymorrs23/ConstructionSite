
async function loadProjects(){
  try{
    const res = await fetch('/assets/data/projects.json', {cache:'no-cache'});
    if(!res.ok) throw new Error('Cannot load projects.json');
    const items = await res.json();

    const grid = document.querySelector('#projects-grid');
    if(!grid) return;

    // Clear existing
    grid.innerHTML = '';

    items.forEach(item => {
      const fig = document.createElement('figure');
      fig.className = 'tile';

      // Picture element with webp fallback
      const picture = document.createElement('picture');
      if(item.webp){
        const srcset = document.createElement('source');
        srcset.type = 'image/webp';
        srcset.srcset = item.webp;
        picture.appendChild(srcset);
      }
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = item.title || 'Project photo';
      img.src = item.src;
      img.onerror = () => {
        fig.classList.add('placeholder');
        img.remove();
      };
      picture.appendChild(img);

      const meta = document.createElement('figcaption');
      meta.className = 'meta';
      const strong = document.createElement('strong');
      strong.textContent = item.title || 'Project Photo';
      const small = document.createElement('small');
      small.textContent = item.caption || '';
      const tag = document.createElement('div');
      tag.className = 'tag';
      tag.textContent = item.category || '';
      meta.appendChild(strong);
      meta.appendChild(document.createElement('br'));
      meta.appendChild(small);
      if(item.category) meta.appendChild(tag);

      fig.appendChild(picture);
      fig.appendChild(meta);
      grid.appendChild(fig);
    });
  }catch(e){
    console.error(e);
  }
}
document.addEventListener('DOMContentLoaded', loadProjects);
