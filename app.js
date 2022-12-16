var preLoader=document.getElementById('preLoaderCont');
function preloaderF(){
    
    preLoader.style.display='none';
    
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
    document.getElementById('what2').style.display='block';
    document.getElementById('what2').style.color='black';
    document.getElementById('what').style.display='none';
    document.getElementById('AB').style.color='black';
    document.getElementById('aboutMe').style.color='black';
    document.getElementById('details').style.color='black';
    document.getElementById('what').style.color='black';
    document.getElementById('Design1').style.color='black';
    document.getElementById('Design2').style.color='black';
    document.getElementById('Design3').style.color='black';
    document.getElementById('Design4').style.color='black';
    document.getElementById('Design5').style.color='black';
    document.getElementById('Design6').style.color='black';
    document.getElementById('Design11').style.color='black';
    document.getElementById('Design22').style.color='black';
    document.getElementById('Design33').style.color='black';
    document.getElementById('Design44').style.color='black';
    document.getElementById('Design55').style.color='black';
    document.getElementById('Design66').style.color='black';
    document.getElementById('resumeWhite').style.backgroundColor='white';
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
    document.getElementById('resumeWhite').style.backgroundColor='white';
    document.getElementById('resumeWhite').style.color='black';
    document.getElementById('resumeWhiteA').style.color='black';
    
    
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
    document.getElementById('what2').style.display='none';
    document.getElementById('AB').style.color='white';
    document.getElementById('aboutMe').style.color='white';
    document.getElementById('details').style.color='white';
    document.getElementById('what').style.color='white';
    document.getElementById('Design1').style.color='white';
    document.getElementById('Design2').style.color='white';
    document.getElementById('Design3').style.color='white';
    document.getElementById('Design4').style.color='white';
    document.getElementById('Design5').style.color='white';
    document.getElementById('Design6').style.color='white';
    document.getElementById('Design11').style.color='white';
    document.getElementById('Design22').style.color='white';
    document.getElementById('Design33').style.color='white';
    document.getElementById('Design44').style.color='white';
    document.getElementById('Design55').style.color='white';
    document.getElementById('Design66').style.color='white';
    document.getElementById('resumeWhite').style.backgroundColor='black';
    document.getElementById('resumeWhite').style.color='white';
    document.getElementById('workWhite').style.backgroundColor='black';
    document.getElementById('workWhite').style.color='white';
    document.getElementById('workWhiteA').style.color='white';
    document.getElementById('blogsWhite').style.backgroundColor='black';
    document.getElementById('blogsWhite').style.color='white';
    document.getElementById('ContactWhite').style.backgroundColor='black';
    document.getElementById('ContactWhite').style.color='white';
    document.getElementById('ContactWhiteA').style.color='white';
    document.getElementById('FrontEnd').style.backgroundColor='black';
    document.getElementById('FrontEnd').style.color='white';
    document.getElementById('resumeWhite').style.backgroundColor='black';
    document.getElementById('resumeWhiteA').style.color='white';
    document.getElementById('resumeWhite').style.color='white';
    
   
}
function downloadCV(){
    window.location.assign('https://drive.google.com/uc?export=download&id=1bvue_EXKmbiiKNS94eEsBg8X6Os8ln4L')
}
function goProject(){
    window.location.href='./Projects/project.html';
}
function goContact(){
    window.location.href="./contact/contact.html";
}
function goContact(){
    window.location.href="./contact/contact.html";
}
function goBlogs(){
    window.location.href="./blogs/blog.html";
}