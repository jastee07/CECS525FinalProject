var http = require('http');
var fs = require('fs');
var {exec} = require('child_process')
var form = fs.readFileSync('./index.html', {encoding: 'utf8'});

http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.end(form)
  }
  if (req.method === 'POST') {
    var data = '';

    req.on('data', function(chunk) {
      data += chunk;
      console.log(data);
      if (data === 'power') {
        console.log('we got the power');
        exec('irsend SEND_ONCE IR4 KEY_POWER');
      }
      else if (data === 'raise_vol') {
        exec('irsend SEND_ONCE IR4 KEY_VOLUMEUP');
      }
      else if (data === 'func_stop') {
        exec('irsend SEND_ONCE IR4 KEY_STOP');
      }
      else if (data === 'rwd') {
        exec('irsend SEND_ONCE IR4 KEY_REWIND');
      }
      else if (data === 'play_pause') {
        exec('irsend SEND_ONCE IR4 KEY_PLAYPAUSE');
      }
      else if (data === 'ffwd') {
        exec('irsend SEND_ONCE IR4 KEY_FASTFORWARD');
      }
      else if (data === 'down') {
        exec('irsend SEND_ONCE IR4 KEY_DOWN');
      }
      else if (data === 'lower_vol') {
        exec('irsend SEND_ONCE IR4 KEY_VOLUMEDOWN');
      }
      else if (data === 'up') {
        exec('irsend SEND_ONCE IR4 KEY_UP');
      }
      else if (data === 'zero') {
        exec('irsend SEND_ONCE IR4 KEY_0');
      }
      else if (data === 'eq') {
        exec('irsend SEND_ONCE IR4 KEY_EQUAL');
      }
      else if (data === 'st_rept') {
        exec('irsend SEND_ONCE IR4 KEY_S');
      }
      else if (data === 'one') {
        exec('irsend SEND_ONCE IR4 KEY_1');
      }
      else if (data === 'two') {
        exec('irsend SEND_ONCE IR4 KEY_2');
      }
      else if (data === 'three') {
        exec('irsend SEND_ONCE IR4 KEY_3');
      }
      else if (data === 'four') {
        exec('irsend SEND_ONCE IR4 KEY_4');
      }
      else if (data === 'five') {
        exec('irsend SEND_ONCE IR4 KEY_5');
      }
      else if (data === 'six') {
        exec('irsend SEND_ONCE IR4 KEY_6');
      }
      else if (data === 'seven') {
        exec('irsend SEND_ONCE IR4 KEY_7');
      }
      else if (data === 'eight') {
        exec('irsend SEND_ONCE IR4 KEY_8');
      }
      else if (data === 'nine') {
        exec('irsend SEND_ONCE IR4 KEY_9');
      }

    });

    req.on('end', function() {
      res.end(form);
    })
  }
}).listen(4000);
