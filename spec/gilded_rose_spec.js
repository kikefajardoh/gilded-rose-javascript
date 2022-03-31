const { expect } = require("@jest/globals");

const { Item, update_quality } = require("../src/gilded_rose");

describe("Conjured Mana Cake", function() {
  it("Should decrease the conjured item quality twice as fast as normal items", function() {
    const items = [new Item('Conjured Mana Cake', 50, 10)];
    const returnedItems = update_quality(items);
   
    expect(returnedItems[0]).toHaveProperty('sell_in', 49);
    expect(returnedItems[0]).toHaveProperty('quality', 8);
  });

  it("Should decrease the conjured item quality to zero", function () {
    const items = [new Item('Conjured Mana Cake', 50, 1)];
    const returnedItems = update_quality(items);
    
    expect(returnedItems[0]).toHaveProperty('sell_in', 49);
    expect(returnedItems[0]).toHaveProperty('quality', 0);
  });

  it("Should not decrease conjured item quality", function () {
    const items = [new Item('Conjured Mana Cake', 50, 0)];
    const returnedItems = update_quality(items);
    
    expect(returnedItems[0]).toHaveProperty('sell_in', 49);
    expect(returnedItems[0]).toHaveProperty('quality', 0);
  });

  it("Should decrease the conjured item quality twice when 'sell_id' is lower than zero", function () {
    const items = [new Item('Conjured Mana Cake', -1, 10)];
    const returnedItems = update_quality(items);
    
    expect(returnedItems[0]).toHaveProperty('sell_in', -2);
    expect(returnedItems[0]).toHaveProperty('quality', 6);
  });
});
