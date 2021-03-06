//
//
//

const Game = require('core/game');
const Events = require('../');

function start(socket, io, game_uuid, cb) {

  cb = cb || function() {};

  if (!socket || !io || !game_uuid) {
    return cb({
      status: 400,
      err: new Error('low args')
    })
  }

  Game.start(game_uuid, function(err, result) {
    if (err) {
      return Events.err(socket, err);
    }

    console._log(`*=> [socket] [start] / game_uuid => ${game_uuid}`);


    //READ THIS : http://stackoverflow.com/questions/6873607/socket-io-rooms-difference-between-broadcast-to-and-sockets-in
    io.sockets.in(game_uuid).emit('start');

    // game really begin here
    Events.turn(socket, io, game_uuid);
  })
}

module.exports = start;
