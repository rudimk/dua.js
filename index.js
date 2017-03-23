var uuid = require('uuid')

var helpJesus = function(){
    var blessingId = uuid.v4()
    var blessing = `Blessing ID #${blessingId}: Jesus with you always.`
    return blessing
}

exports.helpJesus = helpJesus
