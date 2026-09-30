// ============================================================================
//  CONTEXTO PÚBLICO DEL ASISTENTE — Mesa de Ayuda
//  Lo que sabe el asistente y cómo responde (identidad, tono, catálogo,
//  prioridades, equipos, reglas…) está en prompt.md: lo pone server.py en cada
//  consulta, así no es público ni se puede cambiar desde el navegador.
//  Aquí solo queda lo que resuelve el propio navegador:
//   - preguntas con respuesta fija (se contestan sin consultar al modelo)
//   - sugerencias que se muestran al abrir el asistente
// ============================================================================
window.OMLX_CONTEXT = {

  preguntas: [
    {
      si: ['estado de mi ticket', 'estado de mi solicitud', 'estado de mi caso', 'numero de ticket', 'seguimiento'],
      responder: 'Desde aquí no puedo consultar el estado de tickets. Escribe a **contactoweb@wodobox.com** indicando tu número de ticket (TCK-…) y te informarán. Si necesitas hacer un nuevo pedido, cuéntame.',
      fija: true,
    },
  ],

  sugerencias: [
    'Tengo un problema con un sistema',
    'Necesito una licencia (Power BI, Excel…)',
    'Quiero acceso a Jira o a la VPN',
    'Necesito instalar un software',
  ],
};
