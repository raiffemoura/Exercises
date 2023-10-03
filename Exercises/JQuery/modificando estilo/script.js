// setTimeout(() => {
//   $("h1").addClass("bg-blue");
// }, 1000);

// setTimeout(() => {
//   $("h1").removeClass("bg-blue");
// }, 2000);
setTimeout(() => {
  $("h1").toggleClass("bg-blue");
}, 1000);

setTimeout(() => {
  $("h1").toggleClass("bg-blue");
}, 2000);

$("h1").css({ "font-size": 50, "font-style": "italic" });
