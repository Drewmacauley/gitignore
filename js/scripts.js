function add(num1,num2) {
  return num1 + num2;
}

$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side2 === side3) {
      $("#results").text("equilateral"); 
    } else if (add(side1, side2) <= side3 || add(side1, side3) <= side2 || add(side2, side3) <= side1) {
      $("#results").text("NOT a triangle");
    } else if (side1 === side2 && side2 !== side3 || side2 === side3 && side1 !== side2 || side1 === side3 &&  side2 !== side3) {
      $("#results").text("isosceles");
    } else if (side1 !== side2 && side2 !== side3) {
      $("#results").text("scalene");
    }
    
    event.preventDefault();
  }); 
});
