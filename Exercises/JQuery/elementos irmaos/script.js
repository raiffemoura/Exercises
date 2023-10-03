let selected = $("#div3").siblings();
console.log(selected);

selected = $("#div3").siblings("#div1 ");
console.log(selected);

selected = $("#div3").nextAll();
console.log(selected);

selected = $("#div3").nextAll("#div5");
console.log(selected);

selected = $("#div3").next();
console.log(selected);

selected = $("#div3").prev();
console.log(selected);

selected = $("#div3").prevAll();
console.log(selected);

selected = $("#div1").nextUntil("#div5");
console.log(selected);

selected = $("#div5").prevUntil("#div1");
console.log(selected);
