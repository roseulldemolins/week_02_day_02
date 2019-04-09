const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(() => {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('triceratops', 'omnivores', 15);
  });

  test('should have a species',  () => {
    expect(dinosaur1.species).toBe('t-rex');
  });

  test('should have a diet', () => {
    expect(dinosaur1.diet).toBe('carnivore');
  });

  test('should have an average number of visitors it attracts per day', () => {
    expect(dinosaur1.guestsAttractedPerDay).toBe(50);
  });

});
