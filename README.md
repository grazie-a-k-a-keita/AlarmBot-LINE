## AlarmBot LINE

GAS を使用した目覚まし Bot

### 設定方法

#### アラーム時間の設定

```js
// 時間指定
const Hours = 7; // 時
const Minutes = 10; // 分
```

#### アラームメッセージの設定

```js
if (today == 0 || today == 6) {
  // 土曜日、日曜日用のメッセージ
  messageText03 += "今日はいっぱい休みましょう!!";
} else {
  // 平日用のメッセージ
  messageText03 += "仕事頑張れ!!";
}
```

#### GAS のトリガーの設定

| 設定項目                           | 設定値                         |
| :--------------------------------- | :----------------------------- |
| 実行する関数を選択                 | setTrigger                     |
| デプロイ時に実行                   | Head                           |
| イベントソースを選択               | 時間主導型                     |
| 時間ベースのトリガーのタイプを選択 | 日付ベースのタイマー           |
| 時刻を選択                         | アラームしたい時間より前の時刻 |
