function sendLineBotNotify(message) {
  var scriptProperties = PropertiesService.getScriptProperties();
  var token = scriptProperties.getProperty('LINE_TOKEN');
  
  var url = "https://api.line.me/v2/bot/message/broadcast";
  
  var payload = {
    "messages": [{
      "type": "text",
      "text": message
    }]
  };
  
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "headers": {
      "Authorization": "Bearer " + token
    }
  };
  
  UrlFetchApp.fetch(url, options);
}

function notifyGmail() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var emailAddress = scriptProperties.getProperty('EMAIL_ADDRESS');

  var threads = GmailApp.search('from:' + emailAddress + ' is:unread');
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      if (!message.isUnread()) continue;
      var subject = message.getSubject();
      var body = message.getPlainBody();
      sendLineBotNotify("新しいメール: " + subject + "\n\n" + body);
      message.markRead();
    }
  }
}

function createTrigger() {
  ScriptApp.newTrigger('notifyGmail')
    .timeBased()
    .everyMinutes(5)
    .create();
}
