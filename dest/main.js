//Slider Photo
function sliderPhoto() {
  var slider = document.querySelector(".carousel");
  var flkty = new Flickity(slider, {
    // options
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    freeScoll: true,
  });
}
sliderPhoto();
