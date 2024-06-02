function setScriptProperties() {
  var scriptProperties = PropertiesService.getScriptProperties();
  // LINE_TOKEN : LINE Botのチャネルアクセストークン
  // MAIL_ADDRESS : 特定のメールアドレス
  scriptProperties.setProperties({
    'LINE_TOKEN': '',
    'MAIL_ADDRESS': ''
  });
}