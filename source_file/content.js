console.log("Saffron Coders new!")

let paragraphs = document.getElementsByTagName("p")
for(elt of paragraphs){
    elt.style['background-color'] = "pink";
}


let videoFiles = document.getElementsByTagName('video');



window.setInterval(function(){
    for(let i=0; i<videoFiles.length; i++){
        console.log(videoFiles[i].src);
    }
}, 5000);
