let menu = document.querySelector('header div')
menu.addEventListener('click',()=>{
  document.querySelector('header ul').classList.toggle('active');
  menu.classList.toggle('active')
})
//menu hidden 
window.addEventListener("scroll",()=>{
  if(window.scrollY > 10){
    menu.style.display = 'none';
    document.querySelector('header ul').style.display = 'none'
  }else{
    menu.style.display = 'flex';
    document.querySelector('header ul').style.display = 'flex'
  }
})


let allLing = document.querySelectorAll('header ul li a');
allLing.forEach(link =>{
  link.addEventListener('click',()=>{
    document.querySelector('header ul').classList.remove('active');
   menu.classList.remove('active')
  })
})
//plus btn click
let file = document.getElementById('file');
let plus = document.getElementById('plus');
plus.addEventListener('click',()=>{
  file.click()
})
//,dir logic
document.querySelector('.dir.html').addEventListener('click',()=>{
  document.querySelector('.files').classList.toggle('active');
  document.querySelector('.files.js').classList.remove('active');
  document.querySelector('.dir.js').classList.toggle('active');
})

document.querySelector('.dir.js').addEventListener('click',()=>{
  let file_js = document.querySelector('.files.js')
  file_js.classList.toggle('active');
  document.querySelector('.files').classList.remove('active');
  document.querySelector('.dir.html').classList.toggle('active');
})

//convert md to html
let all_file = document.querySelectorAll('.file');
all_file.forEach(oneFile => {
  oneFile.addEventListener('click',()=>{
  let name = oneFile.getAttribute('file_name');
  fetch(`md/${name}.md`)
  .then(res => res.text())
  .then(data => {
    let html = marked.parse(data);
    let content = document.getElementById('content').innerHTML = html
    console.log(html)
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block)
    })
    let page = document.getElementById('page');
    page.classList.add('active');
  })
  })
})
/*highlight settings*/
document.addEventListener('DOMContentLoaded',()=>{
marked.setOptions({
  highlight: function (code,lang) {
   const valid = hljs.getLanguage(lang)?lang:'plaintext';
   return hljs.highlight(code,{language:valid}).value;
  },
  langPrefix:'hljs language-',
  breaks: true
})
})
/*__________________*/
let showHome = document.querySelector('.showHome');
showHome.addEventListener('click',(e)=>{
  e.preventDefault()
  let page = document.getElementById('page');
    page.classList.remove('active');
    document.getElementById('viwer').classList.remove('active');
})

//input readme file
let input = document.getElementById('file');

  input.addEventListener('change',(e)=>{
  let file = e.target.files[0];
  if (!file) {
    return
  }
  let reader = new FileReader();
  reader.addEventListener('load',(e)=>{
    let mark = e.target.result;
    let html = marked.parse(mark);
    document.getElementById('content').innerHTML = html;
    document.querySelectorAll('pre code').forEach(block =>{
      hljs.highlightElement(block);
    })
    let page = document.getElementById('page');
    page.classList.add('active');
  })
  reader.readAsText(file);
})
//input end
//text_input markdown viwer start
let text_input = document.getElementById('text_input');
text_input.addEventListener('input',()=>{
  let html = marked.parse(text_input.value);
  document.getElementById('output').innerHTML = html;
  document.querySelectorAll('pre code').forEach(block =>{
      hljs.highlightElement(block);
    })
})

/*show editor*/
let editor = document.querySelector('.edit')
editor.addEventListener('click',()=>{
  document.getElementById('viwer').classList.add('active');
})
  
হয়