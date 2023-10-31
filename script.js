// строка проверить строку на наличие . и после нее на com или ru
// function checkDom(name ,  domain) {
//     if (name.includes('.')) {
//         return name.replace('.',`${domain}`)
//     }
//         return false
// }
// console.log(checkDom('youtube.','.com'))
// console.log(checkDom('youtube.','.ru'))
//


// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// function checkStr(str) {
//     if (str.length >= 4 && str.length <= 8) {
//         if (str.length % 2 === 0) {
//             return 'Строка полностью подходит'
//         }else {
//             return 'Строка не четная'
//         }
//     }   else {
//      return 'Строка слишком коротка/длинная'
//     }
// }
//
// console.log(checkStr('qweeee'))
// console.log(checkStr('qweqweqwe'))


// строка поменять букву каждого четного индекса на E можно решить через map
// --


// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function checkPassword(password1 , password2) {
//     if (password1.trimStart() === password2.trimStart()) {
//         return 'welcome'
//     }
//       return   'password is not correct'
// }
// console.log(checkPassword('qwe' , 'qwe'))
// console.log(checkPassword('qwe' , 'qewqe'))



// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]

// let arr = ['lorem', 'ipsum', 'dolor', 'sit']
//
// console.log(arr.map(item =>item.length))



// ['lorem', 'ipsum', 'dolor'] => [1,2,3]

// let arr = ['lorem', 'ipsum', 'dolor',]
// console.log(arr.map((item, idx) => idx))


// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']

// let arr = ['lorem', 'ipsum', 'dolor']
// console.log(arr.map(item => item.toUpperCase()))


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'

// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join('-'))


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'

// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join('/'))


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'

// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.join(' '))



// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']

// let arr =['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(arr.filter((el,id) => id % 3 ))


 //
 // let arr =['lorem', 'ipsum', 'dolor', 'sit', 'amet']
 // console.log(arr.filter((el ,id)=> id % 2 === 0))


// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']

// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let a = arr.push('consectetur') + arr.push('adipiscing') + arr.push('elit')
//
// console.log(arr)

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]

// let arr=  [123,33,444,'22',55,66,77,88,99]
//
// console.log(arr.filter(item => typeof item === 'number' ))



// ['null', undefined, 0, false, true, ''] => [0, false, true]

// let arr = ['null', undefined, 0, false, true, '']
//
// console.log(arr.filter(item => item === 0 || item === false || item === true))
//



// ['null', undefined, 0, false, true, ''] => [true, 'null']

// let arr = ['null', undefined, 0, false, true, '']
//
// console.log(arr.filter(item =>  !!item).reverse())




// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
//
// let arr = [1123, 'qwe']
// let a = arr.push(...arr)
// console.log(arr)


// [null, undefined] => [null, undefined, null, undefined]
// let arr = [null, undefined]
// let a = arr.push(...arr)
// console.log(arr)



// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
//
// let str = 'lorem ipsum dolor sit amet'
// let a = str.split(' ')
// console.log(a.filter((el , idx) => idx % 2 ===0))