function updateNigeriaTime() {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      const d = document.getElementById('nigeria-time');
      const m = document.getElementById('nigeria-time-mobile');
      if (d) d.textContent = time;
      if (m) m.textContent = time;
    }
    updateNigeriaTime();
    setInterval(updateNigeriaTime, 1000);