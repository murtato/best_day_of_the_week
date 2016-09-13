if (getParameterByName('imageUrl')){
  // place imageUrl
  placeImage()

  // set up click event
  setupClickHandler()
}

$("button").click(function (e) {
  var url = $('input').val()
  $('input').val("")
  var imageUrl = {"imageUrl": url}
  if(url) {
    window.history.pushState(null, null, "?" + $.param(imageUrl))
    // place imageUrl
    placeImage()
    // setup click event
    setupClickHandler()
  }
})

function getParameterByName(name, url) {
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function placeImage() {
  var url = getParameterByName("imageUrl")
  $(".img-container").html("").append($("<img src='" + url + "' />"))
}

function setupClickHandler() {
  $(".fullscreen").on('click', function (e){
    var hand = $('<div class="hand"><img src="hand.png" alt="" /></div>')

    hand.clone()
        .css({left:e.pageX - 80, top: e.pageY - 80})
        .appendTo('body')
        .fadeOut()

    var sound = new Audio('fridayringtone.mp3')
    sound.play()

  })
}
