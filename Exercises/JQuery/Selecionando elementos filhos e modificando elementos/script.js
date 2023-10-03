// $("#lista1 > .item2").hide();

// ou

let lista1 = $("#lista1");
// lista1.find(".item2").hide();

//ou

// lista1.children().fadeOut();

console.log($("#lista1").html());

console.log($("#lista1").text());

console.log($("#novo").val());

console.log($("#novo").attr("name"));

$("#lista3").find(".item2").html("Novo Item 2");

$("#lista3").find(".item3").text("Novo Item 3");

$("#novo").val("O valor foi alterado.");
