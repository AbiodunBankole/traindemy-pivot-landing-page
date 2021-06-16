
//watch demo video

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pauseVideo();
}



//video for the features section

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    video_close();
  }
}

function video_open() {
  var boxVideo = document.getElementById("FeatureVideo");
  window.scrollTo(0, 0);
  document.getElementById('f-video').style.display = 'block';
  document.getElementById('close').style.display = 'block';
  boxVideo.play();
}

function video_close() {
  var boxVideo = document.getElementById("FeatureVideo");
  document.getElementById('f-video').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  boxVideo.pause();
}