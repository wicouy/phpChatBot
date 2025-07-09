# Chatbot Minimal para Drupal

Chatbot minimalista para Drupal que consume el endpoint de Vicubo Cloud y se muestra como una burbuja desplegable en la esquina inferior derecha.

## Instalación

1. Copia la carpeta `drupal_chatbot_minimal/` en `modules/custom/` de tu proyecto Drupal.
2. Activa el módulo desde la interfaz de administración o usando Drush:

   ```bash
   drush en drupal_chatbot_minimal -y
   ```

## Configuración de la API Key

1. Copia el archivo `drupal_chatbot_minimal.settings.php` como `drupal_chatbot_minimal.settings.local.php` en la misma carpeta del módulo.
2. Edita `drupal_chatbot_minimal.settings.local.php` y coloca tu API Key real:
   ```php
   return [
       'api_key' => 'TU_API_KEY_AQUI',
   ];
   ```
3. El módulo cargará automáticamente la clave desde este archivo y la enviará al frontend de forma segura usando `drupalSettings`.

> **Importante:** Nunca subas tu archivo `drupal_chatbot_minimal.settings.local.php` a un repositorio público.

## Uso

- El chatbot aparecerá como un ícono 🤖 en la esquina inferior derecha de todas las páginas del sitio.
- Haz clic en la burbuja para desplegar el chat.
- Escribe tu pregunta y presiona "Enviar" o la tecla Enter.
- El chatbot responderá usando el servicio de Vicubo Cloud.

## Personalización

- Puedes modificar los estilos en `css/chatbot.css`.
- Puedes editar la plantilla en `templates/chatbot.html.twig` si deseas cambiar la estructura del chat.

## Requisitos

- Drupal 10+
- jQuery (incluido por defecto en Drupal Core)

## Soporte

Para dudas o soporte, contacta a tu equipo de desarrollo o a soporte de Vicubo Cloud.
