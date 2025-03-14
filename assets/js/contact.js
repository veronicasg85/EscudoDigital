document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(this.checkValidity()) {
        alert('Formulario enviado correctamente');
        
        console.log('Formulario enviado con éxito - Datos:', {
            nombre: this.nombre.value,
            email: this.email.value,
            pais: this.pais.value,
            asunto: this.asunto.value
        });
        
        this.reset();
    }
});