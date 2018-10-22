$(document).ready(function () {

  // start of select options
  $('#select-options').on('change', function (event) {
    event.preventDefault(); // goes after sth happens, ie btn clicked.

    const selectedSec = $(this).val(); // gets the text of what was inside of select-option
    console.log(selectedSec);


    // start of Ajax
    // Built by LucyBot. www.lucybot.com
    const apiKey = '613d5aa86a84492f8c259b2b58daa766';
    const url = `https://api.nytimes.com/svc/topstories/v2/${selectedSec}.json?api-key=${apiKey}`;
    console.log(url);

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        // section: selected,
        // num_results: 12,
        data: {
          num_results: 12,
        },
      })
      .done(function (data) {
        // console.log(data);

        // $results.empty(); // 

        const abstract = data.results[0].abstract;

        // const displayNews = '<section>';
        // $.each(data.results, function (index, value) {
        //   if (index > 11) {
        //     return false;
        //   }

        //   // displayNews += '<article>'
        //   $('section').append('<article>' + `<img src="${data.results[0].multimedia[0]}"/>` +
        //     '<p class="description">' + data.results[0].abstract + '</p></article></section>');
        // });


        // })
        // .fail(function (err) {
        //   throw err;
      }); // end of Ajax

  }); // end of options
}); // end of ready