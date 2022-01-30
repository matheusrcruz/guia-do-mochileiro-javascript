//class utility 
//mesma coisa que helpers 
class Util {
    static #defaultFormat = Intl.NumberFormat("pt-br", {
        currency: "BRL",
        style: "currency"
    })

    static formatCurrency(value){
        return this.#defaultFormat.format(value)
    }
   static unformatCurrency(value){
       // R$ 1000,10 sem o /100 ficaria assim 100010
      return Number(value.replace(/\D/g, '')) / 100

   }

}
module.exports = Util