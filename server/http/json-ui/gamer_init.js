//
//
//

const express = require('express');
const router = express.Router();

const uuid = require('core/uuid/create');

router.get('/gamer/init', function(req, res, next) {

  // TODO when add user management , this sould be gamer_uuid

  uuid(function(err, uuid) {

    let data = {
      user_uuid: uuid
    }

    res.json(data);

    console.log(`<= [web] [json] [gamer_init] -> uuid => ${uuid}`);
  })

});

module.exports = router;
