// ------------------------------------------------------------------------
// Trips Array
// ------------------------------------------------------------------------

const arrTrips = [
    {
      destination: "Barcelona",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Barcelona.png",
      type: "Single Destination",
      departure: "2023-03-25",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Genoa",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Genoa.png",
      type: "Single Destination",
      departure: "2023-03-30",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Marseilles",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Marseilles.png",
      type: "Single Destination",
      departure: "2023-04-04",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Messina",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Messina.png",
      type: "Single Destination",
      departure: "2023-04-09",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Naples",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Naples.png",
      type: "Single Destination",
      departure: "2023-04-14",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Valletta",
      price: 6500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Single Destination",
      departure: "2023-04-19",
      duration: "5 Days",
      durationType: "short"
    },
    {
      destination: "Barcelona, Genoa, Marseilles",
      price: 15000,
      region: "Mediterranean",
      image: "Mediterranean-Barcelona.png",
      type: "Multi Destinations",
      departure: "2023-03-25",
      duration: "14 Days",
      durationType: "long"
    },
    {
      destination: "Messina, Naples, Valletta",
      price: 15000,
      region: "Mediterranean",
      image: "Mediterranean-Barcelona.png",
      type: "Multi Destinations",
      departure: "2023-04-19",
      duration: "14 Days",
      durationType: "long"
    },
    {
      destination: "Barcelona",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Barcelona.png",
      type: "Round Trip",
      departure: "2023-03-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Genoa",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Genoa.png",
      type: "Round Trip",
      departure: "2023-04-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Marseilles",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Marseilles.png",
      type: "Round Trip",
      departure: "2023-05-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Messina",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Messina.png",
      type: "Round Trip",
      departure: "2023-06-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Naples",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Naples.png",
      type: "Round Trip",
      departure: "2023-07-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Valletta",
      price: 45000,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Round Trip",
      departure: "2023-08-25",
      duration: "30 Days",
      durationType: "long"
    },
    {
      destination: "Barcelona",
      price: 500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Row Boat Special",
      departure: "2023-01-25",
      duration: "2 Hours",
      durationType: "short"
    },
    {
      destination: "Genoa",
      price: 500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Row Boat Special",
      departure: "2023-02-25",
      duration: "2 Hours",
      durationType: "short"
    },
    {
      destination: "Marseilles",
      price: 500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Row Boat Special",
      departure: "2023-09-25",
      duration: "2 Hours",
      durationType: "short"
    },
    {
      destination: "Messina",
      price: 500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Row Boat Special",
      departure: "2023-10-25",
      duration: "2 Hours",
      durationType: "short"
    },
    {
      destination: "Naples",
      price: 500,
      region: "Mediterranean",
      image: "Mediterranean-Valletta.png",
      type: "Row Boat Special",
      departure: "2023-11-25",
      duration: "2 Hours",
      durationType: "short"
    },
  ];

  let appliedFilter = "";
  let appliedSort = "A to Z"; "lowest to highest";

// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

$(document).ready(function(){
  
  console.log("Hello");

  // ------------------------------------------------------------------
  // Home

  // When the document loads, change CorporateVentures to "welcome to CorporateVentures"
  $("#offcanvasNavbarLabel").text("Welcome to CorporateVentures");

  // ------------------------------------------------------------------
  // Trips Page

  filterSortTrips();

});

// ------------------------------------------------------------------------
// Load all trips
// ------------------------------------------------------------------------

function loadTrips(tripsToShow) {

    // Clear all elements inside the trips cards container
  
    $("#tripsContainer").empty();
  
    // Loop through trips
  
    for (let i = 0; i < tripsToShow.length; i++) {
      const trip = tripsToShow[i];
      
      console.log(trip.destination);
  
      // 1: Select the trips container and add the current array trip to it
      $("#tripsContainer").append($("#tripCardTemplate").html());
  
      // 2: Create a variable that contains the most recently added trips card
      let currentChild = $("#tripsContainer").children().eq(i);
  
      // 3: Set the content for the current plant card from the plant array
      $(currentChild).find("#destinationText").text(trip.destination);
      $(currentChild).find("#regionText").text(trip.region);
      $(currentChild).find("#priceText").text(trip.price);
      $(currentChild).find("#durationText").text(trip.duration);
      $(currentChild).find("#dateText").text(trip.departure);
      $(currentChild).find(".card-img-top").attr('src','assets/' + trip.image);
  
      // 4: Hide the Purchase ticket Button from the current card
      $(currentChild).find("#purchaseButton").hide();
    }
  
  };

// ------------------------------------------------------------------------
// When a filter or sort is clicked
// ------------------------------------------------------------------------

$("input[name='filterDropdown']").click(function() {
  appliedFilter = $(this).attr('value');
});

$("input[name='filterDropdown']").click(function() {
  appliedSort = $(this).attr('value');
});

function filterSortTrips() {

  let filteredSortedArrTrips = [];

  // Filter Trips

  if (appliedFilter){
    filteredSortedArrTrips = arrTrips.filter(trip => trip.type == appliedFilter);
  } else {
    filteredSortedArrTrips = arrTrips;
  }
  
  // Sort Trips

  if (appliedSort == "lowest to highest") {

    // Sort the trips from lowest to highest price
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
      return a.price - b.price
    });
  } else if (appliedSort == "A to Z"){

    // Sort the trips Alphbetically, from A to Z
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
      return a.destination - b.destination
    });
  }

  loadTrips(filteredSortedArrTrips);
}

// ------------------------------------------------------------------------
// When hovering over card
// ------------------------------------------------------------------------

$("#tripsContainer").on('hover','.card', function() {

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#purchaseButton").toggle();

});