// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
    if (obj.detail && obj.detail.event) {
      const event = obj.detail.event;
  
      // Pegar nome e mensagem do evento
      const username = event.from || 'Anônimo';
      const message = event.message || '';
  
      // Criar elemento a partir do template
      const log = document.getElementById('log');
      const template = document.getElementById('chatlist_item').innerHTML;
  
      // Substituir placeholders
      const chatHTML = template
        .replace('{from}', username)
        .replace('{message}', message)
        .replace('{messageId}', event.messageId || Date.now());
  
      // Adicionar no contêiner do chat
      log.insertAdjacentHTML('beforeend', chatHTML);
    }
  });