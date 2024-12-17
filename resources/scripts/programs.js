const eventGrid = document.querySelector("#programs-grid"); // Correct selector

fetch("./resources/events.json") // Ensure correct path
  .then((res) => res.json()) // Parse JSON response
  .then((data) => {
    data.forEach((event) => {
      eventGrid.insertAdjacentHTML(
        "beforeend",
        `

        <div id="programs-grid">

            <!-- PROGRAMS CARD -->
                <div class="position-relative programs-card">

                <div class="programs-card-image">
                    <img alt="programs" src="${event.image}" >
                </div>

                <div class="programs-card-content">
                    <div>${event.time}</div>
                    <div class="bold-body">${event.title}</div>
                </div>

                <!-- ICONS -->
                <div class="programs-icons hideInMobile">

                    <img alt="favorite" src="./resources/images/favorite.svg">
                    <img alt="attend" src="./resources/images/attend.svg">
                    <img alt="don't attend" src="./resources/images/dontAttend.svg">

                </div>

                </div>

        </div>
        `
      ); // Replace content dynamically
    });
  });
