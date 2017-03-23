var uuid = require('uuid')

var helpMeJesus = function(){
    var blessingId = uuid.v4()
    var blessing = `Blessing ID #${blessingId}: Jesus with you always.`
    return blessing
}

exports.helpMeJesus = helpMeJesus
