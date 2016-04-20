var tape = require("tape")
var babel = require("babel-core")
var path = require("path")
var fs = require("fs")

var file = fs.readFileSync(path.resolve(__dirname, "./source.fixture.js"))
var transformed = babel.transform(file, {
  presets: ["stage-0", "react"],
  plugins: ["./lib"]
}).code

console.log("TRANSFORMED CODE ", transformed)

tape("It should remove propTypes", function(test) {
  test.equal(transformed.indexOf("propTypes"), -1)
  test.end()
})
tape("It should not touch contextTypes, as React still uses it internally for functionality", function(test) {
  test.notEqual(transformed.indexOf("importantContextType"), -1)
  test.end()
})
tape("It should not break other pieces of the code.", function(test) {
  test.notEqual(transformed.indexOf("PropTypes"), -1)
  test.notEqual(transformed.indexOf("contextTypes"), -1)
  test.notEqual(transformed.indexOf("handleClick"), -1)
  test.notEqual(transformed.indexOf("render"), -1)
  test.end()
})

