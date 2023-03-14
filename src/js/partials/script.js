var readMore = document.querySelectorAll(".readMore")
var mainText = document.querySelectorAll(".item-body__text")
var points = document.querySelectorAll(".points-content__title")
var text = document.querySelectorAll(".points-content__text")
var images = document.querySelectorAll(".points-main__image")
var mainpage = document.querySelectorAll(".main-page")

var textarea = document.getElementById("message-to-send")

const showHideButton = document.querySelector(".button__hide-show")
const showHideText = document.querySelector(".text__hide-show")
const showHideBlock = document.querySelector(".b-hide-show")

const instrument = document.querySelectorAll(".ltc-instr__item")
const instrumentf = document.querySelectorAll(".ltc-instr__itemf")
const instrumentImage = document.querySelectorAll(".ltc-instr__image")
const instrumentImagee = document.querySelectorAll(".ltc-instr__imagee")
const openn = document.getElementById("open")

const functionalItem = document.querySelectorAll(".ltc-ff__item")
const functional = document.querySelectorAll(".ltc-ff__item_title")
const functional2 = document.querySelectorAll(".ltc-ff__item_titlee")
const funImageee = document.querySelectorAll(".tr__im")
const funMainImageee = document.querySelector(".tr__im.trim-main")
const funImage = document.querySelectorAll(".ltc-ff__img-t")
const funMainImage = document.querySelector(".ltc-ff__img")

const progressBar = document.querySelectorAll("#profor-progress")
const progressFake = document.querySelectorAll(".progress-fake__complete")

const priorNavBtn = document.querySelectorAll(".preor-b__nav_item")
const priorItem = document.querySelectorAll(".preor-b__content_item")

if (priorNavBtn) {
  for (let i = 0; i < priorNavBtn.length; i++) {
    priorNavBtn[i].addEventListener("click", function (e) {
      priorNavBtn.forEach((e) => {
        e.classList.remove("active")
      })
      priorItem.forEach((e) => {
        e.classList.remove("active")
      })
      priorNavBtn[i].classList.add("active")
      priorItem[i].classList.add("active")
    })
  }
}

if (progressBar.length != 0) {
  for (let i = 0; i < progressBar.length; i++) {
    progressFake[i].style.width =
      (progressBar[i].value * 100) / progressBar[i].max + "%"
  }
}

if (functional) {
  for (let i = 0; i < functional.length; i++) {
    functionalItem[i].addEventListener("click", function (e) {
      if (functional[i].classList.contains("active")) {
        funImage.forEach((e) => {
          e.classList.remove("_active")
        })
        funImage[i].classList.add("_active")
        funMainImage.classList.remove("_active")
      } else {
        funImage.forEach((e) => {
          e.classList.remove("_active")
        })
        funImage[i].classList.remove("_active")
        funMainImage.classList.add("_active")
      }
    })
  }
}

if (functional2) {
  for (let i = 0; i < functional2.length; i++) {
    functional2[i].addEventListener("click", function (e) {
      if (funImageee[i].classList.contains("active")) {
        funImageee.forEach((e) => {
          e.classList.remove("active")
        })
        funMainImageee.classList.add("active")
      } else {
        funImageee.forEach((e) => {
          e.classList.remove("active")
        })
        funImageee[i].classList.add("active")
      }
    })
  }
}

function isEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show")
    }
  })
}

let optionss = {
  threshold: [0.5],
}

let obs = new IntersectionObserver(isEntry, optionss)
const hovImages = document.querySelector(".img__list")
if (hovImages) obs.observe(hovImages)

function ifOpen() {
  instrument.forEach((instr) => {
    if (!instr.classList.contains("ssshow")) {
      openn.classList.add("opennn")
    }
  })
}

