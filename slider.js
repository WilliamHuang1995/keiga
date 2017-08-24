 $( "span#volumeDown1" ).click(function() {
            l1.bootstrapSlider('setValue',l1.val()-1,true);
        });
        $( "span#volumeUp1" ).click(function() {
            l1.bootstrapSlider('setValue',l1.val()- -1,true);//LOL
        });
        $( "span#volumeDown2" ).click(function() {
            l2.bootstrapSlider('setValue',l2.val()-1,true);
        });
        $( "span#volumeUp2" ).click(function() {
            l2.bootstrapSlider('setValue',l2.val()- -1,true);//LOL
        });
        $( "span#volumeDown3" ).click(function() {
            l3.bootstrapSlider('setValue',l3.val()-1,true);
        });
        $( "span#volumeUp3" ).click(function() {
            l3.bootstrapSlider('setValue',l3.val()- -1,true);//LOL
        });
        $( "span#volumeDown4" ).click(function() {
            l4.bootstrapSlider('setValue',l4.val()-1,true);
        });
        $( "span#volumeUp4" ).click(function() {
            l4.bootstrapSlider('setValue',l4.val()- -1,true);//LOL
        });
        $( "span#volumeDown5" ).click(function() {
            l5.bootstrapSlider('setValue',l5.val()-1,true);
        });
        $( "span#volumeUp5" ).click(function() {
            l5.bootstrapSlider('setValue',l5.val()- -1,true);//LOL
        });
        $( "span#volumeDown6" ).click(function() {
            l6.bootstrapSlider('setValue',l6.val()-1,true);
        });
        $( "span#volumeUp6" ).click(function() {
            l6.bootstrapSlider('setValue',l6.val()- -1,true);//LOL
        });
        $( "span#volumeDown7" ).click(function() {
            l7.bootstrapSlider('setValue',l7.val()-1,true);
        });
        $( "span#volumeUp7" ).click(function() {
            l7.bootstrapSlider('setValue',l7.val()- -1,true);//LOL
        });
        $( "span#volumeDown8" ).click(function() {
            l8.bootstrapSlider('setValue',l8.val()-1,true);
        });
        $( "span#volumeUp8" ).click(function() {
            l8.bootstrapSlider('setValue',l8.val()- -1,true);//LOL
        });
        $( "span#volumeDown9" ).click(function() {
            l9.bootstrapSlider('setValue',l9.val()-1,true);
        });
        $( "span#volumeUp9" ).click(function() {
            l9.bootstrapSlider('setValue',l9.val()- -1,true);//LOL
        });
        $( "span#volumeDown10" ).click(function() {
            l10.bootstrapSlider('setValue',l10.val()-1,true);
        });
        $( "span#volumeUp10" ).click(function() {
            l10.bootstrapSlider('setValue',l10.val()- -1,true);//LOL
        });
        $( "span#delayUp" ).click(function() {
            delaytime.bootstrapSlider('setValue',delaytime.val()- -1,true);//LOL
        });
        $( "span#delayDown" ).click(function() {
            delaytime.bootstrapSlider('setValue',delaytime.val()-1,true);//LOL
        });
        var l1=$("#line1").bootstrapSlider({
            reversed:true
        });
        var l2=$("#line2").bootstrapSlider({
            reversed:true
        });
        var l3=$("#opticall").bootstrapSlider({
            reversed:true
        });
        var l4=$("#opticalr").bootstrapSlider({
            reversed:true
        });
        var l5=$("#mastervolume").bootstrapSlider({
            reversed:true
        });
        var l6=$("#limitation").bootstrapSlider({
            reversed:true
        });
        var l7=$("#line3").bootstrapSlider({
            reversed:true
        });
        var l8=$("#line4").bootstrapSlider({
            reversed:true
        });
        var l9=$("#dbayl").bootstrapSlider({
            reversed:true
        });
        var l10=$("#dbayr").bootstrapSlider({
            reversed:true
        });
        var gain=$("#filter-gain").bootstrapSlider({
        })
        var delaytime=$("#delaytime").bootstrapSlider({
            reversed:true
        })
        $("#volume-1").val(l1.val());
        $("#volume-2").val(l2.val());
        $("#volume-3").val(l3.val());
        $("#volume-4").val(l4.val());
        $("#volume-5").val(l5.val());
        $("#volume-6").val(l6.val());
        $("#volume-7").val(l7.val());
        $("#volume-8").val(l8.val());
        $("#volume-9").val(l9.val());
        $("#volume-10").val(l10.val());
        
        //check
        $("#delay-time").val(delaytime.val());
        $("#gain").val(gain.val());

        $("#line1").on("slide", function(slideEvt) {
            $("#volume-1").val(slideEvt.value);

        });
        $("#line2").on("slide", function(slideEvt) {
            $("#volume-2").val(slideEvt.value);

        });
        $("#opticall").on("slide", function(slideEvt) {
            $("#volume-3").val(slideEvt.value);
        });
        $("#opticalr").on("slide", function(slideEvt) {
            $("#volume-4").val(slideEvt.value);
        });
        $("#mastervolume").on("slide", function(slideEvt) {
            $("#volume-5").val(slideEvt.value);
        });
        $("#limitation").on("slide", function(slideEvt) {
            $("#volume-6").val(slideEvt.value);
        });
        $("#line3").on("slide", function(slideEvt) {
            $("#volume-7").val(slideEvt.value);
        });
        $("#line4").on("slide", function(slideEvt) {
            $("#volume-8").val(slideEvt.value);
        });
        $("#dbayl").on("slide", function(slideEvt) {
            $("#volume-9").val(slideEvt.value);
        });
        $("#dbayr").on("slide", function(slideEvt) {
            $("#volume-10").val(slideEvt.value);
        });

        //sliders on sound effect
        $("#filter-gain").on("slide", function(slideEvt) {
            $("#gain").val(slideEvt.value);
        });
        $("#delaytime").on("slide", function(slideEvt) {
            $("#delay-time").val(slideEvt.value);
        });