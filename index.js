var uuid = require('uuid')

var blessThisCode = function(){
    var blessingId = uuid.v1()
    var blessing = `Blessing ID #${blessingId}: Our blessings are with you.`
    return blessing
}

exports.blessThisCode = blessThisCode