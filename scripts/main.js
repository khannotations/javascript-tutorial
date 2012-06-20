// Made with jQuery!

$(document).ready(function() {

  $(".page").hide();        // Hide all elements with the class 'page'
  var curr_page = 1;        // Set the variable curr_page (current page) to 1
  $("#"+curr_page).show();  // Some slick syntax: show the element with id stored in curr_page (in this case, 1)
  // Add the class 'selected' to the element that has class 'page-nav' and attribute target equal to 1
  // for example: <div class="page-nav" target="1"></div> would apply.
  $(".page-nav[target=1]").addClass("selected");
  // Hide the element with id "prev"
  $("#prev").hide();

  // This next line means 'run this function when the #next element is clicked'
  $("#next").click(function() {
    // If on the last page, do nothing
    if(curr_page === 8)
      return;
    // The curr_page function is defined below
    curr_page = change_page(curr_page, curr_page+1);
  });

  $("#prev").click(function() {
    if(curr_page === 1)     // If on the first page, do nothing
      return;
    curr_page = change_page(curr_page, curr_page-1);

  });

  $(".page-nav").click(function() {
    // Get the 'target' attribute. The parseInt function turns a string into an integer type.
    var target = parseInt($(this).attr("target"));
    curr_page = change_page(curr_page, target);

  });

  change_page = function(curr_page, new_page) {
    // If going to the first page, hide the "prev" button
    if(new_page === 1) {
      $("#prev").hide();
      $("#fake_prev").show();
    }
    // Otherwise show it
    else {
      $("#fake_prev").hide();
      $("#prev").show();
    }
    // If going to page 8 (the last page), hide the "next" button
    if(new_page === 8) {
      $("#next").hide();
    }
    // Otherwise show it
    else {
      $("#next").show();
    }

    $(".page-nav.selected").removeClass("selected");
    // Fade out current page
    $("#"+curr_page).fadeOut(100, function() {
      // Show the next page
      $("#"+new_page).fadeIn(100);
      // Add the 'selected' class to the correct box in the nav bar
      $(".page-nav[target="+new_page+"]").addClass("selected");
      
    });
    return new_page;
  };
});

