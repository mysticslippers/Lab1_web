function changeGIF(hit){
    const gif = document.getElementById("gif-block-id");
    if(hit === "Промах!"){
        gif.style.background = "url(\"../public/shelby.gif\") no-repeat scroll 8% 40%"
    } else {
        gif.style.background = "url(\"../public/another.gif\") no-repeat scroll 8% 40%"
    }
}