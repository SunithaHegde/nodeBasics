// Get the modal
var modal = document.getElementById('flipKortLoginModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function successfulLogin() {
  $.ajax({
    method: "get",
    url: "/success",
    dataType : "html",
    success: function(data){
      console.log(data);
      modal.style.display = "none";
      $("#loginButton").hide();
      window.location.href = "public/html/success";
    }
  })
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
