(function ($, drupalSettings) {
  $(document).ready(function () {
    if ($("#chatbot-toggle").length) return;

    const $toggle = $('<div id="chatbot-toggle">🤖</div>');
    const $container = $(
      `<div id="chatbot-container" class="hidden">
        <div id="chatbot-header">Chat Ayuda</div>
        <div id="chatbot-messages"></div>
        <div id="chatbot-input">
          <input type="text" id="chatbot-text" placeholder="Escribí tu pregunta..." />
          <button id="chatbot-send">Enviar</button>
        </div>
      </div>`
    );

    $("body").append($toggle).append($container);

    $toggle.on("click", function () {
      $container.toggleClass("hidden");
    });

    $container.find("#chatbot-send").on("click", function () {
      const question = $container.find("#chatbot-text").val();
      if (!question) return;

      $container
        .find("#chatbot-messages")
        .append(`<div class="user-msg">${question}</div>`);
      $container.find("#chatbot-text").val("");

      var apiKey =
        drupalSettings.drupal_chatbot_minimal &&
        drupalSettings.drupal_chatbot_minimal.apiKey
          ? drupalSettings.drupal_chatbot_minimal.apiKey
          : "";

      var settings = {
        url: "https://hub.vicubocloud.es/api/drupal-ai/ask/chat/completions",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        data: JSON.stringify({
          messages: [{ role: "user", content: question }],
          temperature: 0,
          maxTokens: 0,
        }),
      };

      $.ajax(settings)
        .done(function (data) {
          const respuesta =
            data?.choices?.[0]?.message?.content ?? "Error en la respuesta.";
          $container
            .find("#chatbot-messages")
            .append(`<div class="bot-msg">${respuesta}</div>`);
        })
        .fail(function () {
          $container
            .find("#chatbot-messages")
            .append(
              `<div class="bot-msg error">No se pudo conectar con el servicio.</div>`
            );
        });
    });

    $container.find("#chatbot-text").on("keypress", function (e) {
      if (e.which === 13) {
        $container.find("#chatbot-send").click();
      }
    });
  });
})(jQuery, drupalSettings);
