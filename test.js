import {
  Structure,
  initObj
} from './structure.spec'

const struct1 = new Structure(initObj)
console.log(JSON.stringify(struct1.get(), null, '  '))
struct1.push({
  arr : [1,2,3,4]
})
console.log(JSON.stringify(struct1.get(), null, '  '))
console.log(struct1.arrVersions)
struct1.push({
  obj : {
    a : 'aa',
    b : 'bb'
  }
})
console.log(JSON.stringify(struct1.get(), null, '  '))
console.log(struct1.arrVersions)
struct1.push({
  numbers : 1234
})
console.log(JSON.stringify(struct1.get(), null, '  '))
console.log(struct1.arrVersions)
console.log(JSON.stringify(struct1.getItem('num'), null, '  '))