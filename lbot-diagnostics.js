'use strict';
// addon that provide confirm dialog function
document.addEventListener('DOMContentLoaded', function() {
  LBot.prototype.responses.push(
    { name: 'ping', rule: /PING$/i, action: function(robot, msg) {
      robot.send('PONG');
    }});
  
  
  
  // 回聲 使用者輸入 : ECHO XXXXX  XXXXX=任意訊息
  LBot.prototype.responses.push(
    { name: 'echo [string]', rule: /ECHO (.*)$/i, action: function(robot, msg) {
      robot.send(msg);
    }});
  
  
  
  LBot.prototype.responses.push(
    { name: 'time', rule: /TIME$|時間/i, action: function(robot, msg) {
      robot.send('現在時間為 ' + new Date());
    }});
});
