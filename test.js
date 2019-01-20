(function(){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
  // var mem_li_len = $("#d-members li").length;
  // for(var i = 0;i<mem_li_len;i++) {
  //   console.log($("#d-members li")[i].find("img").attr("src"));
  // }
  $('#d-members li').each(function(i)
  {
     if($(this).find("img").attr("src").length > 0) {
       console.log($(this).find("img").attr("src").length);
     } else {
       var name = $(this).find(".profile-name").text();
       var intials = $(this).find(".profile-name").text().charAt(0);
       // console.log(intials);
       $(this).find(".mem-img").empty();
       $(this).find(".mem-img").append("<div class='profileImage my-auto'>" + intials + "</div>");
     }
  });
  $("#noaction").click(function(e){
    e.stopPropagation();
  });
})();
