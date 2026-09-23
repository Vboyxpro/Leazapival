document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Ha a regisztrációra kattintunk, engedjük a rendes átirányítást
        if (this.classList.contains('spec-link')) {
            return;
        }

        e.preventDefault();

        // Aktív menüpont stílusának kezelése
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Szekciók közötti váltás
        const targetId = this.getAttribute('href').substring(1);
        
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active-section');
        });

        document.getElementById(targetId).classList.add('active-section');
    });
});
