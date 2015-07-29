$(document).ready(function() {

  $('#signin').click(function() {
    var ref = new Firebase("https://fantasy-draft-host.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  });

});
