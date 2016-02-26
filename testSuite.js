(function() {
	function assert(boolValue, comment) {
		var testResultNode = document.createElement("li");
		testResultNode.className = boolValue ? "pass" : "fail";
		testResultNode.appendChild(
			document.createTextNode(comment + " is " + boolValue.toString())
		);
		document.getElementById("testSuite").appendChild(testResultNode);
	};
	assert(true, "swimming");
	assert(false, "jumpping");
}());