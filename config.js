// Configuración del asistente. Edita estos valores y recarga la página.
// La API key NO va aquí: la usa server.py desde el archivo .env (nunca llega al navegador).
window.OMLX_ASSISTANT = {
  // '' = mismo servidor que sirve la web (server.py), que reenvía a oMLX
  baseUrl: '',

  assistantName: 'Asistente',
  // Nombre que se muestra para el modelo (el real se detecta solo y se usa internamente)
  modelLabel: 'Wodobox-Bot',
  // Imagen de la cabecera del panel (vacío = degradado de color)
  avatar: 'img/wodobox-avatar.png',
  greeting: 'Hola, soy Wodobox-Bot de la Mesa de Ayuda. Puedo registrar un problema o pedir un servicio por ti (licencias, accesos, VPN, software, equipos). ¿Qué necesitas?',
  // Instrucciones generales extra. Lo principal (identidad, conocimiento, temas,
  // reglas y respuestas a preguntas) se define en contexto.js
  systemPrompt: 'Usa Markdown cuando ayude a la claridad.',

  // Registro de solicitudes: server.py las guarda con número TCK-… (vacío/null = sin botón de envío)
  tickets: { endpoint: '/api/tickets' },

  // Nota bajo el cuadro de texto del asistente
  footnote: 'Procesado en nuestro Mac Studio · imágenes, PDF, Word, Excel y texto',

  maxTokens: 1024,
  temperature: 0.4, // baja = respuestas más consistentes (útil para clasificar casos)
  // true = el modelo "piensa" antes de responder (más lento, a veces mejor)
  enableThinking: false,

  // Adjuntos: máximo de caracteres que se envían por documento y tamaño máximo por archivo
  maxDocChars: 60000,
  maxFileMB: 25,
};
