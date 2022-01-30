// const EntityBase = require('./entityBase');

// console.log( new EntityBase({
//     name : 'matheus',
//     age: '21',
//     gender: 'male'
// }))

const assert = require('assert');
const Manager = require('./manager');
const Employee = require('./employee');
const Util = require('./util');

const GENDER = {
     //ENUM
    male: 'male',
    female: 'fale'
}

{ //Variaveis IGuais porque estão em mundos diferentes
    const employee = new Employee({
        name: 'xuxa Da silva',
        gender: GENDER.female
        

    });
    // esse bloco de codigo vai dar um erro, F2 renomeia globalmente 
    assert.throws(() => employee.birthYear, {message: 'you must define age first!!'})
}
//Obj Mock subistituindo a chamada e retirando risco do sistema, como se fosse um Overide em JAVA   

const CURRENT_YEAR = 2022
Date.prototype.getFullYear = () => CURRENT_YEAR
{
    const employee = new Employee({
        name: 'joaozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepEqual(employee.name, 'Mr. joaozinho')//com metodo acessor passa de acordo com a chamativa
    assert.deepEqual(employee.age, undefined)//sem metodo acesso só passa como undefined 
    assert.deepEqual(employee.gender, undefined)
    assert.deepEqual(employee.grossPay, 'R$ 5.000,40')
    assert.deepEqual(employee.netPay, Util.formatCurrency(4000.32))
    //MOCK
   // const expectedBirthYear = 2002
  //  assert.deepEqual(employee.birthYear, expectedBirthYear)

    //Não tem set não vai mudar!!!
    employee.birthYear = new Date().getFullYear() -80
    assert.deepEqual(employee.birthYear, new Date().getFullYear() -80)

    employee.age = 80;
    assert.deepEqual(employee.birthYear, 2002)
    console.log('\n ----employee----')
    console.log('name',employee.name)
    console.log('age',employee.age)
    console.log('gender',employee.gender)
    console.log('grossPay',employee.grossPay)
    console.log('netpay',employee.netPay)
}

{
     const manager = new Manager({
         name : 'Singed',
         age: 44,
         gender: GENDER.male
     })
     assert.deepEqual(manager.name, 'Mr. Singed')//com metodo acessor passa de acordo com a chamativa
     assert.deepEqual(manager.age, undefined)//sem metodo acesso só passa como undefined 
     assert.deepEqual(manager.gender, undefined)
   //  assert.deepEqual(manager.birthYear, 1942)
     assert.deepEqual(manager.grossPay,Util.formatCurrency(4000.32))
     assert.deepEqual(manager.bonuses,Util.formatCurrency(2000.00))
     assert.deepEqual(manager.netPay, 0)

    }