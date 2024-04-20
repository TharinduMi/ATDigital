document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // Get all FAQ headings
    var headings = document.querySelectorAll('.FAQ h3');

    // Add click event listener to each heading
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            console.log("Heading clicked"); // Log a message to the console
            // Toggle the visibility of the sibling <p> element
            var content = this.nextElementSibling;
            content.classList.toggle('show');

            // Toggle the plus/minus icon
            var icon = this.querySelector('.toggle');
            icon.textContent = icon.textContent === '+' ? '-' : '+';
        });
    });
});



function toggleMenu() {
    console.log("Menu button clicked");
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}