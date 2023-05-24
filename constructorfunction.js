// constructor
function Alien(name, tech){
    this.name=name
    this.tech=tech
    this.work=function() {
        console.log('solving the bug')
    }
}
let alien1 = new Alien('sailesh','js')
let alien2 = new Alien('saileshadh','node')
console.log(alien2.name)
alien2.work();