// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-theme-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Sticky Header
const header = document.querySelector('.sticky-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = question.querySelector('i');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('i').classList.remove('fa-minus');
            otherItem.querySelector('i').classList.add('fa-plus');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Add more FAQ items dynamically
const faqContainer = document.querySelector('.faq-container');
const faqQuestions = [
    'How much does Netflix cost?',
    'Where can I watch?',
    'How do I cancel?',
    'What can I watch on Netflix?',
    'Is Netflix good for kids?'
];

const faqAnswers = [
    'Netflix plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.',
    'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
];

faqQuestions.forEach((question, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
        <div class="faq-question">
            <span>${question}</span>
            <i class="fas fa-plus"></i>
        </div>
        <div class="faq-answer">
            <p>${faqAnswers[index]}</p>
        </div>
    `;
    faqContainer.appendChild(faqItem);
});

// Re-attach FAQ accordion event listeners for all items
const allFaqItems = document.querySelectorAll('.faq-item');
allFaqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = question.querySelector('i');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        allFaqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('i').classList.remove('fa-minus');
            otherItem.querySelector('i').classList.add('fa-plus');
        });
        if (!isActive) {
            item.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Customer Support Button
const supportBtn = document.querySelector('.support-btn');
supportBtn.addEventListener('click', () => {
    window.open('https://help.netflix.com/en/', '_blank');
});

// Netflix Chatbot
const chatbot = {
    elements: {
        trigger: null,
        window: null,
        closeBtn: null,
        input: null,
        sendBtn: null,
        messages: null
    },

    init() {
        // Get all elements
        this.elements.trigger = document.querySelector('.chatbot-trigger');
        this.elements.window = document.querySelector('.chatbot-window');
        this.elements.closeBtn = document.querySelector('.chatbot-close');
        this.elements.input = document.querySelector('.chatbot-input input');
        this.elements.sendBtn = document.querySelector('.send-button');
        this.elements.messages = document.querySelector('.chatbot-messages');

        // Debug: Log missing elements
        Object.entries(this.elements).forEach(([key, el]) => {
            if (!el) {
                console.error(`[Chatbot] Missing element: ${key}`);
            }
        });

        // Add event listeners only if elements exist
        if (this.elements.trigger) {
            this.elements.trigger.addEventListener('click', () => this.toggleWindow());
        }
        if (this.elements.closeBtn) {
            this.elements.closeBtn.addEventListener('click', () => this.toggleWindow());
        }
        if (this.elements.sendBtn) {
            this.elements.sendBtn.addEventListener('click', () => this.sendMessage());
        }
        if (this.elements.input) {
            this.elements.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
        }

        console.log('Chatbot initialized');
    },

    toggleWindow() {
        if (this.elements.window) {
            this.elements.window.classList.toggle('active');
            if (this.elements.window.classList.contains('active')) {
                this.elements.input.focus();
            }
        }
    },

    addMessage(text, isUser = false) {
        if (!this.elements.messages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const p = document.createElement('p');
        p.textContent = text;
        
        contentDiv.appendChild(p);
        messageDiv.appendChild(contentDiv);
        this.elements.messages.appendChild(messageDiv);
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
        
        return messageDiv;
    },

    getResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Netflix offers different plans starting at ₹149 per month. The basic plan is ₹149, standard plan is ₹499, and premium plan is ₹649 per month.";
        } else if (lowerMessage.includes('cancel') || lowerMessage.includes('subscription')) {
            return "You can cancel your Netflix subscription anytime. Just go to your account settings and click on 'Cancel Membership'. Your account will remain active until the end of your billing period.";
        } else if (lowerMessage.includes('download') || lowerMessage.includes('offline')) {
            return "Yes, you can download shows and movies to watch offline on your mobile device. Just look for the download icon next to the content you want to save.";
        } else if (lowerMessage.includes('device') || lowerMessage.includes('watch')) {
            return "You can watch Netflix on various devices including smart TVs, smartphones, tablets, computers, and gaming consoles. Just download the Netflix app or visit netflix.com.";
        } else if (lowerMessage.includes('profile') || lowerMessage.includes('account')) {
            return "You can create up to 5 profiles on your Netflix account. Each profile can have its own recommendations, viewing history, and settings.";
        } else if (lowerMessage.includes('content') || lowerMessage.includes('show') || lowerMessage.includes('movie')) {
            return "Netflix offers a wide variety of TV shows, movies, documentaries, and Netflix Originals. The content library varies by region and is regularly updated.";
        } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
            return "You can visit help.netflix.com for detailed support articles, or contact our customer service for immediate assistance.";
        } else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            return "Hello! How can I help you with Netflix today? You can ask me about pricing, subscriptions, content, or any other Netflix-related questions.";
        } else {
            return "I'm not sure about that. You can ask me about Netflix pricing, subscriptions, content, or how to use Netflix. How else can I help you?";
        }
    },

    sendMessage() {
        if (!this.elements.input) return;
        
        const message = this.elements.input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, true);
        this.elements.input.value = '';
        
        // Show typing indicator
        const typingIndicator = this.addMessage('Typing...', false);
        
        // Simulate typing delay
        setTimeout(() => {
            if (typingIndicator && typingIndicator.parentNode) {
                typingIndicator.parentNode.removeChild(typingIndicator);
            }
            const response = this.getResponse(message);
            this.addMessage(response);
        }, 1000);
    }
};

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing chatbot...');
    chatbot.init();
});

// Also try to initialize after a short delay to ensure all elements are loaded
setTimeout(() => {
    console.log('Delayed initialization...');
    chatbot.init();
}, 1000); 