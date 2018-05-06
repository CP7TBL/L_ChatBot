

document.addEventListener('DOMContentLoaded', function() {
  LBot.prototype.catchAll = { action: function(robot, msg) {
	  //隨機回應
    var randomMsg = [
      '在非洲，每隔一分鍾，就有六十秒過去',
      '把眼睛蒙上後，不知爲何，什麼都看不見了',
      '台灣人在睡覺時，大多數的美國人都讀英文，難怪台灣人英文不好',
      '太神啦~~ 聊天室7起來 77777777',
      '你一天省下買一杯奶茶的錢，十天後就能買十杯奶茶了',
      '當你的左臉被人打，那你的左臉就會痛',
      '依你的知識水平，我很難跟你解釋這個問題',
      '你想知道什麼？',
      '你到底想怎樣?',
      '多少人踩在巨人的肩膀上享受一切，從不凡的高度-看事情，感覺就像自己在天上飛一樣。'
    ];
    var msgLen = randomMsg.length;
    robot.send(randomMsg[Math.floor(Math.random() * msgLen)]);
  }};

  
  
/* 
  SaihuBot.prototype.responses.push(
    { name: 'map1', rule: /地圖/i, action: function(robot, msg) {
      var img = document.createElement('img');
      img.src = '';
      robot.chatHistory.push(img);
      robot.render();
    }});
	
  SaihuBot.prototype.responses.push(
    { name: 'map2', rule: /活動/i, action: function(robot, msg) {
      var img = document.createElement('img');
      img.src = 'http://i.imgur.com/zfiQt0o.png';
      robot.chatHistory.push(img);
      robot.render();
    }});
*/
	
	
  LBot.prototype.responses.push(
    { name: 'question', rule: /錯誤回報*/i, action: function(robot, msg) {
      robot.confirm('怎麼了???',
        ['如果有哪裡 錯誤或建議 請點此連結告知 感謝', function() {
          robot.send('請將錯誤或建議回報到 https://goo.gl/9qxHWb');
          robot.render();
          window.location = 'https://goo.gl/9qxHWb';
        }]
      );
    }});

	
	
/*	
  SaihuBot.prototype.responses.push(
    { name: 'map', rule: /地圖*|map/i, action: function(robot, msg) {
      var img = document.createElement('img');
      robot.confirm('請問你想看哪個地圖?',
        ['* 人文館', function() {
          img.src = 'http://i.imgur.com/yOoxARF.png';
          robot.chatHistory.push(img);
          robot.render();
        }],
        ['* 活動中心', function() {
          img.src = 'http://i.imgur.com/zfiQt0o.png';
          robot.chatHistory.push(img);
          robot.render();
        }]
      );
    }});
*/
	
/*
  SaihuBot.prototype.responses.push(
    { name: 'go', rule: /首頁|home*|議程*|schedule/i, action: function(robot, msg) {
      robot.confirm('前往 Coscup 網站', ['前往網站', function() {
          robot.send('開啟 Coscup 網站 http://coscup.org/2016/schedules.html');
          robot.render();
          window.location = 'http://coscup.org/2016/schedules.html';
        }]
      );
    }});       


  SaihuBot.prototype.responses.push(
    { name: 'go', rule: /贊助*|sponsor/i, action: function(robot, msg) {
      robot.confirm('前往 Coscup 贊助連結', ['前往網站', function() {
          robot.send('開啟 Coscup 贊助連結 http://coscup.org/2016/sponsors.html');
          robot.render();
          window.location = 'http://coscup.org/2016/sponsors.html';
        }]
      );
    }});

	
  SaihuBot.prototype.responses.push(
    { name: 'stand', rule: /攤位*|stand/i, action: function(robot, msg) {
      robot.confirm('stand', ['顯示攤位資訊', function() {
          robot.send('顯示攤位資訊 http://blog.coscup.org/2016/08/coscup-2016.html');
          robot.render();
          window.location = 'http://blog.coscup.org/2016/08/coscup-2016.html';
        }]
      );
    }});
*/


});

