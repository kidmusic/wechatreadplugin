$(document).ready(function(){
    const imageG = {eye : chrome.runtime.getURL("eyemode.png")};
    //添加护眼模式按钮
    $(".readerControls").prepend("<a id=\"eyemode\" title=\"护眼模式\" class=\"readerControls_item catalog\"><img id=\"eyeicon\" src=\"${imageG.eyemode}\" alt=\"护眼模式\"></img></a>");
    $("#eyeicon").attr("src", imageG.eye);
});