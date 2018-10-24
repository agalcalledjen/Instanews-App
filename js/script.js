$(document).ready(function () {
  // $('.loading').show();
  // start of select options
  $('#select-options').on('change', function (event) {
    event.preventDefault(); // goes after sth happens, ie btn clicked.
    // const load = $('header').prepend('<img src="../assets/images/nyt-lolo.svg" class="loading"/>');
    $('.loading').append('<img src="../assets/images/ajax-loader.gif" alt="Loading Gif" class="loader"/>');

    // $('.loader').fadeOut();
    $('header').addClass('shrink');
    $('#logo').addClass('shrink-logo');

    const sectionOptn = $(this).val(); // gets the text of what was inside of select-option
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


        // $displayNews.empty(); // 

        // const newsAbstract = data.results[0].abstract;
        // console.log(newsAbstract);

        // const newsImg = data.results[0].multimedia[4].url;
        // console.log(newsImg);

        // const newsLink = data.results[0].url;
        // console.log(newsLink);



        // run data through filter first before putting it in the each loop since we only want the articles with pictures.e
        let articles = data.results.filter(function (item) {
          return item.multimedia.length > 4;
        });
        // only pick index from array of 0 - 11
        articles = articles.slice(0, 12);

        $.each(articles, function (index, value) {


          // $('.news').append(`<article><a href="${data.results[index].url}" target="_blank"><img src="${data.results[index].multimedia[4].url}"/><p class="description">${data.results[index].abstract}</p></article>`);


          $('.news').append(`<article><a href="${value.url}" target="_blank"><div class="newsImg" style="background-image: url(${value.multimedia[4].url});"><p class="description">${value.abstract}</p></div></a></article>`);

        });
      })
      .fail(function () {
        throw err;
      })
      .always(function () {
        $('.loading').empty();
        // to set time before empty is applied
        // setTimeout(function () {
        //   $('.loading').empty();
        // }, 1000);
      }); // end of Ajax
  }); // end of options
}); // end of ready