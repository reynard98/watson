document.addEventListener("DOMContentLoaded", function() {
    const setReminderBtn = document.getElementById("setReminder");
    const setTargetBtn = document.getElementById("setTarget");
  
    setReminderBtn.addEventListener("click", function() {
      setReminderBtn.classList.add("active");
      setTargetBtn.classList.remove("active");
    });
  
    setTargetBtn.addEventListener("click", function() {
      setTargetBtn.classList.add("active");
      setReminderBtn.classList.remove("active");
    });
  
    // Add functionality for sliding the minute and hour if needed
  });
  