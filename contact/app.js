var preLoader=document.getElementById('preLoaderCont');
function preloaderF(){
    
    preLoader.style.display='none';
    // console.log('hello')
    
}
var infoMenu=document.getElementById("infoMenu")
var infoAbout=document.getElementById("infoAbout")
var miniNav=document.getElementById("miniNav")



function lightMode(){
    document.body.style.background="url(./image/bg-light.jpg)no-repeat fixed"
    console.log(infoMenu);
    document.getElementById('lightBtn').style.display='none';
    document.getElementById('lightBtn2').style.display='none';
    document.getElementById('darkBtn').style.display='block';
    document.getElementById('darkBtn2').style.display='block';
    infoMenu.classList.add('white');
    infoAbout.classList.add('white');
    miniNav.classList.add('white');
   
    document.getElementById('AB').style.color='black';
    document.getElementById('ConCl').style.color='black';
    document.getElementById('ConCl2').style.color='black';
    
    document.getElementById('data1').style.color='black';
    document.getElementById('data2').style.color='black';
    document.getElementById('data3').style.color='black';
    
    document.getElementById('resumeWhite').style.backgroundColor='white';
    document.getElementById('resumeWhite').style.color='black';
    document.getElementById('resumeWhiteA').style.color='black';
    document.getElementById('aboutWhite').style.backgroundColor='white';
    document.getElementById('aboutWhite').style.color='black';
    document.getElementById('aboutWhiteA').style.color='black';
   
   
    document.getElementById('workWhite').style.backgroundColor='white';
    document.getElementById('workWhite').style.color='black';
    document.getElementById('workWhiteA').style.color='black';
    document.getElementById('blogsWhite').style.backgroundColor='white';
    document.getElementById('blogsWhite').style.color='black';
    document.getElementById('contactWhite').style.backgroundColor='white';
    document.getElementById('contactWhite').style.color='white';
    document.getElementById('contactWhiteA').style.color='white';
    document.getElementById('FrontEnd').style.backgroundColor='white';
    document.getElementById('FrontEnd').style.color='black';

    document.getElementById('contactBox').style.border='1px solid #C6C2C5'
    
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
    document.getElementById('aboutWhite').style.color='white';
    document.getElementById('aboutWhiteA').style.color='white';
    document.getElementById('resumeWhite').style.backgroundColor='black';
    document.getElementById('resumeWhite').style.color='white';
    document.getElementById('workWhite').style.backgroundColor='black';
    document.getElementById('workWhite').style.color='white';
    document.getElementById('workWhiteA').style.color='white';
    document.getElementById('blogsWhite').style.backgroundColor='black';
    document.getElementById('blogsWhite').style.color='white';
    document.getElementById('contactWhite').style.backgroundColor='black';
    document.getElementById('contactWhite').style.color='white';
    document.getElementById('FrontEnd').style.backgroundColor='black';
    document.getElementById('FrontEnd').style.color='white';
    document.getElementById('resumeWhite').style.backgroundColor='black';
    document.getElementById('resumeWhiteA').style.color='white';
    document.getElementById('resumeWhite').style.color='white';
    document.getElementById('ConCl').style.color='white';
    document.getElementById('ConCl2').style.color='white';

    document.getElementById('data1').style.color='white';
    document.getElementById('data2').style.color='white';
    document.getElementById('data3').style.color='white';

    document.getElementById('contactBox').style.border='1px solid rgba(211, 211, 211, 0.375)'
}

function downloadCV(){
    window.location.assign('https://drive.google.com/uc?export=download&id=1bvue_EXKmbiiKNS94eEsBg8X6Os8ln4L')
}
function goProject(){
    window.location.href='../Projects/project.html';
}
function goBlog(){
    window.location.href="../blogs/blog.html";
}
function goAbout(){
    window.location.href="../index.html";
}
function  goContact(){
    window.location.href="../contact/contact.html";
}
