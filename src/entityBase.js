class EntityBase {   //Como não temos modificadores de acesso coloca-se hastag para tornar-los 
                    //private e pegar os valores por get e sett
    #name
    #age
    #gender
    constructor({name,age,gender}){
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    get name(){
        const prefix = this.#gender === "male" ? "Mr." : "Ms."
        return `${prefix} ${this.#name}`
    }

    get birthYear(){
        if(!this.#age){
            throw new Error('you must define age first!!');
        }

        return new Date().getFullYear() - this.#age;
    }
    set age(value){
        this.#age = value;
    }

}

module.exports = EntityBase;