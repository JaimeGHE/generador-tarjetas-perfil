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

  const avatarInput = document.getElementById('avatar');
  const avatarPreview = document.getElementById('preview-avatar');

  if (avatarInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
      avatarPreview.style.display = 'block';
    };
    reader.readAsDataURL(avatarInput.files[0]);
  } else {
    avatarPreview.src = '';
    avatarPreview.style.display = 'none';
  }

  const github = document.getElementById('github').value;
  const linkedin = document.getElementById('linkedin').value;
  const web = document.getElementById('web').value;

  const linksContainer = document.getElementById('preview-links');
  linksContainer.innerHTML = '';

  if (github) {
    linksContainer.innerHTML += `<a href="${github}" target="_blank">GitHub</a>`;
  }
  if (linkedin) {
    linksContainer.innerHTML += `<a href="${linkedin}" target="_blank">LinkedIn</a>`;
  }
  if (web) {
    linksContainer.innerHTML += `<a href="${web}" target="_blank">Web</a>`;
  }

  tarjeta.classList.remove('visible');
  setTimeout(() => tarjeta.classList.add('visible'), 10);
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
