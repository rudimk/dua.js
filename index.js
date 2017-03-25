'use strict';
const uuid = require('uuid')
const translator = require('google-translate-api')

module.exports = class Dua {
  constructor (language) {
    this.id = uuid.v4()
    this.language = language
    this.message = `Blessing ID #${ this.id }: Our blessings are with you.`
    this.translation
    this.translateBlessing = () => translator('Our blessings are with you.', {to: this.language}).then(res => 
      {this.translation = `Blessing ID #${ this.id }: ${ res.text }`; return `Blessing ID #${ this.id }: ${ res.text }`})
    this.blessThisCode = () => this.message
    this.isCodeBlessed = () => true
  }
}
