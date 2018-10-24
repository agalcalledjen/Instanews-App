$(document).ready(function () {

  // start of select options
  $('#select-options').on('change', function (event) {
    event.preventDefault();
    $('.loading').append('<img src="../assets/images/ajax-loader.gif" alt="Loading Gif" class="loader"/>');

    $('header').addClass('shrink');
    $('#logo').addClass('shrink-logo');

    const sectionOptn = $(this).val();
    console.log(sectionOptn);

    // start of Ajax
    // Built by LucyBot. www.lucybot.com
    const apiKey = '613d5aa86a84492f8c259b2b58daa766';
    const url = `https://api.nytimes.com/svc/topstories/v2/${sectionOptn}.json?api-key=${apiKey}`;
    console.log(url);

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        section: sectionOptn,
      })
      .done(function (data) {
        console.log(data);

        $('.news').empty();

        let articles = data.results.filter(function (item) {
          return item.multimedia.length > 4;
        });
        articles = articles.slice(0, 12);

        $.each(articles, function (index, value) {
          $('.news').append(`<article><a href="${value.url}" target="_blank"><div class="newsImg" style="background-image: url(${value.multimedia[4].url});"><p class="description">${value.abstract}</p></div></a></article>`);

        });
      })
      .fail(function () {
        console.log("There was an error and it is not fatal.");
      })
      .always(function () {
        $('.loading').empty();
      }); // end of Ajax
  }); // end of options
}); // end of ready