chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.sunglasses_opacity != null) {
      if(document.getElementById("webpage_sunglasses") == null) {
        var sunglasses = document.createElement("div");
        sunglasses.id = "webpage_sunglasses";
        document.body.appendChild(sunglasses);
      }

      document.getElementById("webpage_sunglasses").style.opacity = request.sunglasses_opacity;
      sendResponse({status: "sunglasses.js successfully received sunglasses_opacity " + request.sunglasses_opacity});
    } else {
      sendResponse({status: "sunglasses.js did not receive sunglasses_opacity"});
    }
  });
