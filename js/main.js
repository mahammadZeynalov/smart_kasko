var isMobile = false; //initiate as false

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


var _window = $(window),
    window_height = _window.height();

if (isMobile) {
  $("body").addClass("mobile");
}

/* Form tabs begin */
$(document).on('click', '.form_tabs a', function (e) {
	var _this = $(this),
	_this_index = _this.index();
	_this.parent().find("a").removeClass("active").eq(_this_index).addClass("active");
	$(".form_item.show_me .form_inners > div").removeClass("show_me").eq(_this_index).addClass("show_me");
	return false;
});
/* Form tabs end */

/* Form tabs begin */
$(document).on('click', '.second_tabs a', function (e) {
	var _this = $(this),
	_this_index = _this.index();
	_this.parent().find("a").removeClass("active").eq(_this_index).addClass("active");
	_this.parent().next().find("> div").removeClass("show_me").eq(_this_index).addClass("show_me");
	return false;
});
/* Form tabs end */


/* Index tabs begin */
$(".four_tabs a").click(function(){
  var _this = $(this),
  _this_index = _this.index(),
  _this_url = _this.data("image"),
  _this_color = _this.data("color");
  $(".four_tabs a").removeClass("active").eq(_this_index).addClass("active");
  $(".form_item").removeClass("show_me").eq(_this_index).addClass("show_me");

  //$(".index_first").removeAttr("class").addClass("index_first").addClass(_this_color);
  $(".index_first > span em").removeClass("show_me").eq(_this_index).addClass("show_me")
  $("#header").removeAttr("class").addClass(_this_color);
  //$(".image_side img").attr("src", _this_url);
  $(".image_side > div").removeClass("show_me").eq(_this_index).addClass("show_me")
  $(".four_tabs span").css("left", (_this_index*25)+"%")
  clearInterval(lineinterval);
  _width = 0;
  lineinterval = setInterval(line_go, 50);
  return false;
});
/* Index tabs end */

/* Index first arrows begin */
$(".form_block .arrows a").click(function(){
  var _this = $(this),
  _tabs_length = $(".four_tabs a").length,
  _active_tab = $(".four_tabs a.active").index();
  if (_this.hasClass("prev")) {
    _active_tab--;
  } else {
    _active_tab++;
    if (_active_tab == _tabs_length) {_active_tab = 0}
  }
  $(".four_tabs a").eq(_active_tab).click()
  return false;
});
/* Index first arrows end */

/* Index first autoslide begin */

if (isMobile) {} else {

  _width = 0;
  lineinterval = setInterval(line_go, 50);

  function line_go() {
      _width++;
      $(".form_block .line span").css("width", _width+"%");
      if (_width == 100) {
        _width = 0;
        $(".form_block .line span").css("width", 0+"%");
      }
  }


  interval = setInterval(doStuff, 5000); 
  function doStuff() {
    _active_tab = $(".four_tabs a.active").index();
    _active_tab++
    if (_active_tab == 4) {_active_tab = 0}
    $(".four_tabs a").eq(_active_tab).click();
    clearInterval(lineinterval);
    lineinterval = setInterval(line_go, 50);


  }

  $(document).on("mouseover", ".search_side, .four_tabs", function (e) {
    clearInterval(interval);
    clearInterval(lineinterval);
  }).on("mouseleave", ".search_side, .four_tabs", function (e) {
    interval = setInterval(doStuff, 5000); 
    lineinterval = setInterval(line_go, 50);
  });

}
/* Index first autoslide end */

/* Plus minus begin */
$(document).on("click", ".plus_minus a", function (e) {
  var _this = $(this),
  _this_item = _this.parents(".plus_minus"),
  _input_val = _this_item.find("strong").text();
  if (_this.hasClass("minus")) {
    if (_input_val == 0) {

    } else {
      _input_val--;
    }
  } else {
    _input_val++;
  }
  _input_val = _this_item.find("strong").text(_input_val);
  return false;
});
/* Plus minus end */

/* Calendar begin */
  if ($(".datetimepicker").length) {
      $(".datetimepicker").datetimepicker({
           timepicker:false,
          format:'d.m.Y'
      });        
  }
/* Calendar end */

/* Index slider begin */
if ($(".single_carousel").length) {
  $(".single_carousel").imagesLoaded(function(){
    $(".single_carousel").css("width", (_window.width() - $(".carousel_block h2").offset().left) + "px");
    $(".single_carousel").flickity({
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false
    });
  });    
}
/* Index slider end */

