class Animal {

    constructor() {
        this.name = "";
        this.hp = 1;
    }

    speak() {
        console.log('(no sound defined)');

    }

    die() {
        this.hp = this.hp - 1;

        if (this.hp <= 0) {
            console.log(`R.I.P ${this.name}`)
        }
    }
}

module.exports = Animal;