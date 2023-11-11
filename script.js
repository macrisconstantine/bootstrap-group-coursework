// When the document is ready, execute the following code
$(document).ready(function() {

  // Define an array to store data with default items
  const data = [
      { game: 'The Witcher 3', rating: 100},
      { game: 'Super Smash Bros 64', rating: 99},
      { game: 'Ocarina of Time', rating: 98 },
      { game: 'Majora\'s Mask', rating: 97 },
      { game: 'Minecraft', rating: 95},
      { game: 'World of Warcraft', rating: 90},
      { game: 'Counter Strike', rating: 90 },
      { game: 'League of Legends', rating: 50}
  ];

  // Select elements from the HTML
  const dataForm = $('#dataForm'); // Form input for adding new data
  const dataList = $('#dataList'); // Table to display data
  updateTable(); // Call the function to initialize the table with default data
  
  // When the form is submitted, execute the following code
  dataForm.submit(function(event) {
      event.preventDefault(); // Keep the page from refreshing on submit
      const game = $('#game').val(); // Take the data from the form inputs
      const rating = $('#rating').val();
      data.push({ game, rating }); // Add new data to the array
      appendRow(data.length, game, rating); // Append a new row to the table
      sortDataByRating(); // Sort data by rating
      dataForm[0].reset(); // Clear the input
      dataTable.clear().rows.add(data).draw(); // Update DataTable with new data
  });

  // Function to append a new row to the table
  function appendRow(index, game, rating) {
      dataList.append(`
          <tr>
              <td>${index}</td>
              <td>${game}</td>
              <td>${rating}</td>
              <td><button class="btn btn-danger delete">Delete</button></td>
          </tr>
      `);
  }

  // When the delete button is clicked, execute the following code
  dataList.on('click', '.delete', function() {
      const row = $(this).closest('tr');
      const index = row.index();
      data.splice(index, 1); // Remove data from the array
      row.remove(); // Remove the row from the table
      updateIndexColumn(); // Update the rank column to reflect the changes
      dataTable.clear().rows.add(data).draw(); // Re-draws the table
  });

  // Function to update the rank/index column in the table
  function updateIndexColumn() {
      dataList.find('tr').each(function(index) {
          $(this).find('td:first').text(index + 1); // Update the index column
      });
  }

  // Sort the data array by game name
  function sortDataByGame() {
      data.sort((a, b) => a.game.localeCompare(b.game));
      updateTable();
  }

  // Sort the data array by rating
  function sortDataByRating() {
      data.sort((a, b) => b.rating - a.rating);
      updateTable();
  }

  // Function to update the table based on the sorted data
  function updateTable() {
      dataList.empty(); // Clear the existing table rows
      data.forEach((item, index) => {
          appendRow(index + 1, item.game, item.rating); // Append rows to the table
      });
  }

  // Add the sort functions as on click methods to the respective table headers
  $('#gameList th:nth-child(2)').on('click', function() {
      sortDataByGame();
  });

  $('#gameList th:nth-child(3)').on('click', function() {
      sortDataByRating();
  });

  // Set custom image transition for carousel in the About page
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 6000;
});

// When scrolling is detected, execute the following code
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  var topnav=document.getElementById("menu-bar");
  var dropdown=document.getElementById("menu-btn");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) { // If scrolling is detected then:
      topnav.style.transform= "scale(0)"; // Scale top navigation bar to 0
      topnav.style.opacity=0; // Set opacity to 0

      dropdown.style.display="block"; // Set display property of dropdown button to "block" (display it)
      dropdown.style.transform= "scale(1)"; // Set scale to 1
      dropdown.style.opacity=1; // Set opacity to 1 to give the illusion of a very basic animation
  } else { // If scrolled to top then
      dropdown.style.transform= "scale(0.1)"; // Scale dropdown button to 0
      dropdown.style.opacity=0; // Set opacity to 0

      topnav.style.transform= "scale(1)"; // Set top nav bar scale to 1
      topnav.style.opacity=1; // Set opacity to 1 to give the illusion of a very basic animation
  }
}
