

// Select color input


// Select size input

// Functions for the group

function makeGrid() {   //builds grid

      //set dimensions
      var rows = $('#inputHeight').val();
      var columns = $('#inputWidth').val();

      canvas.empty() //empty previous grid

      for (x = 0; x < rows; x++) { //create rows
        canvas.append('<tr></tr>');
      }

      lines = $('tr');
      for (y = 0; y < columns; y++) { //create columns
        lines.append('<td></td>');
      }
}
// When the size is submitted by the user, call makeGrid()
