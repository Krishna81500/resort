// Star rating functionality
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;
        updateStars();
    });
    
    star.addEventListener('mouseover', () => {
        highlightStars(index + 1);
    });
});

document.querySelector('.rating').addEventListener('mouseleave', () => {
    updateStars();
});

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateStars() {
    highlightStars(selectedRating);
}

// Feedback form submission
document.querySelector('.feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const category = this.querySelector('select').value;
    const feedback = this.querySelector('textarea').value;
    
    if (name && email && category && feedback && selectedRating > 0) {
        alert('Thank you for your feedback! We appreciate your input.');
        this.reset();
        selectedRating = 0;
        updateStars();
    } else {
        alert('Please fill in all fields and select a rating.');
    }
});