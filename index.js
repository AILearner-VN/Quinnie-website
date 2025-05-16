function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB', { hour12: false }); // 24h format
  document.getElementById('clock').textContent = timeString;

  // Kiểm tra báo thức
  const alarmTime = localStorage.getItem('alarmTime');
  if (alarmTime && timeString.startsWith(alarmTime)) {
    triggerAlarm();
  }
}

setInterval(updateClock, 1000);

// Đặt báo thức
function setAlarm() {
  const alarmInput = document.getElementById('alarm-time').value;
  if (alarmInput) {
    localStorage.setItem('alarmTime', alarmInput);
    document.getElementById('alarm-status').textContent = `Alarm set for ${alarmInput}`;
  }
}

// Xoá báo thức
function clearAlarm() {
  localStorage.removeItem('alarmTime');
  document.getElementById('alarm-status').textContent = 'Alarm cleared.';
}

// Báo động
function triggerAlarm() {
  alert('⏰ Alarm Time!');
  // Có thể thay alert bằng âm thanh
  const alarmSound = new Audio('alarm.mp3'); // Đặt file trong cùng thư mục
  alarmSound.play();
  document.body.style.backgroundImage = "url('background3.jpg')";
  setTimeout(() => {
    document.body.style.backgroundImage = "url('background2.jpg')";
  }, 10000);

  // Chỉ báo 1 lần
  clearAlarm();
}
