export class Team {
    _id;
    name;
    stadium;
    foundation;
    logo;

    constructor(id, name, stadium, foundation, logo) {
        this._id = id;
        this.name = name;
        this.stadium = stadium;
        this.foundation = foundation;
        this.logo = logo;
    }

    get _id() {
        return this._id;
    }

    set _id(value) {
        this._id = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get stadium() {
        return this.stadium;
    }

    set stadium(value) {
        this.stadium = value;
    }

    get foundation() {
        return this.foundation;
    }

    set foundation(value) {
        this.foundation = value;
    }

    get logo() {
        return this.logo;
    }

    set logo(value) {
        this.logo = value;
    }
}