QUnit.test( "Attribute tests", function( assert ) {
  assert.notOk($("#noAttributes").hasAttr("whatever"), "No attribute");
  assert.ok($("#attributeNoValue").hasAttr("draggable"), "Attribute no value");
  assert.ok($("#attributeWithValue").hasAttr("class"), "Attribute with value");
});

QUnit.test( "Data attribute tests", function( assert ) {
  assert.ok($("#dataAttributeNoValue").hasData("test"), "data without value");
  assert.notOk($("#dataAttributeNoValue").hasData("testtestets"), "not existing data");
  assert.ok($("#dataAttributeValue").hasData("test"), "data with value");
  assert.ok($("#dataCamelCaseNoValue").hasData("testAttribute"), "camelcase data without value");
  assert.ok($("#dataCamelCaseValue").hasData("testAttribute"), "camelcase data with value");
});