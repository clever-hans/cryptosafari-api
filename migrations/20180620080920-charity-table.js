'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, done) {
  db.createTable('charity', {
    charity_id: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 50
    },
    img: {
      type: 'string',
      length: 1000
    },
    description: {
      type: 'string',
      length: 1000
    }, 

    mission: {
      type: 'string',
      length: 1000
    }, 

  }, done);
};

exports.down = function(db) {
  db.droptable('charity');
};

exports._meta = {
  "version": 1
};
