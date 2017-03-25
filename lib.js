'use strict';
const uuid = require('uuid')
const translator = require('google-translate-api')

module.exports = class Dua {
  constructor (language) {
    this.id = uuid.v4()
    this.language = language
    this.message = `Blessing ID #${ this.id }: Our blessings are with you.`
    this.translation = null
    this.translateBlessing = () => translator('Our blessings are with you.', {to: this.language}).then(res => 
      {return `Blessing ID #${ this.id }: ${ res.text }`})
    this.blessThisCode = () => this.message
    this.isCodeBlessed = () => true
  }
}
