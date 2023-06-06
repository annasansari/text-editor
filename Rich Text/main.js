document.getElementById("textPaste").value = "Anas Ansari"

function rightAlign(){
    var text = document.getElementById("textPaste")
    text.style.textAlign = "right"
}
function centerAlign(){
    var text = document.getElementById("textPaste")
    text.style.textAlign = "center"
}
function leftAlign(){
    var text = document.getElementById("textPaste")
    text.style.textAlign = "left"
}

function bold(){
    var text = document.getElementById("textPaste")
   if(text.style.fontWeight === "bold"){
    text.style.fontWeight = "normal"
   }
   else{
    text.style.fontWeight = "bold"
   }
}
function italic(){
    var text = document.getElementById("textPaste")
   if(text.style.fontWeight === "italic"){
    text.style.fontStyle = "normal"
   }
   else{
    text.style.fontStyle = "italic"
   }
}
function ulText(){
    var text = document.getElementById("textPaste")
   if(text.style.fontStyle === "underline"){
    text.style.textDecoration = "normal"
   }
   else{
    text.style.textDecoration = "underline"
   }
}

function colors(){
   var mixColors = document.getElementById("textPaste")
  mixColors.style.color = colors
}

function fontSize10(){
    var text = document.getElementById("textPaste")
    // console.log(text)
    text.style.fontSize = "10px"
    }
function fontSize20(){
    var text = document.getElementById("textPaste")
    text.style.fontSize = "20px"
    }
function fontSize30(){
var text = document.getElementById("textPaste")
text.style.fontSize = "30px"
}
function fontSize40(){
var text = document.getElementById("textPaste")
text.style.fontSize = "40px"
}
function fontSize50(){
var text = document.getElementById("textPaste")
text.style.fontSize = "50px"
}

function cursive(){
   var fontFamily = document.getElementById("textPaste")
fontFamily.style.fontFamily = "cursive"
}
function tahoma(){
   var fontFamily = document.getElementById("textPaste")
fontFamily.style.fontFamily = "tahoma"
}
function verdana(){
   var fontFamily = document.getElementById("textPaste")
fontFamily.style.fontFamily = "verdana"
}
function sansSerif(){
   var fontFamily = document.getElementById("textPaste")
fontFamily.style.fontFamily = "sans-serif"
}
function monospace(){
   var fontFamily = document.getElementById("textPaste")
fontFamily.style.fontFamily = "monospace"
}