/* =============================================
   main.js — All JavaScript Logic
   ============================================= */

// ---- Popup Functions ----

function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close popup on outside click
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

// Close popup on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup').forEach(p => {
            p.style.display = 'none';
        });
        document.body.style.overflow = '';
    }
});

// ---- Hamburger / Sidebar ----

const hamburger = document.getElementById('hamburger');
const navbar    = document.getElementById('navbar');
const overlay   = document.getElementById('overlay');

function openNav() {
    navbar.classList.add('open');
    overlay.classList.add('show');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    navbar.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
    if (navbar.classList.contains('open')) {
        closeNav();
    } else {
        openNav();
    }
});

// ---- Active Nav Link on Scroll ----

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));

// ---- Form Subject Auto-Update ----

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function () {
        const nameInput    = form.querySelector('input[name="Name"]');
        const subjectInput = form.querySelector('input[name="subject"]');

        if (nameInput && subjectInput) {
            const name = nameInput.value.trim();
            const sub  = subjectInput.value;

            if (sub.includes('feedback'))    subjectInput.value = 'New Feedback From ' + name;
            if (sub.includes('complaint'))   subjectInput.value = 'New Complaint From ' + name;
            if (sub.includes('booking'))     subjectInput.value = 'New Event Booking From ' + name;
        }
    });
});
