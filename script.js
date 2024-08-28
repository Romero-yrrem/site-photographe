document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let images = [];
	

    // modale
    document.querySelectorAll('.portfolio-image','.main-portrait-image','.main-image').forEach(img => {
        images.push(img.src);
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentIndex = images.indexOf(this.src);
        });
    });
	
	document.querySelectorAll('.main-image').forEach(img => {
        images.push(img.src);
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentIndex = images.indexOf(this.src);
        });
    });
	
	document.querySelectorAll('.main-portrait-image').forEach(img => {
        images.push(img.src);
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentIndex = images.indexOf(this.src);
        });
    });

    // Close the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Previous image
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    });

    // Next image
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    });
	
	
});