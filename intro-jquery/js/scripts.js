$(document).ready(function() {
     $(".clickable").click(function() {
       $("#initially-showing").toggle();
       $("#initially-hidden").toggle();
     });
     $(".java").click(function() {
       $("#java-showing").toggle();
       $("#java-hidden").toggle();
       });
     $(".operators").click(function() {
       $("#operators-showing").toggle();
       $("#operators-hidden").toggle();
     });
     $(".function").click(function() {
       $("#function-showing").toggle();
       $("#function-hidden").toggle();
     });
     $(".string").click(function() {
       $("#string-showing").toggle();
       $("#string-hidden").toggle();
     });
     $(".method").click(function() {
       $("#method-showing").toggle();
       $("#method-hidden").toggle();
     });
     $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
     });

     $("button#yellow").click(function() {
       $("body").removeClass();
       $("body").addClass("yellow-background");
     });

     $("button#red").click(function() {
       $("body").removeClass();
       $("body").addClass("red-background");
     });
   });
