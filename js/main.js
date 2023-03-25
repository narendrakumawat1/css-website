let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let bannerSection = document.getElementById("banner-section");


bannerAnimation();
function bannerAnimation() {
  bannerSection.className = "banner-section banner1";
  title1.className = "title-active";
  setTimeout(() => {
    bannerSection.className = "banner-section banner2";
    title1.className = "title";
    title2.className = "title-active";
  }, 3000);
  setTimeout(() => {
    title2.className = "title";
    title3.className = "title-active";
    bannerSection.className = "banner-section banner3";
  }, 6000);
  setTimeout(() => {
    title3.className = "title";
    bannerSection.className = "banner-section banner1";
  }, 9000);
}

setInterval(function () {
  bannerSection.className = "banner-section banner1";
  title1.className = "title-active";
  setTimeout(() => {
    bannerSection.className = "banner-section banner2";
    title1.className = "title";
    title2.className = "title-active";
  }, 3000);
  setTimeout(() => {
    bannerSection.className = "banner-section banner3";
    title2.className = "title";
    title3.className = "title-active";
  }, 6000);
  setTimeout(() => {
    bannerSection.className = "banner-section banner1";
    title3.className = "title";
  }, 9000);
}, 9000);

