// Registrar o Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Service Worker registrado com sucesso!', registration);
    })
    .catch(function(error) {
      console.error('Erro ao registrar o Service Worker:', error);
    });
}

// Solicitar permissão de notificação
document.getElementById('notificar').addEventListener('click', function() {
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      // Permissão concedida, enviar uma notificação
      new Notification('Minha PWA', {
        body: 'Isso é uma notificação push sem API!',
        icon: 'icone.png'
      });
    }
  });
});

document.getElementById('enviar-notificacao').addEventListener('click', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Título da Notificação', {
        body: 'Esta é uma notificação de teste.'
      });
    });
  }
});