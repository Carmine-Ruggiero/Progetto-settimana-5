
    
    /*   GESTIONE MODALITÀ SCURA (DARK MODE)  */
    const themeToggleBtn = document.querySelector('.theme-toggle');
    
    
    const savedTheme = localStorage.getItem('theme');
    
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }


    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
       
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    
    

    
       /* GESTIONE DELLA FINESTRA MODALE (POPUP PREVENTIVO) */
      
    const modal = document.getElementById('contact-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.querySelector('.close-button');
const contactForm = modal.querySelector('form'); // Seleziona il form dentro la modale


openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
});


const hideModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};


closeModalBtn.addEventListener('click', hideModal);


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});


if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      
        event.preventDefault(); 

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            
            modalContent.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <h3 style="color: #28a745; margin-bottom: 10px;">Grazie!</h3>
                    <p style="font-weight: bold; font-size: 1.1em;">Abbiamo ricevuto la tua richiesta.</p>
                </div>
            `;
            
            
            setTimeout(() => {
                hideModal();

            }, 3000);
        }
    });
}

