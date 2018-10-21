$(document).ready(function (event) {
  event.preventDefault();

  $('.dropbtn').on('submit', function () {
    $('.dropdown-content').toggle('slow');
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.github.com/users/octocat'
    //   })
    //   .done(function (data) {
    //     $('.user-name').append(data.login);
    //   })
    //   .fail(function () {
    //     $('.user-name').append('Sorry there was an error.');
    //   })
    //   .always(function () {
    //     // This code will run regardless of success/failure
    //     alert("Going to get the data");
    //   });
  });

  // /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
  //   function myFunction() {
  //     document.getElementById("dropdown").classList.toggle("show");
  //   }

  //   // Close the dropdown if the user clicks outside of it
  //   window.onclick = function (e) {
  //     if (!e.target.matches('.dropbtn')) {
  //       const dropdown = document.getElementById("dropdown");
  //       if (myDropdown.classList.contains('show')) {
  //         myDropdown.classList.remove('show');
  //       }
  //     }
  //   }
});