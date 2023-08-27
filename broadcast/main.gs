// LINE Message API アクセストークン
const ACCESS_TOKEN = ${ ACCESS_TOKEN };
// 曜日設定用の配列
const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
// テキスト本文
var messageText01 = "";
var messageText02 = "\nそろそろ起きろ!!";
var messageText03 = "\n";
// 時間指定
const Hours = 7;
const Minutes = 10;

function broadcast() {
  // メッセージ設定
  const today = getToday();
  messageText01 = "今日は" + dayOfWeek[today] + "曜日";
  if (today == 0 || today == 6) {
    messageText03 = "";
  } else {
    messageText03 += "仕事頑張れ!!";
  }
  const broadcastMessage = messageText01 + messageText02 + messageText03;
  // メッセージ送信
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/broadcast", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ACCESS_TOKEN,
    },
    payload: JSON.stringify({
      messages: [
        {
          type: "text",
          text: broadcastMessage,
        },
      ],
    }),
  });
}

// 指定時間にトリガーセット
function setTrigger() {
  const time = new Date();
  time.setHours(Hours);
  time.setMinutes(Minutes);
  ScriptApp.newTrigger("broadcast").timeBased().at(time).create();
}

// 曜日取得
function getToday() {
  const date = new Date();
  const dayOfWeek = date.getDay(); // 0：日, 1：月, 2：火, 3：水, 4：木, 5：金, 6：土
  return dayOfWeek;
}
