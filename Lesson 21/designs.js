//set constants


// Select color input


// Select size input

$('input[type="submit"]').on('click', function(event){
  event.preventDefault();
  let columns = $('#inputWidth').val();
  let rows = $('#inputHeight').val();
  $('#pixelCanvas').empty();
  makeGrid(columns, rows);
});
// When size is submitted by the user, call makeGrid()


//function to makeGrid
function makeGrid(columns, rows) {

  for (x = 0; x < rows; x++) {  //create rows
        $('#pixelCanvas').append($("<tr></tr>"));

    for (let y = 0; y < columns; y++) { //create columns
      $('tr').last().append($("<td></td>"));
    }
  }
}
