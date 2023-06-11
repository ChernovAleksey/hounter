document
  .querySelector(".navigation__main--button-prop")
  .addEventListener("click", (event) => {
    if (
      document
        .querySelector(".navigation__main--button-prop-menu")
        .classList.contains("hidden")
    ) {
      document
        .querySelector(".navigation__main--button-prop-menu")
        .classList.remove("hidden");
    } else {
      document
        .querySelector(".navigation__main--button-prop-menu")
        .classList.add("hidden");
    }
  });

document
  .querySelector(".navigation__main--button-prop")
  .addEventListener("mouseleave", (event) => {
    document
      .querySelector(".navigation__main--button-prop-menu")
      .classList.add("hidden");
  });

const imagesHeroArray = [
  "./dist/images/hero/0.png",
  "./dist/images/hero/1.png",
  "./dist/images/hero/2.png",
];
const arrayToDisplay = [];
let displayString = "";
const display = () => {
  document.querySelector(".header__picture--slider").innerHTML = "";
  arrayToDisplay.length = 0;
  imagesHeroArray.forEach((item) => {
    arrayToDisplay.push(
      `<div class="hiroslideritem"><img src="${item}" alt=""></div>`
    );
  });
  displayString = arrayToDisplay.join("");
  document
    .querySelector(".header__picture--slider")
    .insertAdjacentHTML("afterBegin", displayString);
};
display();
setInterval(() => {
  imagesHeroArray.unshift(imagesHeroArray[2]);
  imagesHeroArray.pop(imagesHeroArray[2]);
  display();
}, 3000);
const inputAlarmer = (alarmtext) => {
  document.querySelector(".inputalarmer").classList.remove("hidden");
  document.querySelector(".inputalarmer__text").innerHTML = alarmtext;
  document
    .querySelector(".inputalarmer__close")
    .addEventListener("click", (event) => {
      document.querySelector(".inputalarmer__text").innerHTML = "";
      document.querySelector(".inputalarmer").classList.add("hidden");
    });
};
document
  .querySelector(".header__hero--location-input")
  .addEventListener("focus", (event) => {
    document.querySelector(".header__hero--location-input").value = "";
  });

document
  .querySelector(".header__hero--location-search")
  .addEventListener("click", (event) => {
    if (
      document.querySelector(".header__hero--location-input").value !==
      "Search for the location you want!"
    ) {
      inputAlarmer(
        `The chosen location is: ${
          document.querySelector(".header__hero--location-input").value
        }`
      );
    }
    document.querySelector(".header__hero--location-input").value =
      "Search for the location you want!";
  });

document
  .querySelector(".header__hero--location-input")
  .addEventListener("blur", (event) => {
    if (document.querySelector(".header__hero--location-input").value === "") {
      document.querySelector(".header__hero--location-input").value =
        "Search for the location you want!";
    }
  });

