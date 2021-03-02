
import {assert} from "chai";
import { Connect4 } from "./main";

describe("Sample Tests", function() {
  it("Should pass sample tests", function() {
    let game;
    game = new Connect4();
    assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(0), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    
    game = new Connect4();
    assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")
    
    game = new Connect4();
    assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(4), "Column full!", "Should return 'Column full!'")
    
    game = new Connect4();
    assert.equal(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
    assert.equal(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
    assert.equal(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
    assert.equal(game.play(4), "Game has finished!", "Should return 'Game has finished!'")
  });
});