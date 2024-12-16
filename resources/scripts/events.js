const eventGrid = document.querySelector(".events-grid"); // Correct selector

fetch("./resources/events.json") // Ensure correct path
  .then((res) => res.json()) // Parse JSON response
  .then((data) => {
    data.forEach((event) => {
      eventGrid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="event-card">
            <img src="resources/images/intro-maint.jpg" alt="#">
            <p class="bold-body">${event.title}</p>
            <p class="body-reg">${event.time}</p>
        </div>
        `
      ); // Replace content dynamically
    });
  });