const recomDataArray = [
  {
    id: 0,
    textName: "Roselands House",
    price: "$ 35.000.000",
    user: 0,
    location: "Manchester, Kentucky",
    detail: [3, 1, 2, 2],
    label: "popular",
    type: "house",
  },
  {
    id: 1,
    textName: "Woodlandside",
    price: "$ 20.000.000",
    user: 1,
    location: "Dr. San Jose, South Dakota",
    detail: [2, 1, 3, 2],
    label: "new",
    type: "house",
  },
  {
    id: 2,
    textName: "The Old Lighthouse",
    price: "$ 44.000.000",
    user: 2,
    location: "Santa Ana, Illinois",
    detail: [1, 3, 2, 2],
    label: "best",
    type: "appart",
  },
  {
    id: 3,
    textName: "Cosmo's House",
    price: "$ 22.000.000",
    user: 3,
    location: "Preston Rd. Inglewood, Maine 98380",
    detail: [2, 1, 3, 2],
    label: "popular",
    type: "house",
  },
  {
    id: 4,
    textName: "Arabica",
    price: "$ 32.000.000",
    user: 3,
    location: "Jacksonville, Florida",
    detail: [2, 2, 1, 2],
    label: "new",
    type: "villa",
  },
  {
    id: 5,
    textName: "Catty's rainbow",
    price: "$ 25.000.000",
    user: 1,
    location: "Lewistown, Pensilvania",
    detail: [2, 1, 1, 2],
    label: "best",
    type: "house",
  },
  {
    id: 6,
    textName: "Arrowgane",
    price: "$ 17.000.000",
    user: 0,
    location: "Corina, Man",
    detail: [2, 1, 2, 2],
    label: "popular",
    type: "house",
    comments: [
      "My house sold out fast!",
      "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
      "4.3",
      4,
    ],
  },
  {
    id: 7,
    textName: "Skyfall",
    price: "$ 55.000.000",
    user: 3,
    location: "San Diego, California",
    detail: [3, 2, 4, 3],
    label: "best",
    type: "villa",
    comments: [
      "Best! I got the house I wanted through Hounter",
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      "4.6",
      0,
    ],
  },
  {
    id: 8,
    textName: "Palma larga",
    price: "$ 38.000.000",
    user: 2,
    location: "Miami, Florida",
    detail: [3, 2, 2, 2],
    label: "new",
    type: "villa",
    comments: [
      "Through the Hounter, I can get a house for my self",
      "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
      "4.6",
      5,
    ],
  },
  {
    id: 9,
    textName: "Central Park",
    price: "$ 118.000.000",
    user: 0,
    location: "New York, New York",
    detail: [2, 1, 2, 1],
    label: "best",
    type: "appart",
  },
  {
    id: 10,
    textName: "Garden Lake",
    price: "$ 32.000.000",
    user: 3,
    location: "Aquebogue, New York",
    detail: [2, 1, 1, 1],
    label: "popular",
    type: "house",
  },
  {
    id: 11,
    textName: "Ocean winds",
    price: "$ 40.000.000",
    user: 2,
    location: "Charlston, S.Carolina",
    detail: [2, 1, 2, 1],
    label: "popular",
    type: "villa",
  },
];

const users = [
  {
    id: 0,
    nick: "russell",
    textName: "Dianne Russels",
    place: "Manchester, Kentucky",
    position: "Manager Director",
  },
  {
    id: 1,
    nick: "fox",
    textName: "Robert Fox",
    place: "Dr. San Jose, South Dakota",
  },
  {
    id: 2,
    nick: "richards",
    textName: "Ronald Richards",
    place: "Santa Ana, Illinois",
  },
  {
    id: 3,
    nick: "wilson",
    textName: "Jenny Wilson",
    place: "Preston Rd. Inglewood, Maine 98380",
  },
  {
    id: 4,
    nick: "henry",
    textName: "Courtney Henry",
    position: "Manager Director",
  },
  {
    id: 5,
    nick: "howard",
    textName: "Esther Howard",
    position: "Head of Marketing",
  },
];

let recomendationArrayToDisplay = [];
const renewRecomDataArray = () => {
  recomendationArrayToDisplay.length = 0;
  recomDataArray.forEach((item) => {
    recomendationArrayToDisplay.push(item);
  });
};
const recomendationDisplay = (arr) => {
  const recomendationArrayToString = [];
  let recomendationDisplayString = "";
  document.querySelector(".recomendation__itemLine").innerHTML = "";
  arr.forEach((item) => {
    recomendationArrayToString.push(
      `<div class="recomendationItem">
<div class="recomendationItem__imagewindow">
<img src="./dist/images/prop/${item.id}.jpg" alt="">
<div class="recomendationItem__imagewindow--label">
<img src="./dist/images/label/${item.label}.png" alt="">
</div>
</div>
<div class="recomendationItem__titlewindow">
<h2 class="recomendationItem__titlewindow--name">${item.textName}</h2>
<h3 class="recomendationItem__titlewindow--price">${item.price}</h3>
</div>
<div class="recomendationItem__user">
<div class="recomendationItem__user--image"><img src="./dist/images/users/${
        users[item.user].nick
      }.png" alt=""></img></div>
<div class="recomendationItem__user--text">
<h3>${users[item.user].textName}</h3>
<p>${users[item.user].place}</p>
</div>
</div>
</div>
`
    );
  });
  recomendationDisplayString = recomendationArrayToString.join("");
  document
    .querySelector(".recomendation__itemLine")
    .insertAdjacentHTML("afterBegin", recomendationDisplayString);
};

