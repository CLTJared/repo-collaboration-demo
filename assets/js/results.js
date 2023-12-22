const userSearchTerm = $("#library-search");
const userSearchFormat = $("#library-format");
const formSubmit = $('button[type=submit]');
const searchForm = $('#lc-search');
const resultsArea = $('#result-terms')

function getLibraryResults() {
    myQuery = document.location.search;
    searchTerm = myQuery.split('=')[1];
    console.log(myQuery.split('=')[1]);
    const myURL = 'https://www.loc.gov/search/?q=' + searchTerm + '&fo=json&at=results'

    var lcResults = $.get(myURL, function() {
        console.log("getLibraryResults:", "Success.")
    })
        .done(function( data ){
            console.log("getLibraryResults:", "Done.")
            //What data did we get
            console.log("getLibraryResults:", data);
            data = JSON.stringify(data);
            resultsArea.text(data);
        })
        .fail(function(){
            console.log("getLibraryResults:", "Failed.")
        })
        .always(function(){
            console.log("getLibraryResults:", "Finished.")
        })

    lcResults.always(function(){
        console.log("getLibraryResults:", "2nd Finished.")
    })
}

$(function(){
    //Wait for page elements to load
    getLibraryResults();
})