var shape = require("../index.js");
require('should');

describe("Shape", function() {
  it("Se crea correctamente la clase Shape", function() {
    var figura = new shape({ width: 100, height: 100 });

    figura.options.width.should.equal(100);
  })
});
