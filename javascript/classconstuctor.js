class gunmodel {
    constructor(model,amo,mag,color,damage) {
        this.model=model;
        this.amo=amo;
        this.mag=mag;
        this.color=color;
        this.damage=damage;
        
    }
    details(){console.log(`i need this ${this.model} gun\ni need this ${this.amo}\ni need this ${this.mag}\ni need this ${this.color}\nthe power ${this.damage}`);}

}
const output = new gunmodel("M416","5.56","quick mag","galsier",104);
output.details();