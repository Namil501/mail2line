# mail2line
特定のメールをラインに通知する

# 事前準備
1. ライン公式アカウント作成
   1. line developerからプロバイダー作成
   2. Messaging API作成
   3. チャンネル作成
2. google apps scriptを管理するアカウント
3. 特定のメールを受けるgmailのアカウント
# 設定
1. google apps scriptから新規プロジェクト作成
2. Code.gs, SetScriptProperties.gsをコピー
3. SetScriptProperties.gsにLINE_TOKENとMAIL_ADDRESSを設定
   - LINE_TOKENは事前準備１から作成したチャンネルのMessaging APIのチャネルアクセストークンである。
      - ない場合は新規発行する。
   - MAIL_ADDRESSはラインに通知したいメールのメールアドレスである。
4. google apps scriptからsetScriptPropertiesを実行
5. Code.gsのcreateTriggerを実行