// Create animated particles
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random positioning
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Form submission handler
        document.querySelector('.contact-form form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #00ff7f, #00bcd4)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = 'linear-gradient(45deg, #00bcd4, #e91e63)';
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', createParticles);

        // Add smooth scrolling effect for contact links
        document.querySelectorAll('.contact-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.05) rotateZ(2deg)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
            });
        });

        // Dynamic availability status
        function updateAvailabilityStatus() {
            const statusDot = document.querySelector('.status-dot');
            const statusText = document.querySelector('.availability-status span');
            const hour = new Date().getHours();
            
            if (hour >= 9 && hour <= 18) {
                statusDot.style.background = '#00ff7f';
                statusText.textContent = 'Online and ready to chat!';
            } else if (hour >= 19 && hour <= 22) {
                statusDot.style.background = '#ffaa00';
                statusText.textContent = 'Available for messages';
            } else {
                statusDot.style.background = '#ff6b6b';
                statusText.textContent = 'Offline - Will respond soon';
            }
        }

        updateAvailabilityStatus();
        setInterval(updateAvailabilityStatus, 60000);