document
  .querySelector(".recomendation__chooseBattons")
  .addEventListener("click", (event) => {
    if (
      event.target.closest("div").dataset.tabname === "clear" ||
      event.target.closest("div").dataset.tabname === "house" ||
      event.target.closest("div").dataset.tabname === "villa" ||
      event.target.closest("div").dataset.tabname === "appart"
    ) {
      document
        .querySelector(".activerecombutton")
        ?.classList.remove("activerecombutton");
      if (event.target.closest("div").dataset.tabname === "clear") {
        renewRecomDataArray();
      } else {
        recomendationArrayToDisplay.length = 0;
        recomDataArray.forEach((item) => {
          if (item.type === event.target.closest("div").dataset.tabname) {
            recomendationArrayToDisplay.push(item);
          }
        });
      }

      recomendationDisplay(recomendationArrayToDisplay);

      document
        .querySelector(
          `.recomendation__chooseBattons--button[data-tabname="${
            event.target.closest("div").dataset.tabname
          }"]`
        )
        .classList.add("activerecombutton");
    }
  });

document
  .querySelector(".recomendation__navigationBattons")
  .addEventListener("click", (event) => {
    if (event.target.closest("div").dataset.tabname === "left") {
      recomendationArrayToDisplay.unshift(
        recomendationArrayToDisplay[recomendationArrayToDisplay.length - 1]
      );
      recomendationArrayToDisplay.pop(
        recomendationArrayToDisplay[recomendationArrayToDisplay.length - 1]
      );
    } else {
      recomendationArrayToDisplay.push(recomendationArrayToDisplay[0]);
      recomendationArrayToDisplay.shift(recomendationArrayToDisplay[0]);
    }
    recomendationDisplay(recomendationArrayToDisplay);
  });
renewRecomDataArray();
recomendationDisplay(recomendationArrayToDisplay);

let propId = 0;
let furId = 0;
let readyToSellBigImgString = "";
let readyToSellSmallImgString = "";
let readyToSellDetailsString = "";
const readyToSellImageCard = (propId, furId, a, b) => {
  document.querySelector(".readytosell__imageline--big").innerHTML = "";
  document.querySelector(".readytosell__description--details").innerHTML = "";
  document.querySelector(".readytosell__imageline--small").innerHTML = "";
  readyToSellBigImgString = `<div class="readytosell__imageline--big-playlabel">
<img class="demonstration" src="./dist/images/stat/play.png" alt="./dist/images/prop/${propId}.jpg">
</div>
<img class="demonstration" src="./dist/images/prop/${propId}.jpg" alt="./dist/images/prop/${propId}.jpg">`;
  document
    .querySelector(".readytosell__imageline--big")
    .insertAdjacentHTML("afterBegin", readyToSellBigImgString);
  readyToSellDetailsString = `
<div class="detailstring"><div><img src="./dist/images/stat/bed.png"alt=""></div><div>${recomDataArray[propId].detail[0]}   Bedrooms</div></div>
<div class="detailstring"><div><img src="./dist/images/stat/garage.png"alt=""></div><div>${recomDataArray[propId].detail[1]}  Carport</div></div>
<div class="detailstring"><div><img src="./dist/images/stat/bath.png"alt=""></div><div>${recomDataArray[propId].detail[2]}  Bathrooms</div></div>
<div class="detailstring"><div><img src="./dist/images/stat/stairs.png"alt=""></div><div>${recomDataArray[propId].detail[3]}  Floors</div></div>`;
  document
    .querySelector(".readytosell__description--details")
    .insertAdjacentHTML("afterBegin", readyToSellDetailsString);
  readyToSellSmallImgString = `<div  class="readytosell__imageline--small-bigphoto demonstration"> <img class="demonstration" src="./dist/images/fur/${furId}.jpg" alt="./dist/images/fur/${furId}.jpg"> </div>
<div class="readytosell__imageline--small-smallphoto demonstration"><img class="demonstration" src="./dist/images/fur/${a}.jpg" alt="./dist/images/fur/${a}.jpg"></div>
<div class="readytosell__imageline--small-smallphoto demonstration"><img class="demonstration" src="./dist/images/fur/${b}.jpg" alt="./dist/images/fur/${b}.jpg"></div>`;
  document
    .querySelector(".readytosell__imageline--small")
    .insertAdjacentHTML("afterBegin", readyToSellSmallImgString);
};
readyToSellImageCard(propId, furId, furId + 1, furId + 2);

const readyToSellGeneralProgress = () => {
  let a = 0;
  let b = 0;
  const intervalId = setInterval(() => {
    if (propId === recomDataArray.length - 1) {
      propId = 0;
    } else {
      propId++;
    }
    if (furId === 2) {
      furId = 0;
    } else {
      furId++;
    }
    if (furId + 1 <= 2) {
      a = furId + 1;
    } else {
      a = 0;
    }
    if (a + 1 <= 2) {
      b = a + 1;
    } else {
      b = 0;
    }
    readyToSellImageCard(propId, furId, a, b);
  }, 3000);
  document
    .querySelector(`.readytosell__imageline`)
    .addEventListener("mouseenter", () =>
      setTimeout(() => {
        clearInterval(intervalId);
      }, 0)
    );
  document
    .querySelector(`.readytosell__imageline`)
    .addEventListener("mouseleave", readyToSellGeneralProgress);
};
readyToSellGeneralProgress();

document
  .querySelector(`.readytosell__imageline`)
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("demonstration")) {
      document.querySelector(`.mainmodal`).classList.remove("hidden");
      document.querySelector(`.mainmodal`).innerHTML = "";
      document
        .querySelector(`.mainmodal`)
        .insertAdjacentHTML(
          "afterbegin",
          `<div class="mainmodal__imagecontainer"><img src="${event.target.alt}"></div>`
        );
    }
  });
document.querySelector(`.mainmodal`).addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(`.mainmodal`).classList.add("hidden");
});

let reviewCentral = 7;
let reviewLeft = 6;
let reviewRight = 8;

const reviewImages = (left, central, right) => {
  let reviewImgString = "";
  document.querySelector(".review__imageline").innerHTML = "";
  reviewImgString = `

<div class="review__imageline-item">
<div class="review__imageline-item-reviewrapper">
<h1>${recomDataArray[left].comments[0]}</h1>
<p>${recomDataArray[left].comments[1]}</p>
<div class="review__imageline-item-reviewrapper-author">
<img src="./dist/images/users/${
    users[recomDataArray[left].comments[3]].nick
  }.png" alt="">
<div class="review__imageline-item-reviewrapper-author-name-position">
<h4>${users[recomDataArray[left].comments[3]].textName}</h4>
<p>${users[recomDataArray[left].comments[3]].position}</p>
</div>
<div class="review__imageline-item-reviewrapper-author-stars">
<img src="./dist/images/stat/star.png" alt="">
<p>${recomDataArray[left].comments[2]}</p>
</div>
</div>
</div>
<img src="./dist/images/prop/${left}.jpg" alt="${left}">
</div> 
<div class="review__imageline-item">
<div class="review__imageline-item-reviewrapper">
<h1>${recomDataArray[central].comments[0]}</h1>
<p>${recomDataArray[central].comments[1]}</p>
<div class="review__imageline-item-reviewrapper-author">
<img src="./dist/images/users/${
    users[recomDataArray[central].comments[3]].nick
  }.png" alt="">
<div class="review__imageline-item-reviewrapper-author-name-position">
<h4>${users[recomDataArray[central].comments[3]].textName}</h4>
<p>${users[recomDataArray[central].comments[3]].position}</p>
</div>
<div class="review__imageline-item-reviewrapper-author-stars">
<img src="./dist/images/stat/star.png" alt="">
<p>${recomDataArray[central].comments[2]}</p>
</div>
</div>
</div>
<img src="./dist/images/prop/${central}.jpg" alt="${central}">
</div> 
<div class="review__imageline-item">
<div class="review__imageline-item-reviewrapper">
<h1>${recomDataArray[right].comments[0]}</h1>
<p>${recomDataArray[right].comments[1]}</p>
<div class="review__imageline-item-reviewrapper-author">
<img src="./dist/images/users/${
    users[recomDataArray[right].comments[3]].nick
  }.png" alt="">
<div class="review__imageline-item-reviewrapper-author-name-position">
<h4>${users[recomDataArray[right].comments[3]].textName}</h4>
<p>${users[recomDataArray[right].comments[3]].position}</p>
</div>
<div class="review__imageline-item-reviewrapper-author-stars">
<img src="./dist/images/stat/star.png" alt="">
<p>${recomDataArray[right].comments[2]}</p>
</div>
</div>
</div>
<img src="./dist/images/prop/${right}.jpg" alt="${right}">
</div> 

`;
  document
    .querySelector(".review__imageline")
    .insertAdjacentHTML("afterBegin", reviewImgString);
};
reviewImages(reviewLeft, reviewCentral, reviewRight);

