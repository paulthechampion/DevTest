// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { isValidWalk } from "./main";


// TODO Add your tests here
describe("example", function() {
  it("test", function() {
    assert.equal(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
    assert.equal(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
    assert.equal(isValidWalk(['w']), false);
    assert.equal(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);
  });
});