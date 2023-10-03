let box = $(".box");

box.width(700);

box.append(
  "Largura: ",
  box.width(),
  "<br>",
  "largura + padding:",
  box.innerWidth(),
  "<br>",
  "largura + padding + borda:",
  box.outerWidth(),
  "<br>",
  "largura + padding + borda + margem:",
  box.outerWidth(true)
);
