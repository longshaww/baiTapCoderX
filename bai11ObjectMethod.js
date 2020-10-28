var myCat = {
    name: 'Cutie Cat',
    age: 2,
    weight: 2,
    height: 3,
    eat: function(mouse) {
        this.weight = this.weight + mouse.weight;
        this.height = this.height + mouse.height;
    }
}

var mouse = {
    weight: 0.5,
    height: 0.2,
}
myCat.weight