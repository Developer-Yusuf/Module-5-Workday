//CRITERIA

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// DEFINE VARIABLES
var saveBtn = $(".save");

// Display current date 
$("#today").text(moment().format('dddd MMMM Do YYYY'));

// Color-code each time block depending on the time
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var now = parseInt($(this).attr("id"));

        if (now > hour) {
            $(this).addClass("future");
        } else if (now === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Function to run save button for that time block
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // Save text for that event in local storage
    localStorage.setItem(time, plan);
});

// Get text from local storage
function usePlanner() {

    $(".hour").each(function() {
        var now = $(this).text();
        var Current_Plan = localStorage.getItem(now);

        if(Current_Plan !== null) {
            $(this).siblings(".plan").val(Current_Plan);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

timeBlockColor();
usePlanner();



