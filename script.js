// EDIT YOUR CARS HERE. Duplicate an object to add another listing.
const vehicles = [
  {status:'COMING SOON',name:'Vehicle stock',details:'New stock will appear here'},
  {status:'COMING SOON',name:'Vehicle stock',details:'Message us for current availability'},
  {status:'SOURCING AVAILABLE',name:'Looking for a specific car?',details:'We can help source it'}
];
const grid=document.getElementById('stockGrid');
vehicles.forEach(v=>grid.insertAdjacentHTML('beforeend',`<article class="stock-card"><div class="stock-img">RAW</div><div class="stock-info"><span class="status">${v.status}</span><h3>${v.name}</h3><p>${v.details}</p><a class="textlink" href="https://wa.me/447549530115?text=Hi%20Redline%20Auto%20Works%2C%20I%27m%20enquiring%20about%20${encodeURIComponent(v.name)}">ENQUIRE →</a></div></article>`));
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'), nav=document.querySelector('nav');menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#080808';nav.style.flexDirection='column'});
