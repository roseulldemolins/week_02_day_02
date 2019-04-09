const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(() => {
    park = new Park('Jurassic Park', 30, []);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('triceratops', 'omnivores', 15);
  });

  test('should have a name', () => {
    expect(park.name).toBe('Jurassic Park')
  });

  test('should have a ticket price', () => {
    expect(park.ticketPrice).toBe(30)
  });

  test('should have a collection of dinosaurs', () => {
    expect(park.dinosaurCollection).toEqual([])
  });

  test('should be able to add a dinosaur to its collection', () => {
    park.addDinosaur(dinosaur1);
    expect(park.dinosaurCollection.length).toBe(1)
  });

  test('should be able to remove a dinosaur from its collection', () => {
    park.removeDinosaur(dinosaur1);
    expect(park.dinosaurCollection.length).toBe(0)
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    expect(park.mostPopular()).toBe('t-rex')
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    expect(park.findSpecies('t-rex')).toEqual(['t-rex'])
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeSpecies('t-rex');
    expect(park.dinosaurCollection.length).toBe(2)
  });

  test('calculate customers per day', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    expect(park.totalVisitsDay()).toBe(95)
  });

  test('calculate customers per year', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    expect(park.totalVisitsYear()).toBe(34675)
  });

  test('calculate revenue per year', () => {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    expect(park.totalRevenueYear()).toBe(1040250)
  });

});
