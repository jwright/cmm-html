function Repeater(selector) {
  this.selector = selector;
  this.repeatabeContent = $(this.selector);
  this.parent = this.repeatabeContent.parent();
};

Repeater.prototype.clear = function() {
  this.parent.empty();
};

Repeater.prototype.repeat = function(repeatCount) {
  var content = this.repeatabeContent;
  var parent = this.parent;
  for(i = 1; i <= repeatCount; i++) {
    var html = content.clone();
    if (i % 5 === 0) {
      html.children("span").text("Hello, Jon");
    }
    parent.append(html[0].outerHTML);
  }
};

$(function() {
  function repeatContent(repeatCount) {
    new Repeater("[data-behavior~=repeatable-content]").repeat(repeatCount);
  };

  repeatContent(300);
});
