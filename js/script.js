var string = "This typing text animation will teach you how to create the basic animations in Javascript using HTML & CSS. You can place your string data here and see the magic happen!!!";

var strArray = string.split("");

function animate(){
        if(strArray.length > 0){
                document.getElementById("display").innerHTML += strArray.shift();
        }

        else {

                return;

        }

        setTimeout(animate, 50);
}

animate();
