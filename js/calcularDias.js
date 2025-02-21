// Código JavaScript para calcular los días, horas, minutos y segundos hasta el cumpleaños
document.addEventListener("DOMContentLoaded", function () {
  
    var selectedDate = new Date("April 05, 2025 15:00:00 GMT-0000");
    var currentDate = new Date();
    var timeZoneOffset = currentDate.getTimezoneOffset();
    var timeDiff = selectedDate.getTime() + timeZoneOffset * 60 * 1000 - currentDate.getTime();

    function updateCounter() {
      var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      var hoursDiff = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
      var minutesDiff = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      var secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Actualizar los contadores de días, horas, minutos y segundos
      document.getElementById('daysCount').textContent = daysDiff;
      document.getElementById('hoursCount').textContent = hoursDiff;
      document.getElementById('minutesCount').textContent = minutesDiff;
      document.getElementById('secondsCount').textContent = secondsDiff;

      // Restar 1 segundo
      timeDiff -= 1000;

      // Si aún no ha llegado la fecha, programar la actualización para el próximo segundo
      if (timeDiff > 0) {
        setTimeout(updateCounter, 1000);
      }
    }
    // Iniciar la cuenta regresiva
    updateCounter();
  });