var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    var request = new XMLHttpRequest();
        request.open('GET', 'http://127.0.0.1:5500/slider.json', true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            console.log(data);
            let contador;
            for(contador=0; contador<3; contador++){
            let numeroSlider = contador+1;
            const getMessage = () => {
                return(`
                    <img src="${data[contador].imgUrl}" style="width:100%">
                    <div class="text">${data[contador].texto}</div>
                `);
            };
            document.getElementById(`slide${numeroSlider}`).innerHTML = getMessage();
        }
        } else {
            console.log("existe un error");
        }
        };
        request.onerror = function() {
            console.log("existe un error");
        };
        request.send();
}
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}