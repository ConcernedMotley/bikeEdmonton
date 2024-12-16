const testimoniesGrid = document.querySelector(".testimonies-grid"); // Correct selector

fetch("./resources/testimonies.json") // Ensure correct path to your JSON file
  .then((res) => res.json()) // Parse the JSON response
  .then((data) => {
    data.forEach((testimony) => {
      testimoniesGrid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="testimonies-card">
            <img src="${testimony.image}" alt="#" class="hideInMobile">
            <p class="small-body">${testimony.text}</p>
            <p class="bold-body">-${testimony.author}</p>
        </div>
        `
      ); // Replace content dynamically
    });
  })
  .catch((error) => console.error("Error loading testimonies:", error)); // Handle any errors
