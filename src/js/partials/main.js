var timeOut = 1;
function goUp() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -80);
    timeOut = setTimeout("goUp()", 20);
  } else clearTimeout(timeOut);
}

function show_hide_password(target) {
  var input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

$(function () {
  $('input[name="tabRole"]').click(function () {
    $(this).tab("show");
    $(this).removeClass("active");
  });
  $("#toggle-menu").on("click", function () {
    let th = $(this);
    if (th.hasClass("collapsed")) {
      th.closest("body").css("overflow-y", "hidden");
    } else {
      th.closest("body").css("overflow-y", "scroll");
    }
  });
  $("#filter_mobile").on("click", function () {
    let th = $(this);
    $("#collapseFilter").addClass("filter_wrapper__mobile");
    return false;
  });
  $("#filter_close_mobile").on("click", function () {
    let th = $(this);
    $("#collapseFilter").removeClass("filter_wrapper__mobile");
    return false;
  });
  $("#filter_desctop").on("click", function () {
    if ($(this).hasClass("collapsed")) $(this).text("Показать фильтр");
    else $(this).text("Скрыть фильтр");
  });
  $("nav#top-menu > ul")
    .after("<nav id='mobile-menu'>")
    .clone()
    .appendTo("#mobile-menu");
  $("nav#mobile-menu").mmenu(
    {
      extensions: ["fullscreen", "border-none"],
      navbar: {
        title: "Категории",
      },
      navbars: [
        {
          position: "top",
          content: ["close", "title", "prev"],
        },
      ],
      setSelected: true,
    },
    {
      language: "ru",
    }
  );

  $(document).ready(function () {
    $("select:not(#coursesearch-sort)").select2({
      theme: "krajee-bs4",
    });
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
        1570: { items: 4 },
      },
    });
  });
});

$("#homework-upload-button").on("click", () => {
  $("#homework-upload-input").trigger("click");
});

$("#homework-upload-input").on("change", function () {
  $("#homework-uploaded-file").text($(this).prop("files")[0].name);
  $("#homework-input-clear-button").removeClass("d-none");
});

$("#homework-input-clear-button").on("click", function () {
  $("#homework-upload-input").val("");
  $("#homework-uploaded-file").text("");
  $(this).addClass("d-none");
});
$(document).ready(function () {
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
  });
  $(".partners-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      200: { items: 2 },
      300: { items: 2, stagePadding: 10 },
      400: { items: 2, stagePadding: 70 },
      500: { items: 2, stagePadding: 50 },
      550: { items: 2, stagePadding: 70 },
      600: { items: 2, stagePadding: 50 },
      768: { items: 3, stagePadding: 50 },
      992: { items: 4 },
      1200: { items: 6 },
      1570: { items: 6 },
    },
  });
});

$(".add-file").on("change", function (e) {
  $(this).prev(".fake-file-name").html(e.target.files[0].name);
});

$(document).ready(function () {
  $(".benefits__item_prev").click(function (event) {
    if ($(".benefits__list").hasClass("spollers")) {
      $(".benefits__item_prev").not($(this)).removeClass("active");
      $(".benefits__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".module__item_title").click(function (event) {
    if ($(".module__list").hasClass("spollers")) {
      $(".module__item_title").not($(this)).removeClass("active");
      $(".module__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-ff__item_title").click(function (event) {
    if ($(".ltc-ff__list").hasClass("spollers")) {
      $(".ltc-ff__item_title").not($(this)).removeClass("active");
      $(".ltc-ff__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-ff__item_titlee").click(function (event) {
    if ($(".ltc-ff__list").hasClass("spollers")) {
      $(".ltc-ff__item_titlee").not($(this)).removeClass("active");
      $(".ltc-f__item").not($(this).parent()).removeClass("active");
      $(".ltc-ff__item_text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".ltc-f__item_title").click(function (event) {
    if ($(".ltc-f__list").hasClass("spollers")) {
      $(".ltc-f__item_title").not($(this)).removeClass("active");
      $(".ltc-f__item").not($(this).parent()).removeClass("active");
      $(".ltc-f__item_text").not($(this).next()).slideUp(300);
    }
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active").next().slideToggle(300);
  });
});



$(document).ready(function () {
  if ($(window).width() < 992) {
    $(".footer__title").click(function (event) {
      $(".footer__title").not($(this)).removeClass("active");
      $(".block_item__list").not($(this).next()).slideUp(400);
      $(this).toggleClass("active").next().slideToggle(400);
    });
  }
});

$(document).ready(function () {
  $(".js-owl-3").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
  $(".js-owl-know").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2, margin: 30 },
      1200: { items: 2, margin: 40, dots: false, nav: true },
      1600: { items: 2, margin: 60, dots: false, nav: true },
    },
  });
});
