class University {

    constructor() {
        this.name = '';
        this.founded = 0;
        this.programs = [];
    }


    createProgram(program) {
        this.programs.push(program);
    }

}

module.exports = University;