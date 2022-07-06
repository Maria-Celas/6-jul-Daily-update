// Document is ready
$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
      validateUsername();
    });
   
    function validateUsername() {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
        $("#usercheck").show();
        $("#usercheck").html("**Username required");
        usernameError = false;
        return false;
      } else if (usernameValue.length < 5 || usernameValue.length > 12) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
      } else {
        $("#usercheck").hide();
      }
    }
     // Validate Password
     $("##password-check").hide();
     let passwordError = true;
     $("#id_password").keyup(function () {
       validatePassword();
     });
     function validatePassword() {
       let passwordValue = $("#id_password").val();
       if (passwordValue.length == "") {
       $("#password-check").show();
       passwordError = false;
       return false;
       }
       if (passwordValue.length < 3 || passwordValue.length > 10) {
       $("#password-check").show();
       $("#password-check").html(
         "**length of your password must be between 3 and 10"
       );
       $("#password-check").css("color", "red");
       passwordError = false;
       return false;
       } else {
       $("#password-check").hide();
       }
     }
})