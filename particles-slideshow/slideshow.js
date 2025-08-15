const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const traitLabel = document.querySelector('.trait-label');
        const traitDescription = document.querySelector('.trait-description');
        const currentTrait = document.querySelector('.current-trait');
        
        let currentSlide = 0;
        
        const slideData = [
            {
                label: "Volleyball Athlete",
                description: "Dedicated team player who brings energy and precision to every game"
            },
            {
                label: "Web Developer",
                description: "Passionate coder who crafts digital experiences with attention to detail"
            },
            {
                label: "Friendly Mind",
                description: "Innovative thinker who brings people closer"
            },
            {
                label: "Determined Spirit",
                description: "Persistent achiever who never gives up on goals and challenges"
            }
        ];

        function showSlide(index) {
            // Remove active class from all slides and indicators
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Add active class to current slide and indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            
            // Update trait information with animation
            currentTrait.style.opacity = '0';
            setTimeout(() => {
                traitLabel.textContent = slideData[index].label;
                traitDescription.textContent = slideData[index].description;
                currentTrait.style.opacity = '1';
            }, 200);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto slideshow
        const autoSlide = setInterval(nextSlide, 5000);

        // Manual navigation
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                // Reset auto slideshow
                clearInterval(autoSlide);
                setTimeout(() => {
                    setInterval(nextSlide, 5000);
                }, 1000);
            });
        });

        // Enhanced hover effects
        const slideshowContainer = document.querySelector('.slideshow-container');
        
        slideshowContainer.addEventListener('mouseenter', () => {
            slideshowContainer.style.transform = 'scale(1.02) rotateY(2deg)';
            slideshowContainer.style.filter = 'brightness(1.1)';
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            slideshowContainer.style.transform = 'scale(1) rotateY(0deg)';
            slideshowContainer.style.filter = 'brightness(1)';
        });

        // Parallax effect for particles
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                const moveX = (x - 0.5) * speed * 10;
                const moveY = (y - 0.5) * speed * 10;
                particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });