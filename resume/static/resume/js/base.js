// Wait for the rest of the document to load
$(document).ready(function() {

    // Change current selected menu item
    /*
    $('.ui.menu a.item').on('click', function() {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    */
   activate(window.location.pathname);
});

// Set selected menu item
function activate(item) {
    switch(item) {
        case "/":
            $("#menu-home").addClass('active');
            break;

        case "/education/":
            $("#menu-educ").addClass('active');
            break;

        case "/experience/":
            $("#menu-expe").addClass('active');
            break;

        case "/projects/":
            $("#menu-proj").addClass('active');
            break;

        case "/refrences/":
            $("#menu-refr").addClass('active');
            break;
    }
}