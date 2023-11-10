$(document).ready(function() {
    // Define an array to store data
    const data = [];
    // const dataTable = $('#gameList').DataTable({
    //     searching: false, // Disable search bar
    //     paging: false, // Enable pagination
    //     ordering: true, // Enable sorting
    //     info: false, // Disable showing "Showing x of y entries"
        
    //     language: {
    //         emptyTable: "", // Set the empty table message to an empty string
    //         zeroRecords: ""
    //     } 

    // });

    // Select elements
    const dataForm = $('#dataForm');
    const dataList = $('#dataList');
  
    dataForm.submit(function(event) {
      event.preventDefault();
      const game = $('#game').val();
      const rating = $('#rating').val();
      data.push({ game, rating });
      appendRow(data.length, game, rating);
      dataForm[0].reset();
      dataTable.clear().rows.add(data).draw();
    });

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

    dataList.on('click', '.delete', function() {
      const row = $(this).closest('tr');
      const index = row.index();
      data.splice(index, 1);
      row.remove();

      updateIndexColumn();
      dataTable.clear().rows.add(data).draw();
    });

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
          appendRow(index + 1, item.game, item.rating);
        });
      }
  
      // Example: Call the sort functions when clicking on table headers
      $('#gameList th:nth-child(2)').on('click', function() {
        sortDataByGame();
      });
  
      $('#gameList th:nth-child(3)').on('click', function() {
        sortDataByRating();
      });

      //jquery script to set custom image transition for carousel in About page
      jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 6000;
});

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    var topnav=document.getElementById("menu-bar");
    var dropdown=document.getElementById("menu-btn");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) { // if scolling is detected then:
        topnav.style.transform= "scale(0)"; // scale top navigation bar to 0 and 
        topnav.style.opacity=0; // set opacity to 0

        dropdown.style.display="block"; // set display property of dropdown button to "block" (diplay it)
        dropdown.style.transform= "scale(1)"; //set scale to 1
        dropdown.style.opacity=1; //and opacity to 1 to give the illsuion of a very basic animation
    } else { //if scorlled to top then
        dropdown.style.transform= "scale(0.1)"; //scale dropdown button to 0 and 
        dropdown.style.opacity=0; //set opacity to 0

        topnav.style.transform= "scale(1)"; //set top nav bar scale to 1
        topnav.style.opacity=1; //and opacity to 1 to give the illsuion of a very basic animation
    }
}

function runningFormatter(value, row, index) {
    return index+1;
    }



// Wait for the page to load before starting the animation