const image_1 =
  "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image_2 =
  "https://images.pexels.com/photos/2397630/pexels-photo-2397630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image_3 =
  "https://images.pexels.com/photos/2977401/pexels-photo-2977401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image_4 =
  "https://images.pexels.com/photos/3934004/pexels-photo-3934004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

var slider_images = [image_1, image_2, image_3, image_4];
var images_length = slider_images.length;
var slider_id = document.querySelector("#sider-img");
var slider_con = document.querySelector(".slider-inner-b-con");
var img_id = 0;
var boo_check = false;
for (var i = 0; i < slider_images.length; i++) {
  const bottom_indicators = document.createElement("div");
  bottom_indicators.className = "dot-indicator";
  slider_con.appendChild(bottom_indicators);
}
var dots = document.querySelectorAll(".dot-indicator");
(function handleSlider() {
  img_swap();
})();
function img_swap() {
  slider_id.src = slider_images[img_id];
  dots[img_id].style.backgroundColor = "white";
}
function dots_bg_reset() {
  dots.forEach((dots) => {
    dots.style.backgroundColor = "transparent";
  });
}
function handle_increment(prop) {
  dots_bg_reset();
  prop === "right" ? (img_id += 1) : (img_id -= 1);
  boo_check = img_id >= 0 && img_id <= images_length - 1;
  if (boo_check) {
    img_swap();
  } else if (!boo_check && prop === "left") {
    img_id = images_length - 1;
    img_swap();
  } else {
    img_id = 0;
    img_swap();
  }
}
dots.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    img_id = idx;
    dots_bg_reset();
    img_swap();
  });
});
