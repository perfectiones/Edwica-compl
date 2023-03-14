const rangeInput = document.querySelector(".range__input");
const rangeProgress = document.querySelector(".range__progress");
const rangeInfo = document.querySelector(".range__input-info");
const rangeInputP = document.querySelector(".range__input-p");
const rangeProgressP = document.querySelector(".range__progress-p");
const rangeInfoP = document.querySelector(".range__input-info-p");

const steps = document.querySelectorAll(".step-s");
const stepNumbers = document.querySelectorAll(".step-n__number");
const stepNumberCircles = document.querySelectorAll(".step-n__number_circle");
const stepGaps = document.querySelectorAll(".step-n__gap");
const form = document.querySelector(".step-s__form");
const prevBtn = document.querySelectorAll(".step-s__prev_btn");
const nextBtn = document.querySelectorAll(".step-s__next_btn");

const moduleInputs = document.querySelectorAll(".module-s__input");
const moduleBodyLong = document.querySelector(".module-s__body");
const moduleBodyShort = document.querySelector(".module-s__body-short");

const conversionBtn = document.querySelectorAll(".bacc");
const conversionBlock = document.querySelectorAll(".item-conversion");

const lastNumber = document.querySelector(".last-numberr");
const resss = document.querySelector(".item-conv__button-reset");

conversionBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    conversionBlock.forEach((block) => {
      block.classList.toggle("dis-n");
    });
  });
});

if (moduleInputs) {
  moduleInputs.forEach((item) => {
    item.oninput = function () {
      if (this.value == "yes") {
        moduleBodyShort.style.display = "none";
        moduleBodyLong.style.display = "block";
      } else {
        moduleBodyShort.style.display = "block";
        moduleBodyLong.style.display = "none";
      }
    };
  });
}

function moduleInputUpdate() {
  console.log(moduleInputs.value);
}

if (rangeInput) {
  rangeInput.oninput = function () {
    let valu = this.value - 1;
    valu = (valu / 4) * 100;
    rangeProgress.style.width = valu + "%";
    rangeInfo.value = this.value;
  };

  rangeInfo.oninput = function () {
    rangeProgress.style.width = this.value * 25 - 25 + "%";
    rangeInput.value = this.value;
  };

  $(".only-numbers").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 48 || event.charCode > 57)
    )
      return false;
  });

  $(".only-numberss").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 49 || event.charCode > 53)
    )
      return false;
  });
}

if (rangeInputP) {
  rangeInputP.oninput = function () {
    rangeProgressP.style.width = this.value + "%";
    rangeInfoP.value = this.value + "%";
  };

  rangeInfoP.oninput = function (params) {
    rangeProgressP.style.width = this.value * 1 + 1 + "%";
    rangeInputP.value = this.value;
  };

  $(".only-numbers").keypress(function (event) {
    event = event || window.event;
    if (
      event.charCode &&
      event.charCode != 0 &&
      (event.charCode < 48 || event.charCode > 57)
    )
      return false;
  });
}

function formSteps() {
  if (form) {
    form.addEventListener("submit", (e) => e.preventDefault());
  }

  var formStepIndex = 0;

  if (prevBtn.length > 0 || nextBtn.length > 0) {
    for (let i = 0; i < prevBtn.length; i++) {
      prevBtn[i].addEventListener("click", () => {
        formStepIndex--;
        updateFormSteps();
      });
    }
    for (let i = 0; i < nextBtn.length; i++) {
      nextBtn[i].addEventListener("click", () => {
        formStepIndex++;
        updateFormSteps();
      });
    }
  }

  for (let i = 0; i < steps.length; i++) {
    stepNumbers[i].addEventListener("click", () => {
      formStepIndex = i;
      updateFormSteps();
    });
  }

  function updateFormSteps() {
    steps.forEach((step) => {
      step.classList.contains("active") && step.classList.remove("active");
    });
    stepNumbers.forEach((step) => {
      step.classList.contains("active-number") &&
        step.classList.remove("active-number");
    });

    steps[formStepIndex].classList.add("active");
    stepNumbers[formStepIndex].classList.add("active-number");
    if (formStepIndex != 0) {
      for (var i = formStepIndex - 1; i >= 0; i--) {
        stepNumbers[i].classList.add("passed");
        if (stepGaps.length > 0) {
          stepGaps[i].classList.add("passed");
        }
      }
    }
    if (formStepIndex != steps.length - 1) {
      for (var i = formStepIndex + 1; i < steps.length; i++) {
        stepNumbers[i].classList.contains("passed") &&
          stepNumbers[i].classList.remove("passed");
        if (stepGaps.length > 0) {
          stepGaps[i - 1].classList.contains("passed") &&
            stepGaps[i - 1].classList.remove("passed");
        }
      }
    }
    if (prevBtn.length > 0 || nextBtn.length > 0) {
      if (formStepIndex === 0) {
        prevBtn.forEach((button) => {
          button.style.opacity = "0";
          button.style.pointerEvents = "none";
        });
      } else {
        prevBtn.forEach((button) => {
          button.style.opacity = "1";
          button.style.pointerEvents = "all";
        });
      }
      if (lastNumber) {
        if (lastNumber.classList.contains("active-number")) {
          document.body.classList.add("main-purpure");
          resss.classList.add("res-white");
        } else {
          document.body.classList.remove("main-purpure");
          resss.classList.remove("res-white");
        }
      }
      if (formStepIndex === steps.length - 1) {
        nextBtn.forEach((button) => {
          button.innerHTML = "Готово";
        });
      } else {
        nextBtn.forEach((button) => {
          button.innerHTML = "Далее";
        });
      }

      if (nextBtn[formStepIndex].innerHTML == "Готово") {
        nextBtn[formStepIndex].addEventListener("click", function () {
          form.submit();
        });
      }
    }
  }

  updateFormSteps();
}

if (document.querySelector(".step-s")) {
  formSteps();
}