document
  .querySelector(".review__imagelinebullets")
  .addEventListener("click", (event) => {
    if (event.target.dataset.tabname === "righthouse") {
      reviewCentral = 8;
      reviewRight = 6;
      reviewLeft = 7;
    }
    if (event.target.dataset.tabname === "lefthouse") {
      reviewCentral = 6;
      reviewRight = 7;
      reviewLeft = 8;
    }
    if (event.target.dataset.tabname === "centerhouse") {
      reviewCentral = 7;
      reviewRight = 8;
      reviewLeft = 6;
    }
    if (event.target.classList.contains("review__imagelinebullets--bullet")) {
      document.querySelector(".activebullet")?.classList.remove("activebullet");
      event.target.classList.add("activebullet");
    }
    reviewImages(reviewLeft, reviewCentral, reviewRight);
  });
let xStart = 0;
let xFinish = 0;
document
  .querySelector(".review__imageline ")
  .addEventListener("mousedown", (event) => {
    xStart = event.clientX;
  });
document
  .querySelector(".review__imageline ")
  .addEventListener("touchstart", (event) => {
    xStart = event.changedTouches[0].clientX;
  });
let datatext = "";
document
  .querySelector(".review__imageline ")
  .addEventListener("mouseup", (event) => {
    xFinish = event.clientX;
    determDirection(xFinish - xStart);
  });
document
  .querySelector(".review__imageline ")
  .addEventListener("touchend", (event) => {
    xFinish = event.changedTouches[0].clientX;
    determDirection(xFinish - xStart);
  });

const determDirection = (difference) => {
  if (difference > 0 && reviewCentral > 6) {
    reviewCentral--;
    reviewRight = reviewCentral + 1;
    reviewCentral > 6 ? (reviewLeft = reviewCentral - 1) : (reviewLeft = 8);
  }
  if (xFinish - xStart < 0 && reviewCentral < 8) {
    reviewCentral++;
    reviewLeft = reviewCentral - 1;
    reviewCentral < 8 ? (reviewRight = reviewCentral + 1) : (reviewRight = 6);
  }

  reviewImages(reviewLeft, reviewCentral, reviewRight);
  document.querySelector(".activebullet")?.classList.remove("activebullet");
  reviewCentral >= 7
    ? reviewCentral > 7
      ? (datatext = "righthouse")
      : (datatext = "centerhouse")
    : (datatext = "lefthouse");
  document
    .querySelector(
      `.review__imagelinebullets--bullet[data-tabname="${datatext}"]`
    )
    .classList.add("activebullet");
};

document
  .querySelector(".subscribe__block--central-emailinput-input")
  .addEventListener("focus", (event) => {
    document.querySelector(
      ".subscribe__block--central-emailinput-input"
    ).value = "";
  });

document
  .querySelector(".subscribe__block--central-emailinput-search")
  .addEventListener("click", (event) => {
    if (
      document
        .querySelector(".subscribe__block--central-emailinput-input")
        .value.includes("@")
    ) {
      inputAlarmer(
        `You have successfully subscribed!</br> e-mail:"${
          document.querySelector(".subscribe__block--central-emailinput-input")
            .value
        }"<br/>THANKS!`
      );
    } else if (
      document.querySelector(".subscribe__block--central-emailinput-input")
        .value !== "Your email here!"
    ) {
      inputAlarmer(
        `"${
          document.querySelector(".subscribe__block--central-emailinput-input")
            .value
        }" <br/> is NOT VALID E-MAIL. <br/>Try again!`
      );
    }

    document.querySelector(
      ".subscribe__block--central-emailinput-input"
    ).value = "Your email here!";
  });

document
  .querySelector(".subscribe__block--central-emailinput-input")
  .addEventListener("blur", (event) => {
    if (
      document.querySelector(".subscribe__block--central-emailinput-input")
        .value === ""
    ) {
      document.querySelector(
        ".subscribe__block--central-emailinput-input"
      ).value = "Your email here!";
    }
  });
