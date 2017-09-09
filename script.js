function changeEye() {
    var left = document.getElementById("leftEye")
    var right = document.getElementById("rightEye")
    left.setAttribute("color", "yellow")
    right.setAttribute("color", "yellow")
}

function spinAntenna() {
    var left = document.getElementById("antenna1")
    var right = document.getElementById("antenna2")
    left.setAttribute("color", "purple")
    right.setAttribute("color", "purple")

    var addAnimation = document.createElement("a-animation")
    addAnimation.setAttribute("attribute", "rotation")
    addAnimation.setAttribute("dur", "2000")
    addAnimation.setAttribute("fill", "fowards")
    addAnimation.setAttribute("to", "0 360 20")
    addAnimation.setAttribute("repeat", "infinte")

    var addAnimation2 = document.createElement("a-animation")
    addAnimation2.setAttribute("attribute", "rotation")
    addAnimation2.setAttribute("dur", "2000")
    addAnimation2.setAttribute("fill", "fowards")
    addAnimation2.setAttribute("to", "0 -360 -20")
    addAnimation2.setAttribute("repeat", "infinte")

    left.appendChild(addAnimation)
    right.appendChild(addAnimation2)
}

function text() {
    var t = document.getElementById("hello")
    t.setAttribute("visible", true)
}

function evil() {
    var left = document.getElementById("leftEye")
    var right = document.getElementById("rightEye")
    left.setAttribute("color", "black")
    right.setAttribute("color", "red")

    var left = document.getElementById("antenna1")
    var right = document.getElementById("antenna2")
    left.setAttribute("color", "black")
    right.setAttribute("color", "black")
    
    left.setAttribute("height","1.2")
    right.setAttribute("height","1.2")
    
    var face = document.getElementById("face")
    face.setAttribute("color", "red")
}

function sky() {
    s = document.getElementById("sky")
    s.setAttribute("src","#place")
}

function scale() {
    ent = document.getElementById("bob")
    ent.setAttribute("scale", "2 2 0")
}
