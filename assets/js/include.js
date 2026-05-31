(function(){
  const VERSION = '3.0.0';
  const base = () => window.PP_BASE_PATH || '';
  async function includeHTML(targetId, filePath){
    const target = document.getElementById(targetId);
    if(!target) return;
    try{
      const response = await fetch(`${base()}${filePath}?v=${VERSION}`);
      if(!response.ok) throw new Error(`Could not load ${filePath}`);
      target.innerHTML = await response.text();
      document.dispatchEvent(new CustomEvent('pp:partial-loaded', {detail:{targetId,filePath}}));
    }catch(err){
      target.innerHTML = `<div class="notice">Failed to load ${filePath}. Use GitHub Pages or a local server.</div>`;
      console.error(err);
    }
  }
  async function loadLayout(){
    await includeHTML('site-header','partials/header.html');
    await includeHTML('site-footer','partials/footer.html');
    const year = document.getElementById('footer-year');
    if(year) year.textContent = new Date().getFullYear();
    document.dispatchEvent(new CustomEvent('pp:partials-ready'));
  }
  document.addEventListener('DOMContentLoaded', loadLayout);
})();
