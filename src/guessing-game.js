class GuessingGame {
    constructor() {}

    setRange(min, max) {

    }

    guess() {
			return 409
    }

    lower() {

    }

    greater() {

    }
}

		class GG {
      
      constructor () {
   //     this.range = [0,0];
      }
      
      setRange (min, max) {
        this.range = [min,max]
      }
      
      guess() {
        return (this.range[1]-this.range[0])/2
      }
      
    }
		
		
		
		const number = 409;
    const game = new GG();
    game.setRange(0, 4048)
		
		
		console.log(game.range);
    
    console.log(game.guess());
    
    console.log(game);




module.exports = GuessingGame;
