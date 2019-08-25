Translates a `message_id` query parameter into a proper `message://<message_id>` URI scheme. See https://daringfireball.net/2007/12/message_urls_leopard_mail for more details.

This is essentially translating form `http://` to `message://`. This is needed when using links in Trello, since Trello only supports `http` URIs 😔.
