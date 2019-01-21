$(document).ready(function()
{

//var testemonies = {};

var listOfTestemonies = ["0 Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.","1 Great experience!","2 Quis iaculis nulla iaculis vitae.","3 perfect", "4 super services and quick"];
console.log("Number of testemonies: " + listOfTestemonies.length)
var i=0;
console.log("current i: "+i)
// lets the testimonials slide to the left
var slideLeft = function() {
  // change p content with the list element of listOfTestemonies
      if (i>0)
      {
          var selection = listOfTestemonies[i];
          console.log("i: "+i +selection);
          console.log("length list:" + listOfTestemonies.length);
          $("#testemonial-content").text( selection );
          i=i-1;
      } else {
          var selection = listOfTestemonies[-i];
          console.log("i: "+i+selection);
          $("#testemonial-content").text( selection );
          i=i+(listOfTestemonies.length-1);
      }
};

var slideRight = function() {
  // change p content with the list element of listOfTestemonies
      if (i>=0 && i<(listOfTestemonies.length))
      {
          var selection = listOfTestemonies[i];
          console.log("length list:" + listOfTestemonies.length);
          $("#testemonial-content").text( selection );
          i=i+1;
          console.log("i is: "+i +" "+selection);
      } else if (i>listOfTestemonies.length-1){
          i=i-(listOfTestemonies.length-1);
          console.log("check" + "new i: " + i)
          var selection = listOfTestemonies[i-1];
          console.log("i larger: "+i+" "+selection);
          $("#testemonial-content").text( selection );
      }
};

// moves testimonals to the left
$("#triangle-left").click(slideLeft);
// moves testimonals to the right
$("#triangle-right").click(slideRight);

// sets the initial first testemonial on website
$("#testemonial-content").text( listOfTestemonies[1]);

}); // end js document
