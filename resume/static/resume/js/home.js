// Wait for the rest of the document to load
$(document).ready(function() {
    console.log('doc ready!');
    // Change the currently selected menu item
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
        changeRef($(this).attr('id'));
    });
});

// Change content for seleceted reference
function changeRef(ref) {
    var phone;
    var email;
    var relationship;
    var occupation;

    switch(ref) {
        case 'brian':
            phone = '360-650-4894';
            email = 'Brian.Hutchinson@wwu.edu';
            relationship = 'Research Supervisor & Computer Science Advisor';
            occupation = 'Computer Science Professor at WWU';
            break;

        case 'aj':
            phone = '360-650-7222';
            email = 'AJ.Barse@wwu.edu';
            relationship = 'Student Technology Center Manager';
            occupation = 'Instructional Technologist at WWU';
            break;

        case 'david':
            phone = '360-650-4976';
            email = 'David.Hamiter@wwu.edu';
            relationship = 'Student Technology Center Manager';
            occupation = 'IT Specialist at WWU';
            break;

        case 'russell':
            phone = '360-650-3694';
            email = 'Russell.Stetzer@wwu.edu';
            relationship = 'ATUS Mentor';
            occupation = 'IT Specialist at WWU';
            break;
    }

    document.getElementById('phone').innerHTML = phone;
    document.getElementById('email').innerHTML = email;
    document.getElementById('relationship').innerHTML = relationship;
    document.getElementById('occupation').innerHTML = occupation;
}