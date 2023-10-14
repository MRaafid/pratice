const siteTitle = document.getElementById('site-title');
const navEl = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');
//manuplation
siteTitle.innerText ='Dynamation SpaceTech LLC'
Array.from(navEl).forEach((el)=>(el.innerText = `=>${el.innerText}<=`));
Array.from(contentText).forEach((el)=>(el.innerText = el.innerText.toUpperCase()));
siteDesc.innerText = siteDesc.innerText.replace(
    'DynTech LLC',
    'Dynamation SpaceTech LLC'
  );
  
  contentDiv.style.backgroundColor = '#fff';
  contentDiv.style.textAlign = 'justify';
  
  altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));
  