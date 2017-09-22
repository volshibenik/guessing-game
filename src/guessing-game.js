class GuessingGame {
  
  setRange (min, max) {
      
    this.range = [min,max]
      
  }
      
  guess() {
    
    return Math.round((this.range[1]+this.range[0])/2);
      
  }
  
  lower() {
    
  //    if (this.guess() > number ) {
        this.setRange(this.range[0], this.guess())
  //    }

  }
    
  greater() {
    
 //     if (this.guess() < number ) {
        this.setRange(this.guess(),this.range[1])
 //     }

  }

}
/*
Description of task is quite confusing, i was thinking all the time that lower and greater methods should be somehow linked with guess and called only if neede d and not like in tests: hardcoded sequence of lower/greater. That's why i had condition and tried to compare my result with 'number', but couldn't reach it))
*/
module.exports = GuessingGame;
