$ (document).ready(function(){
  
  const flavors = ["vanilla", "butter pecan", "cheesecake", "chocolate"]
  flavors.forEach(function(flavor) {
    $("body").append("<p>" + flavor + "</p>");
  
  });
});


