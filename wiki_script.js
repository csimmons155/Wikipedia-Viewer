function searchTerm() {
    //clear previous results
    $(".display").html("");
    
    $(".search_section").animate(
                                 {"margin-top": 0}, 500);
    
    $.ajax({
           url: "http://en.wikipedia.org/w/api.php",
           data: {
           action: "opensearch",
           format: "json",
           search: $("#term").val()
           },
           dataType: "jsonp",
           success: function(entry) {
           for (var i = 0; i < entry[1].length; i++) {
           $(".display").append("<div class=\"searchResult\"><a href=\"" + entry[3][i] + "\"target=\"_blank\"><h3>" + entry[1][i] + "</h3></a><p class=\"resultLink\">" + entry[3][i] + "</p><p>" + entry[2][i] + "</p></div>");
           }
           }
           });
    
}

$(".randomButton").on("click", function() {
                      window.open("http://en.wikipedia.org/wiki/Special:Random");
                      });

$(".searchButton").on("click", function() {
                      searchTerm();
                      });


$("#term").keyup(function(key){
                 if(key.keyCode === 13 || key.which === 13){
                 if(document.getElementById("term").value === ""){
                 return;
                 } else {
                 searchTerm();
                 }
                 }
                 });



$(document).ready(function() {
                  $(".search_section").css("margin-top", ((window.innerHeight - $(".container-fluid").height()) * 0.35));
                  
                  });