const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add('show');

        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
function toggleGallery() {
    const gallery = document.getElementById("project-gallery");
    gallery.classList.toggle("show");
}
