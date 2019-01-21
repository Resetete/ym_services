$(document).ready(function()
{

//var testemonies = {};

var listOfTestemonies = ["Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.","Great experience!","Quis iaculis nulla iaculis vitae.","perfect", "super services and quick"];
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
      var selection = testemonies.listOfTestemonies[i];
      console.log(selection);
      $("#testemonial-content").text( selection );
      i=i+1;
};



$("#triangle-left").click(slideLeft);

$("#triangle-right").click(slideRight);

}); // end js document
