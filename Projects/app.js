// darkMode();
var preLoader=document.getElementById('preLoaderCont');
function preloaderF(){
    
    preLoader.style.display='none';
    // console.log('hello')
    
}
var infoMenu=document.getElementById("infoMenu")
var infoAbout=document.getElementById("infoAbout")
var miniNav=document.getElementById("miniNav")
var box=document.getElementById('box');
var cas3d=document.getElementById("cas3dId");
// 3dcas
function stop(){
   
    box.style.animationPlayState='paused';
    
}
box.addEventListener('mouseenter', function(){
    box.style.animationPlayState='running';
})
cas3d.addEventListener('touchmove', function(){
    box.style.animationPlayState='running';
})

function lightMode(){
    document.body.style.background="url(./image/bg-light.jpg)no-repeat fixed"
    
    document.getElementById('lightBtn').style.display='none';
    document.getElementById('lightBtn2').style.display='none';
    document.getElementById('darkBtn').style.display='block';
    document.getElementById('darkBtn2').style.display='block';
    infoMenu.classList.add('white');
    infoAbout.classList.add('white');
    miniNav.classList.add('white');
    document.getElementById('AB').style.color='black';    
    document.getElementById('aboutWhite').style.backgroundColor='white';
    document.getElementById('aboutWhiteA').style.color='black';
    document.getElementById('aboutWhite').style.color='black';
    document.getElementById('resumeWhite').style.backgroundColor='white';
    document.getElementById('resumeWhite').style.color='black';
    document.getElementById('resumeWhiteA').style.color='black';
   
    document.getElementById('resumeWhite').style.color='black';
    document.getElementById('workWhite').style.backgroundColor='white';
    document.getElementById('workWhite').style.color='black';
    document.getElementById('workWhiteA').style.color='black';
    document.getElementById('blogsWhite').style.backgroundColor='white';
    document.getElementById('blogsWhite').style.color='black';
    document.getElementById('ContactWhite').style.backgroundColor='white';
    document.getElementById('ContactWhite').style.color='black';
    document.getElementById('ContactWhiteA').style.color='black';
    document.getElementById('FrontEnd').style.backgroundColor='white';
    document.getElementById('FrontEnd').style.color='black';
    document.getElementById('what').style.display='none';
    document.getElementById('what2').style.display='block';
    

}
function darkMode(){
    document.body.style.background="url(./image/bgtwo.181487f3237d7ff109fa.jpg)no-repeat fixed"
    document.getElementById('lightBtn').style.display='block';
    document.getElementById('darkBtn').style.display='none';
    document.getElementById('lightBtn2').style.display='block';
    document.getElementById('darkBtn2').style.display='none';
    infoMenu.classList.remove('white');
    infoAbout.classList.remove('white');
    miniNav.classList.remove('white');
    document.getElementById('AB').style.color='white';
    document.getElementById('aboutWhite').style.backgroundColor='black';
    document.getElementById('aboutWhiteA').style.color='white';
    document.getElementById('aboutWhite').style.color='white';
    document.getElementById('resumeWhite').style.backgroundColor='black';
    document.getElementById('resumeWhiteA').style.color='white';
    document.getElementById('resumeWhite').style.color='white';
    
    document.getElementById('resumeWhite').style.color='white';
    document.getElementById('workWhite').style.backgroundColor='black';
    document.getElementById('workWhite').style.color='white';
    document.getElementById('blogsWhite').style.backgroundColor='black';
    document.getElementById('blogsWhite').style.color='white';
    document.getElementById('ContactWhite').style.backgroundColor='black';
    document.getElementById('ContactWhite').style.color='white';
    document.getElementById('ContactWhiteA').style.color='white';
    document.getElementById('FrontEnd').style.backgroundColor='black';
    document.getElementById('FrontEnd').style.color='white';
    document.getElementById('what').style.display='block';
    document.getElementById('what2').style.display='none';
    
   
}
function downloadCV(){
    window.location.assign('https://drive.google.com/uc?export=download&id=1bvue_EXKmbiiKNS94eEsBg8X6Os8ln4L')
}
function goAbout(){
    window.location.href= '../index.html'
}
function goContact(){
    window.location.href="../contact/contact.html";
}
function goBlogs(){
    window.location.href="../blogs/blog.html";
}