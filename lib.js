'use strict';
const uuid = require('uuid')

module.exports = class Dua {
  constructor () {
    this.id = uuid.v4()
    this.message = `Blessing ID #${ this.id }: Our blessings are with you.`
    this.blessThisCode = () => this.message
    this.isCodeBlessed = () => true
  }
}
