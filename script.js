// Smooth scrolling para los enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(enlace.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Validación del formulario de reserva
  const formReserva = document.querySelector('form');
  formReserva.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    
    if (nombre.trim() === '' || email.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
      alert('Por favor, complete todos los campos del formulario.');
    } else {
      // Aquí puedes enviar los datos del formulario al servidor o realizar alguna acción adicional
      alert('¡Reserva enviada con éxito!');
      formReserva.reset();
    }
  });
  