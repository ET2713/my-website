function changeStyle(style){style
    document.getElementById('pagestyle').setAttribute('href',style);
    localStorage.setItem("style", style);
}

window.onload = function(){
    if(localStorage.getItem("style") == null){
        document.setAttribute('href',"style.css");
    }else{
        changeStyle(localStorage.getItem("style"));
    }
    

    // TODO: Make the text box color persist even when someone refreshes the page
}