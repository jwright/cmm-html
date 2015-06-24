function Repeater(selector) {
  this.selector = selector;
  this.repeatabeContent = $(this.selector);
  this.parent = this.repeatabeContent.parent();
};

Repeater.prototype.append = function(html) {
  this.parent.append(html[0].outerHTML);
};

Repeater.prototype.clear = function() {
  this.parent.empty();
};

Repeater.prototype.interrupt = function(index, content) {
  this.interruptionIndex = index;
  this.interruptionContent = content;
  return this;
};

Repeater.prototype.interruptWith = function(html) {
  html.children("span").text(this.interruptionContent);
};

Repeater.prototype.repeat = function(repeatCount) {
  this.clear();

  var repeater = this;
  for(i = 1; i <= repeatCount; i++) {
    var html = repeater.repeatabeContent.clone();
    if (repeater.shouldInterrupt(i)) {
      repeater.interruptWith(html);
    }
    repeater.append(html);
  }
};

Repeater.prototype.shouldInterrupt = function(index) {
  return index % this.interruptionIndex === 0;
};

$(function() {
  function repeatContent(repeatCount) {
    new Repeater("[data-behavior~=repeatable-content]").interrupt(5, "Hello, Jon").repeat(repeatCount);
  };

  repeatContent(300);
});
