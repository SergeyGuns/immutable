import { initObj } from "./structure.spec";

export default class Structure {
  constructor(initObj) {
    this.arrVersions = []
    this.version = 0
    this.arrVersions.push(initObj)
  }


  push(nextStateObj, cb) {
    let newObj = Object.create(this.arrVersions[this.version])
    this.arrVersions.push(Object.assign(newObj, nextStateObj))
    this.version++

    if(cb !== undefined) cb(this.arrVersions[this.version]);
  }
  getItem(key) {
    if(key === undefined) 
      return this.arrVersions[this.version];
    if(key in this.arrVersions[this.version]) 
      return this.arrVersions[this.version][key];
      
    return undefined;
  }
  get length() {
    return this.arrVersions.length
  } 
  get() {
    return this.arrVersions[this.version]
  }
}