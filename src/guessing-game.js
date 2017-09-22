class GuessingGame {
   constructor () {
      
    }
    setRange (min, max) {
        this.range = [min,max]
      }
      
    guess() {
      return Math.round((this.range[1]+this.range[0])/2);
      
    }
    lower() {
      if (this.guess() > number ) {
        this.setRange(this.range[0], this.guess())
      }

    }
    
    greater() {
      if (this.guess() < number ) {
        this.setRange(this.guess(),this.range[1])
      }

    }
  
  
  
  
  
  
   
  
}




module.exports = GuessingGame;
