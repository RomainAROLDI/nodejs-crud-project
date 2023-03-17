export class Team {
    _id;
    _name;
    _stadium;
    _foundation;
    _logo;

    constructor(id, name, stadium, foundation, logo) {
        this._id = id;
        this._name = name;
        this._stadium = stadium;
        this._foundation = foundation;
        this._logo = logo;
    }

    get _id() {
        return this._id;
    }

    set _id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get stadium() {
        return this._stadium;
    }

    set stadium(value) {
        this._stadium = value;
    }

    get foundation() {
        return this._foundation;
    }

    set foundation(value) {
        this._foundation = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }
}