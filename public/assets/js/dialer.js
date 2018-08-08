
// console.log(btnVal); - pattern="-?[0-9]*(\.[0-9]+)?"
var btnVal;
var btnInput = "";
var inputArr = [];


$(".numBtn").click(function() {
    btnVal = $(this).data("value");
    btnInput += btnVal;
    parseInt(btnInput);
    console.log(btnInput);
    console.log(btnVal);
    inputArr.push(btnInput);
    console.log(inputArr);
    console.log(inputArr[inputArr.length-1]);
    $("#phoneNumField").val(inputArr[inputArr.length-1]);
});




