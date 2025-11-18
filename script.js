// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Booking form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const checkin = this.querySelector('input[type="date"]').value;
    const roomType = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && phone && checkin && roomType) {
        alert(`धन्यवाद ${name}! Your booking request has been received. We will confirm your reservation within 2 hours. WhatsApp: +91 98765 43210`);
        this.reset();
    } else {
        alert('कृपया सभी आवश्यक फ़ील्ड भरें (Please fill all required fields)');
    }
});

// Book Now button functionality
if (document.querySelector('.cta-btn')) {
    document.querySelector('.cta-btn').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
}

// Set minimum date for all date inputs
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.setAttribute('min', today);
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 107, 53, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #ff6b35, #dc143c, #b8860b)';
    }
});

// Welcome message in Kannada
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🙏 ನಮಸ್ಕಾರ! Welcome to Shanti Nilaya - Your home away from home in Karnataka!');
    }, 2000);
});

// Room card hover effects
document.querySelectorAll('.room-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Room gallery functionality
document.querySelectorAll('.room-gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    const prevBtn = gallery.querySelector('.prev');
    const nextBtn = gallery.querySelector('.next');
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
    
    // Auto-slide every 4 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 4000);
});

// Cuisine tabs functionality
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.cuisine-content-tab').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

// Initialize tabs when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
});