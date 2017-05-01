window.onload = () => {
  /* 時限設定 */
  var year = 2017;
  var month = 5;
  var date = 2;
  var hour = 0;
  var minute = 49;

  var wbTimer = document.getElementById('wb-timer');
  var wbBenefit = document.getElementById('wb-benefit');
  wbTimer.style = 'display:none';
  wbBenefit.style = 'display:none';

  function format(limit, time) {
    var t1 = Math.floor((limit - time) / (24 * 60 * 60 * 1000));
    var t2 = Math.floor(((limit - time) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var t3 = Math.floor(((limit - time) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var t4 = Math.floor(((limit - time) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var t5 = Math.floor(((limit - time) % (24 * 60 * 60 * 1000)) / 10) % 100;
    if (t3 < 10) t3 = '0' + t3;
    if (t4 < 10) t4 = '0' + t4;
    if (t5 < 10) t5 = '0' + t5;
    return `受け付け終了まで残りあと${t1}日と${t2}時間${t3}分${t4}秒${t5}`;
  }
  function timer(limit) {
    today = new Date().getTime();
    if (0 < (limit - today)) {
      wbTimer.innerHTML = format(limit, today);
      wbTimer.style = 'display:block';
      wbBenefit.style = 'display:none';
      setTimeout(() => { timer(limit); }, 10);
    } else {
      wbTimer.style = 'display:none';
      wbBenefit.style = 'display:block';
    }
  }
  function setLimit(year, month, date, hour, minute) {
    var limit = new Date();
    limit.setYear(year);
    limit.setMonth(month - 1);
    limit.setDate(date);
    limit.setHours(hour);
    limit.setMinutes(minute);
    limit.setSeconds(0);
    limit.setMilliseconds(0);
    return limit.getTime();
  }
  timer(setLimit(year, month, date, hour, minute));
}