/* FAQ accordion begin */
$(".faq_list h3 a").click(function(){
  var _this = $(this),
  _this_article = _this.parents("article");
  if (_this_article.hasClass("active")) {
    _this_article.find(".inset").removeAttr("style");
  } else {
    _this_article.find(".inset").css("height", (_this_article.find(".inset > div").height() + 20)+"px")
  }
  _this_article.toggleClass("show_me");
  _this_article.toggleClass("active");
  return false;
});
/* FAQ accordion end */

/* Package select begin */
$(document).on('click', '.select_package article', function (e) {
  var _this = $(this);
  _this.toggleClass("active")
  _this.prev().removeClass("active");
  _this.next().removeClass("active");
  _this.prev().prev().removeClass("active");
  _this.next().next().removeClass("active");
});
/* Package select end */

/* Change link begin */
$(document).on('click', '.change_link a', function (e) {
  var _this = $(this);
  if (_this.hasClass("active")) {
    _this.removeClass("active");
    $(".form_block .input input").attr("disabled", true);
    // Price change emulation   
    $(".select_package").addClass("preload");
    setTimeout(function(){
      $(".select_package").removeClass("preload");
    }, 900);
  } else {
    _this.addClass("active");
    $(".form_block .input input").removeAttr("disabled").focus();    
  }
  return false;
});
/* Change link end */


/* Video modal begin */
$(document).on("click", ".call_video", function () {
    var _this = $(this),
    _this_video = _this.data("video");

    if (isMobile) {
      window.open("https://www.youtube.com/watch?v="+_this_video)
    } else {
      $("body").append("<div class='video_darkness'></div><div class='video_modal'><div class='video'><iframe width='560' height='315' src='https://www.youtube.com/embed/"+_this_video+"' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><a href='javascript:void(0)' class='close'></a></div>")
      setTimeout(function(){
          $(".video_darkness").addClass("show_me");
      }, 150);
      setTimeout(function(){
          $(".video_modal").addClass("show_me");

      }, 450);      
    }

    return false;
});

$(document).on("click", ".video_modal .close", function () {
    setTimeout(function(){
        $(".video_modal").removeClass("show_me");
    }, 150);
    setTimeout(function(){
        $(".video_darkness").removeClass("show_me");
    }, 450);
    setTimeout(function(){
        $(".video_modal, .video_darkness").remove();

    }, 750);
    return false;
});
/* Video modal end */


/* Input mask begin */
  if ($(".mask_phone").length > 0) {
      $(".mask_phone").mask("(00) 000 00 00");
  }
  if ($(".mask_phone_short").length > 0) {
      $(".mask_phone_short").mask("000 00 00");
  }

  if ($(".mask_registration").length > 0) {
      $(".mask_registration").mask("00-aa-000");
  }

  if ($(".mask_letter").length > 0) {
      $(document).on('keyup blur', '.mask_letter', function (e) {
          var node = $(this);
          node.val(node.val().replace(/[^a-zA-Z ]/g, ''));
      })
  }

  if ($(".only_number").length > 0) {
      $(document).on('keyup blur', '.only_number', function (e) {
          var node = $(this);
          node.val(node.val().replace(/[^0-9]/g, ''));
      })
  }
/* Input mask end */



/* Mobile toggler begin */
$(document).on('click', 'a.toggler', function (e) {
    var _this = $(this);
    if (_this.hasClass("animated")) {
    } else {
        if (_this.hasClass("active")) {
            _this.removeClass("active_last");
            $("body").removeClass("overflow");
            $("aside#aside_nav").removeClass("show_me");


            $(".darkness").removeClass("show_me");
            setTimeout(function () {
                _this.removeClass("active_second");
            }, 300);
            setTimeout(function () {
                _this.removeClass("active");
            }, 600);
        } else {
            _this.addClass("active");
            $("body").addClass("overflow");
            $("aside#aside_nav").addClass("show_me");

            $(".darkness").addClass("show_me");

            setTimeout(function () {
                _this.addClass("active_second");
            }, 300);
            setTimeout(function () {
                _this.addClass("active_last");
            }, 600);
        }
        _this.addClass("animated");
        setTimeout(function () {
            _this.removeClass("animated");
        }, 900);
    }
    return false;
});
/* Mobile toggler end */

/* Four tabs begin */
$(".four_tabs select").change(function(){
    var _this = $(this),
    _this_index = _this.find("option:selected").index();
    $(".four_tabs div a").eq(_this_index).click();
});
/* Four tabs end */


