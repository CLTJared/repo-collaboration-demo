// API Call Example: https://www.loc.gov/search/?q=baseball&fo=json&at=results
// Returns results for the query baseball in json format
// q = search term
// at = attributes | ex: pagination, results, results.0, facets

const userSearchTerm = $("#library-search");
const userSearchFormat = $("#library-format");
const formSubmit = $('button[type=submit]');

$(function() {
    //Verifies that the page load has finished and jQuery is active


    //Listening for the click on the form submit button
    formSubmit.on("click", formSearchHandler);
});

var formSearchHandler = function (event) {
    //Prevents page from refreshing
    event.preventDefault();
  
    var searchTerm = userSearchTerm.val().trim();
  
    if (searchTerm) {
        //If searchTerm is not null/blank, here is what we do.
        console.log('formSearchHandler:', searchTerm)
        const libraryQuery = 'https://www.loc.gov/search/?q=' + searchTerm + '&fo=json&at=results'
        console.log('formSearchHandler:', libraryQuery)
    } else { console.log('formSearchHandler:', 'Search Term was null'); }
  };