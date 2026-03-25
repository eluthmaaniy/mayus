function updateNigeriaTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      timeZone: 'Africa/Lagos',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    const el = document.getElementById('nigeria-time-mobile');
    if (el) el.textContent = time;
  }

  updateNigeriaTime();
  setInterval(updateNigeriaTime, 1000);
