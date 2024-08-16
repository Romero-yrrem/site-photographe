document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let images = [];
	const streetModal = document.getElementById('streetImageModal');
    const streetModalImg = document.getElementById('streetModalImg');
    const streetCloseBtn = document.querySelector('#streetImageModal .close');
    const streetPrevBtn = document.querySelector('#streetImageModal .prev');
    const streetNextBtn = document.querySelector('#streetImageModal .next');
    let streetImages = [];
    let streetCurrentIndex = 0;
	const otherModal = document.getElementById('otherImageModal');
    const otherModalImg = document.getElementById('otherModalImg');
    const otherCloseBtn = document.querySelector('#otherImageModal .close');
    const otherPrevBtn = document.querySelector('#otherImageModal .prev');
    const otherNextBtn = document.querySelector('#otherImageModal .next');
    let otherImages = [];
    let otherCurrentIndex = 0;


    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).classList.add('active');
        });
    });
	
	
    // mariage modale
    document.querySelectorAll('.portfolio-image').forEach(img => {
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
	
	//street modal
	document.querySelectorAll('.street-image').forEach(img => {
      streetImages.push(img.src);
      img.addEventListener('click', function() {
        streetModal.style.display = 'block';
        streetModalImg.src = this.src;
        streetCurrentIndex = streetImages.indexOf(this.src);
      });
    });

    streetCloseBtn.addEventListener('click', function() {
      streetModal.style.display = 'none';
    });

    streetModal.addEventListener('click', function(e) {
      if (e.target === otherModal) {
        streetModal.style.display = 'none';
      }
    });

    streetPrevBtn.addEventListener('click', function() {
      streetCurrentIndex = (streetCurrentIndex - 1 + streetImages.length) % streetImages.length;
      otherModalImg.src = otherImages[otherCurrentIndex];
    });

    streetNextBtn.addEventListener('click', function() {
      streetCurrentIndex = (streetCurrentIndex + 1) % streetImages.length;
      streetModalImg.src = streetImages[streetCurrentIndex];
    });
	
	
	
	//modal gallerie mode
	 document.querySelectorAll('.mode-image').forEach(img => {
      otherImages.push(img.src);
      img.addEventListener('click', function() {
        otherModal.style.display = 'block';
        otherModalImg.src = this.src;
        otherCurrentIndex = otherImages.indexOf(this.src);
      });
    });

    otherCloseBtn.addEventListener('click', function() {
      otherModal.style.display = 'none';
    });

    otherModal.addEventListener('click', function(e) {
      if (e.target === otherModal) {
        otherModal.style.display = 'none';
      }
    });

    otherPrevBtn.addEventListener('click', function() {
      otherCurrentIndex = (otherCurrentIndex - 1 + otherImages.length) % otherImages.length;
      otherModalImg.src = otherImages[otherCurrentIndex];
    });

    otherNextBtn.addEventListener('click', function() {
      otherCurrentIndex = (otherCurrentIndex + 1) % otherImages.length;
      otherModalImg.src = otherImages[otherCurrentIndex];
    });
	
	
});