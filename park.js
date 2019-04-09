class Park{

  constructor(name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
  }


  addDinosaur(dinosaur) {
  this.dinosaurCollection.push(dinosaur)
  };

  removeDinosaur(dinosaur) {
    this.dinosaurCollection.splice(this.dinosaurCollection.indexOf(dinosaur),1)
  };

  mostPopular() {
    let topDinosaur = this.dinosaurCollection[0];
    for (var i = 0; i < this.dinosaurCollection.length; i++) {
      if(this.dinosaurCollection[i].guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay){
        topDinosaur = this.dinosaurCollection[i];
      }
    }
    return topDinosaur.species;
  }

  findSpecies(species) {
    let speciesArray = []
    for (var i = 0; i < this.dinosaurCollection.length; i++) {
      if (this.dinosaurCollection[i].species === species){
      speciesArray.push(species)
      }
    }
  return speciesArray
  }

  removeSpecies(species) {
    for (var i = this.dinosaurCollection.length-1; i>=0; i--) {
      if (this.dinosaurCollection[i].species === species){
        this.dinosaurCollection.splice(i,1);
      }
    }
  }

  totalVisitsDay() {
    let total = 0
    for (var i = 0; i < this.dinosaurCollection.length; i++) {
      total += this.dinosaurCollection[i].guestsAttractedPerDay
    }
    return total
  }

  totalVisitsYear() {
    return this.totalVisitsDay() * 365
  }

  totalRevenueYear() {
    return this.totalVisitsYear() * this.ticketPrice
  }

  dietType() {
    
  }
}

module.exports = Park;
