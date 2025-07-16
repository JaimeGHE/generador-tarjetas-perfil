function generarTarjeta() {
  const nombre = document.getElementById('nombre').value;
  const bio = document.getElementById('bio').value;
  const colorFondo = document.getElementById('colorFondo').value;
  const colorTexto = document.getElementById('colorTexto').value;
  const tarjeta = document.getElementById('tarjeta');
  const previewNombre = document.getElementById('preview-nombre');
  const previewBio = document.getElementById('preview-bio');
  previewNombre.textContent = nombre || 'Tu nombre';
  previewBio.textContent = bio || 'Aquí irá tu descripción personal.';
  tarjeta.style.backgroundColor = colorFondo;
  tarjeta.style.color = colorTexto;
}

function descargarImagen() {
  const tarjeta = document.getElementById('tarjeta');
  html2canvas(tarjeta).then((canvas) => {
    const enlace = document.createElement('a');
    enlace.download = 'mi-tarjeta.png';
    enlace.href = canvas.toDataURL('image/png');
    enlace.click();
  });
}
