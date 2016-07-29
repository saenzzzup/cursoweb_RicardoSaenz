$( document ).ready( function(){

  $(".button-collapse").sideNav();

  $("#crear").click(crearTickets);

});


function crearTickets() {

  for (i = 1; i < 9; i++) {

    if ($("#mesa"+i).is(":checked")){
      var ticketGenrado = '<div class="ticketFinal"><h3> MESA ' + i + '</h3>';
      var total = 0;
    }
  }

  for (i = 1; i < 9; i++) {
    if ($("#test"+i).is(":checked")){
      ticketGenrado += "<p> Platillo " + i + "</p>";
       total += parseInt($("#test"+i).attr('class'));

    }
  }

  $("#Ticket").append(ticketGenrado + "<br> TOTAL: $" + total + "<br><br><br><br></div>");
}