
    
    /* ==========================================================================
       1. GESTIONE MODALITÀ SCURA (DARK MODE)
       ========================================================================== */
    const themeToggleBtn = document.querySelector('.theme-toggle');
    
    // Controlla se l'utente aveva già una preferenza salvata in precedenza
    const savedTheme = localStorage.getItem('theme');
    
    // Se la preferenza era attiva, applica la classe al caricamento della pagina
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Cambia il tema al clic del pulsante
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Salva la scelta dell'utente per mantenerla alle visite successive
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

// 1. Apre la modale
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
});

// Function riutilizzabile per chiudere la modale resettando lo stato
const hideModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// 2. Chiude la modale al clic sulla "X"
closeModalBtn.addEventListener('click', hideModal);

// 3. Chiude la modale al clic fuori dal box bianco (senza mostrare il grazie)
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

// 4. GESTIONE DELL'INVIO DEL FORM: Mostra il messaggio di successo
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        // Impedisce il ricaricamento immediato della pagina (utile se usi AJAX/Fetch)
        event.preventDefault(); 

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            // Sostituisce il contenuto del form con il messaggio di ringraziamento
            modalContent.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <h3 style="color: #28a745; margin-bottom: 10px;">Grazie!</h3>
                    <p style="font-weight: bold; font-size: 1.1em;">Abbiamo ricevuto la tua richiesta.</p>
                </div>
            `;
            
            // Chiude la modale automaticamente dopo 3 secondi
            setTimeout(() => {
                hideModal();
                // Opzionale: se serve ricaricare la pagina sblocca la riga sotto
                // window.location.reload(); 
            }, 3000);
        }
    });
}