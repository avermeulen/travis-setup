const assert = require("assert");
const hello_world = require("./hello_world");

describe("Hello world", function () {
	it("should greet the world", function () {
		assert.equal("hello world!", hello_world());
	});
});