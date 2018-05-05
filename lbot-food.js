'use strict';
// A區塊
document.addEventListener('DOMContentLoaded', function() {
  var csMsg = '豆漿半糖 + 飯糰夾蛋 + 鮪魚蛋餅  ';
  var wsMsg = '牛肉漢堡加蛋 + 大冰奶 + 巧克力厚片吐司';
  var mdMsg = '豬肉滿福堡加蛋 + 鬆餅 + 玉米湯 + 大麥克 + 薯條';
  var kfcMsg= '總匯歐姆蛋燒餅 + 嫩雞蛋堡 + 蛋塔 + 咖啡';
  var hsMsg = '紅番薯 + 蘋果 + 綜合蔬果汁 ';
  
  
  var piMsg = 'π＝3.1415926535897932384626433832795028........ ';
 // var
 // var
 // var

	
	
// B區塊
  LBot.prototype.responses.push(
    { name: 'pi', rule: /圓周率*|pi*/i, action: function(robot, msg) {
      robot.send(piMsg);
    }});
	
/*  
  SaihuBot.prototype.responses.push(
    { name: 'youbike', rule: /腳踏車*|bike/i, action: function(robot, msg) {
      robot.send(bikeMsg);
    }});
  SaihuBot.prototype.responses.push(
    { name: 'bus', rule: /公車*|bus/i, action: function(robot, msg) {
      robot.send(busMsg);
    }});
*/  

	
	
// C區塊	C連接A1~A4
  LBot.prototype.responses.push(
    { name: 'traffic', rule: /早餐*/i, action: function(robot, msg) {
      robot.confirm('請問你你要吃什麼類型的早餐?',
        ['*中式', function() {
          robot.send(csMsg);
          robot.render();
        }],
        ['*西式', function() {
          robot.send(wsMsg);
          robot.render();
        }],
        ['*麥當勞', function() {
          robot.send(mdMsg);
          robot.render();
        }],
        ['*肯德基', function() {
          robot.send(kfcMsg);
          robot.render();
        }],
        ['*養生', function() {
          robot.send(hsMsg);
          robot.render();
        }]
      );
    }});
});
