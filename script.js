window.addEventListener('DOMContentLoaded', () => {
    const resume = document.querySelector('.resume');
    const erasingParts = document.querySelectorAll('.erasing');
    const switchingParts = document.querySelectorAll('.switching');
    setTimeout(() => {
        const btn = document.createElement('button');
        btn.classList.add('reveal');
        document.getElementsByClassName('resume')[0].insertAdjacentElement('afterbegin', btn);

        frogify(btn);

        btn.addEventListener('click', () => {
            console.log(btn);
            const mode = btn.getAttribute('data-mode');
            switch(mode){
                case 'frog':
                    unfrogify(btn);
                    break;
                case 'resume': 
                    frogify(btn);
                    break;
                default: return;
            }
        });
    }, 2000);

    function frogify(btn){
        btn.setAttribute('data-mode', 'frog');
        btn.textContent = 'Reveal resume';
        erasingParts.forEach(elem => {
            elem.classList.replace('hide', 'show');
        });
        switchingParts.forEach(elem => {
            elem.classList.replace('switching_resume', 'switching_frog');
        });
        resume.classList.add('frogified');
    }
    
    function unfrogify(btn) {
        btn.setAttribute('data-mode', 'resume');
        btn.textContent = 'Frog return';
        erasingParts.forEach(elem => {
            elem.classList.replace('show', 'hide');
        });
        switchingParts.forEach(elem => {
            elem.classList.replace('switching_frog', 'switching_resume');
        });
        resume.classList.remove('frogified');
    }

})

