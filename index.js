window.onload = function () {
    var num = document.querySelector(".num");
    num.innerHTML = (Math.floor(Math.random()+1 * 13));

    var palo = document.querySelectorAll(".cardType")
    var randomPalo = cardType();
    palo.forEach(function (element) {
    element.innerHTML = randomPalo;
    if (randomPalo == "&hearts;" || randomPalo === "&diams;") {
        element.style.color = "red";
    }
    
    });
    
    /*var palo = document.querySelectorAll(".cardType");
    var randomPalo = cardType();
    palo[0].innerHTML = randomPalo;
    palo[1].innerHTML = randomPalo; */
};

function cardType(){
        var result = (Math.floor(Math.random() * 4))
            switch(result) {
            case 0:
                return result = "&spades;"
                break;
            case 1:
                return result = "&clubs;"
                break;
            case 2:
                return result = "&hearts;"
                break;
            default:
                return result = "&diams;"
            }
    }