if (instrument) {
  for (let i = 0; i < instrument.length; i++) {
    instrument[i].addEventListener("mouseover", function (e) {
      // this.classList.add("active");
      instrument[i].classList.add("sssh")
      instrumentImage[i].style.left = "0"
      instrumentImage[i].classList.add("ssshow")
      openn.classList.remove("opennn")
    })
    instrument[i].addEventListener("mouseout", function (e) {
      // this.classList.remove("active");
      instrument[i].classList.remove("sssh")
      instrumentImage[i].style.left = "-100vw"
      instrumentImage[i].classList.remove("ssshow")
      ifOpen()
    })
  }
}

if (instrumentf) {
  for (let i = 0; i < instrumentf.length; i++) {
    instrumentf[i].addEventListener("mouseover", function (e) {
      instrumentImagee.forEach((e) => {
        e.classList.remove("open")
      })
      instrumentf[i].classList.add("sssh")
      instrumentImagee[i].classList.add("open")
    })
    instrumentf[i].addEventListener("mouseout", function (e) {
      instrumentImagee.forEach((e) => {
        e.classList.remove("open")
      })
      instrumentImagee[0].classList.add("open")
      instrumentf[i].classList.remove("sssh")
    })
  }
}

console.log("hello")

function autosize() {
  var el = this
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0"
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = "height:" + el.scrollHeight + "px"
    el.scrollTop = el.scrollHeight
  }, 0)
}

if (textarea) {
  textarea.addEventListener("input", autosize)
}

if (showHideButton) {
  showHideButton.addEventListener("click", function (e) {
    this.classList.toggle("to-hide")
    if (this.classList.contains("to-hide")) {
      showHideText.innerHTML = "Свернуть"
      showHideBlock.style.display = "block"
    } else {
      showHideText.innerHTML = "Подробнее о преподавателе"
      showHideBlock.style.display = "none"
    }
  })
}

if (points.length != 0) {
  var current = 0
  let timeId = setInterval(function () {
    points[current].classList.remove("_active")
    text[current].classList.remove("_active")
    images[current].classList.remove("_active")
    current++
    if (current >= points.length) current = 0
    points[current].classList.add("_active")
    text[current].classList.add("_active")
    images[current].classList.add("_active")
  }, 2000)
}

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", function (e) {
    mainText[i].classList.toggle("more")
    if (readMore[i].innerHTML === "Читать целиком") {
      readMore[i].innerHTML = "Скрыть"
    } else {
      readMore[i].innerHTML = "Читать целиком"
    }
  })
}

if ($(".radial-progress")) {
  $(".radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style")
  })

  $(window)
    .scroll(function () {
      $(".radial-progress").each(function (index, value) {
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          percent = $(value).data("percentage")
          radius = $(this).find($("circle.complete")).attr("r")
          circumference = 2 * Math.PI * radius
          strokeDashOffset = circumference - (percent * circumference) / 100
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250)
        }
      })
    })
    .trigger("scroll")
}

// tippy

tippy("#tippy-point-1", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-2", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-3", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-4", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})
tippy("#tippy-point-5", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
})

$(document).ready(function () {
  $("#slider_price, #slider_duration").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
  })
})

//========================================================================================================================================================
const mainPage = document.querySelector('.main-page');
if (mainPage) {
  const chart__place = document
    .getElementById("chart__user-place")
    .getContext("2d")
  const myChart__place = new Chart(chart__place, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [23, 22, 9, 7, 6, 5, 5, 4, 19],
          backgroundColor: [
            "#71C97A",
            "#FF604B",
            "#4B93FF",
            "#EDD717",
            "#ED9717",
            "#B5ED17",
            "#6C8F07",
            "#2A078F",
            "#2A078F",
          ],
          borderColor: ["#FFFFFF"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        tooltip: {
          enabled: false,
          yAlign: "bottom",
          displayColors: false,
          
        },
        legend: {
          display: false,
        },
      },
      onAnimationComplete: function () {
        var ctx = this.chart.ctx
        ctx.font = this.scale.font
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"

        this.datasets.forEach(function (dataset) {
          dataset.points.forEach(function (points) {
            ctx.fillText(points.value, points.x, points.y - 10)
          })
        })
      },
    },
  })
} 