/* Question begin */
$(document).on('click', '.question_side .link a', function (e) {
  $("html, body").animate({ scrollTop: $(".index_contacts").offset().top }, 1000);
  return false;
});
/* Question begin */


/* Three block mobile begin */
if ($(".three_block").length && _window.width() < 1025) {
  $(".three_block").imagesLoaded(function(){
    //$(".three_block").css("width", (_window.width() - $(".carousel_block h2").offset().left) + "px");
    $(".three_block").flickity({
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false
    });
  });    
}
/* Three block mobile end */


/* Inner Tabs begin */
$(document).on('click', '.inner_first .tabs a', function (e) {
  var _this = $(this),
  _this_index = _this.parent().index();
  $(".inner_first .tabs a").removeClass("active");
  _this.addClass("active");
  $(".inner_sides > div").removeClass("show_me").eq(_this_index).addClass("show_me")
  return false;
});
/* Inner Tabs end */


/* Content Tabs begin */
$(document).on('click', '.content_text .tabs a', function (e) {
  var _this = $(this),
  _this_index = _this.parent().index();
  $(".content_text .tabs a").removeClass("active");
  _this.addClass("active");
  $(".inners > div").removeClass("show_me").eq(_this_index).addClass("show_me")
  return false;
});
/* Content Tabs end */

/* Fixed aside begin */
$(document).scroll(function(){
  if ($(".aside_block").length) {
    var top_pos = document.documentElement.scrollTop||document.body.scrollTop,
    fly_top = $(".content_text:visible").offset().top;
    console.log(top_pos-fly_top)

    if (top_pos > fly_top - 20) {
        $(".aside_block").addClass("fix_me").css("right", ($(".content_text:visible").offset().left)+"px")
    } else {
        $(".aside_block").removeClass("fix_me").removeAttr("style")
    }
  }
});
/* Fixed aside end */


/* Packages modal begin */
$(document).on("click", ".select_package .link a", function () {
    var _this = $(this),
    _this_index = _this.parents("article").index();
    $(".packages_modal .tabs li").eq(_this_index).find("a").click();
    setTimeout(function(){
        $(".darkness").addClass("show_me");
    }, 150);
    setTimeout(function(){
        $(".packages_modal").addClass("show_me");
    }, 450);      
    return false;
});

$(document).on("click", ".packages_modal .close", function () {
    setTimeout(function(){
        $(".packages_modal").removeClass("show_me");
    }, 150);
    setTimeout(function(){
        $(".darkness").removeClass("show_me");
    }, 450);
    return false;
});
/* Packages modal end */

/* Modal Tabs begin */
$(document).on('click', '.packages_modal .tabs a', function (e) {
  var _this = $(this),
  _this_index = _this.parent().index();
  $(".packages_modal .tabs li").removeClass("active");
  _this.parent().addClass("active");
  $(".packages_modal .inner > div").removeClass("show_me").eq(_this_index).addClass("show_me")
  $(".packages_modal select option").removeAttr("selected").eq(_this_index).attr("selected", "true")
  return false;
});

$(".packages_modal select").change(function(){
    var _this = $(this),
    _this_index = _this.find("option:selected").index();
    $(".packages_modal .tabs a").eq(_this_index).click();
});
/* Modal Tabs end */

/* Another select begin */
$(".two_select  select").change(function(){
  var _this = $(this),
  _this_index = _this.find("option:selected").index();

  if (_this.find("option:selected").hasClass("another")) {
    _this.next().addClass("show_me");
    _this.next().focus();
  } else {
    _this.next().removeClass("show_me");

  }
});
/* Another select end */


/* Pack 4 select begin */
$(".form_block .input select").change(function(){
    var _this = $(this);
    if (_this.find("option:selected").hasClass("pack_4")) {
      _this.parents(".form_inners").find(".buttons.pack_4").removeClass("hide_me").prev().addClass("hide_me");
    } else {
      _this.parents(".form_inners").find(".buttons.pack_4").addClass("hide_me").prev().removeClass("hide_me");

    }
});
/* Pack 4 select end */

/* Another upload begin */
$(".form_block .input select").change(function(){
    var _this = $(this);
    if (_this.find("option.another_upload").length) {
      if (_this.find("option:selected").hasClass("another_upload")) {
        _this.parents(".form_block").find(".upload_block").addClass("show_me");
        _this.parents(".form_block").find(".upload_block").next().addClass("hide_me");
      } else {
        _this.parents(".form_block").find(".upload_block").removeClass("show_me");
        _this.parents(".form_block").find(".upload_block").next().removeClass("hide_me");
      }
    }

});
/* Another upload end */
