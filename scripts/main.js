$(function() {
  function repeatContent(repeatCount) {
    var content = $("[data-behavior~=repeat-content]");
    var parent = content.parent();
    parent.empty();

    for(i = 1; i <= repeatCount; i++) {
      var html = content.clone();
      if (i % 5 === 0) {
        html.children("span").text("Hello, Jon");
      }
      parent.append(html[0].outerHTML);
    }
  };

  repeatContent(300);
});
