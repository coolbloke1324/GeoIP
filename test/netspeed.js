
var assert = require('assert'), 
    geoip = require('../index.js');

var NetSpeed = geoip.NetSpeed;
var netspeed = new NetSpeed('/tmp/GeoIPNetSpeed.dat', true);

var sync_data = netspeed.lookupSync('8.8.4.4');
assert.ok(sync_data, 'Can not find google in country module');
netspeed.lookup('www.google.com', function(data) {
    if (data) {
      console.log(data);
      assert.ok(data, 'Oops! Async and sync netspeed data not equal.');
    } else {
      console.log('Data not found');
    }
    assert.ok(netspeed.close(), 'Oops when closing netspeed object');
});
