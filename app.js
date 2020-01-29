$(document).ready(function(){
    //添加护眼模式按钮
    $(".readerControls").prepend("<a id=\"eyemode\" title=\"护眼模式\" class=\"readerControls_item eyemode\"><span class=\"icon\"></span></a>");

    $(".eyemode").click(function () {
        $("body").toggleClass("eyemode");
    });
});