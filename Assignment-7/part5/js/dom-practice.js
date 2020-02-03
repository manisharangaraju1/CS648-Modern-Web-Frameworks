/*eslint-env browser*/

//STEP 1
function clickMe(){
    "use strict";
    window.alert("I have been clicked");
}

function onLoad() {
    
}
window.onload = function() {
    //STEP 2
    var myButton = window.document.getElementById("clickButton");
    myButton.onclick = function () {
        "use strict";
        window.alert("I have been clicked");
    }

    // //STEP 3
    var clickEventButtonListen = window.document.getElementById("clickEventButtonListener");
    clickEventButtonListen.addEventListener("click", clickMe);

    // //STEP 4
    var clickButtonListenerCallBack = window.document.getElementById("clickButtonListenerCallBack");
    clickButtonListenerCallBack.addEventListener("click", function () {
        "use strict";
        window.alert("I have been clicked");
    });

}

  // // //STEP 5
  function step5() {
    "use strict";
    var clickButtonListenerCallBackStep5 = window.document.getElementById("clickButtonListenerCallBackStep5");
    clickButtonListenerCallBackStep5.addEventListener("click", function () {
    window.alert("I have been clicked");
});

}

window.addEventListener("load", step5);
