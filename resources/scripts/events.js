const eventGrid = document.querySelector(".events-grid"); // Correct selector

fetch("./resources/events.json") // Ensure correct path
  .then((res) => res.json()) // Parse JSON response
  .then((data) => {
    data.forEach((event) => {
      eventGrid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="event-card">
            <div class="event-image"><img src="${event.image}" alt="#"></div>
            <div>
              <p class="bold-body">${event.title}</p>
              <p class="body-reg">${event.time}</p>
            </div>
        </div>
        `
      ); // Replace content dynamically
    });
  });
