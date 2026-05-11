// API Base URL
const API_URL = 'https://swtechnologies-backend.onrender.com/api';

// Update navbar based on login status
function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    const existingUserMenu = document.getElementById('user-menu');
    const existingAdminLink = document.getElementById('admin-nav-link');
    
    if (existingUserMenu) existingUserMenu.remove();
    if (existingAdminLink) existingAdminLink.remove();
    
    const loginLi = Array.from(navLinks?.children || []).find(li => li.querySelector('a[href="login.html"]'));
    const registerLi = Array.from(navLinks?.children || []).find(li => li.querySelector('a[href="register.html"]'));
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.name) {
        if (loginLi) loginLi.style.display = 'none';
        if (registerLi) registerLi.style.display = 'none';
        
        if (navLinks) {
            const userLi = document.createElement('li');
            userLi.id = 'user-menu';
            userLi.innerHTML = `
                <span style="color: #4f46e5;">
                    <i class="fas fa-user-circle"></i> ${user.name}
                </span>
                <button onclick="logout()" style="margin-left: 10px; background: none; border: none; color: #ef4444; cursor: pointer;">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            `;
            navLinks.appendChild(userLi);
        }
        
        if (user.role === 'admin') {
            const adminLi = document.createElement('li');
            adminLi.id = 'admin-nav-link';
            adminLi.innerHTML = `<a href="admin.html" style="color: #ef4444;"><i class="fas fa-shield-alt"></i> Admin Panel</a>`;
            navLinks.insertBefore(adminLi, navLinks.lastElementChild);
        }
    } else {
        if (loginLi) loginLi.style.display = '';
        if (registerLi) registerLi.style.display = '';
    }
}

// Logout function
window.logout = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    showMessage('success', 'Logged out successfully!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
};

// Helper function to show messages
function showMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        z-index: 9999;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 4000);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm && !contactForm.hasAttribute('data-listener')) {
    contactForm.setAttribute('data-listener', 'true');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name')?.value,
            email: document.getElementById('email')?.value,
            phone: document.getElementById('phone')?.value,
            subject: document.getElementById('subject')?.value,
            message: document.getElementById('message')?.value
        };
        
        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                showMessage('success', 'Message sent successfully!');
                contactForm.reset();
            } else {
                showMessage('error', data.message || 'Something went wrong');
            }
        } catch (error) {
            showMessage('error', 'Network error. Make sure backend is running on port 5000');
        }
    });
}

// Newsletter Subscription
document.querySelectorAll('.newsletter-form').forEach(form => {
    if (!form.hasAttribute('data-listener')) {
        form.setAttribute('data-listener', 'true');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput?.value;
            
            try {
                const response = await fetch(`${API_URL}/newsletter/subscribe`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();
                if (response.ok) {
                    showMessage('success', 'Subscribed successfully!');
                    emailInput.value = '';
                } else {
                    showMessage('error', data.message || 'Subscription failed');
                }
            } catch (error) {
                showMessage('error', 'Network error');
            }
        });
    }
});

// ============ QUOTE MODAL - FIXED WORKING VERSION ============

// Function to create and show quote modal
window.showQuoteModal = function(preSelectedService = null) {
    // Remove existing modal if any
    const existingModal = document.getElementById('quoteModal');
    if (existingModal) existingModal.remove();
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'quoteModal';
    modal.style.cssText = `
        display: flex;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            width: 90%;
            max-width: 550px;
            max-height: 85vh;
            border-radius: 24px;
            position: relative;
            overflow-y: auto;
            padding: 32px;
            animation: modalSlideIn 0.3s ease;
        ">
            <div style="
                position: sticky;
                top: 0;
                background: white;
                padding-bottom: 16px;
                margin-bottom: 16px;
                border-bottom: 1px solid #e5e7eb;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <h2 style="margin: 0; font-size: 1.8rem;">Get a Free Quote</h2>
                <button id="closeQuoteModal" style="
                    background: none;
                    border: none;
                    font-size: 28px;
                    cursor: pointer;
                    color: #666;
                ">&times;</button>
            </div>
            
            <form id="quoteFormSubmit">
                <div style="margin-bottom: 16px;">
                    <input type="text" id="quoteName" placeholder="Full Name" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px;">
                </div>
                <div style="margin-bottom: 16px;">
                    <input type="email" id="quoteEmail" placeholder="Email Address" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px;">
                </div>
                <div style="margin-bottom: 16px;">
                    <input type="tel" id="quotePhone" placeholder="Phone Number" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px;">
                </div>
                <div style="margin-bottom: 16px;">
                    <select id="quoteService" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px;">
                        <option value="">Select Service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                    </select>
                </div>
                <div style="margin-bottom: 16px;">
                    <select id="quoteBudget" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px;">
                        <option value="">Select Budget Range</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                    </select>
                </div>
                <div style="margin-bottom: 24px;">
                    <textarea id="quoteMessage" placeholder="Tell us about your project..." rows="4" required style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 16px; resize: vertical;"></textarea>
                </div>
                <button type="submit" id="quoteSubmitBtn" style="
                    width: 100%;
                    background: #4f46e5;
                    color: white;
                    border: none;
                    padding: 14px;
                    border-radius: 40px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                ">Submit Quote Request →</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation style
    if (!document.getElementById('modal-animation-style')) {
        const style = document.createElement('style');
        style.id = 'modal-animation-style';
        style.textContent = `
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Pre-select service if provided
    if (preSelectedService) {
        const serviceSelect = document.getElementById('quoteService');
        if (serviceSelect) {
            for (let option of serviceSelect.options) {
                if (option.value === preSelectedService) {
                    option.selected = true;
                    break;
                }
            }
        }
    }
    
    // Close modal
    const closeBtn = document.getElementById('closeQuoteModal');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    // Handle form submission
    const form = document.getElementById('quoteFormSubmit');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('quoteName').value.trim(),
            email: document.getElementById('quoteEmail').value.trim(),
            phone: document.getElementById('quotePhone').value.trim(),
            serviceRequired: document.getElementById('quoteService').value,
            budget: document.getElementById('quoteBudget').value,
            message: document.getElementById('quoteMessage').value.trim()
        };
        
        // Validate
        if (!formData.name || !formData.email || !formData.phone || !formData.serviceRequired || !formData.budget || !formData.message) {
            showMessage('error', 'Please fill all fields');
            return;
        }
        
        const emailPattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            showMessage('error', 'Please enter a valid email');
            return;
        }
        
        const submitBtn = document.getElementById('quoteSubmitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(`${API_URL}/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                showMessage('success', 'Quote request sent! We\'ll contact you within 24 hours.');
                modal.remove();
            } else {
                showMessage('error', data.message || data.errors?.[0]?.msg || 'Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('error', 'Network error. Make sure backend is running on port 5000');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
};

// Open quote modal from homepage button
const openQuoteBtn = document.getElementById('openQuoteBtn');
if (openQuoteBtn) {
    openQuoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.showQuoteModal();
    });
}

// Function for services page buttons
window.openQuoteModalWithService = function(service) {
    window.showQuoteModal(service);
};

// Call update on page load
updateNavbar();

console.log('✅ script.js loaded - Quote modal ready');