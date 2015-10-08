#!/usr/bin/env node

var exec = require('child_process').exec

exec('git rev-parse HEAD~2', function(err, stdout, stderr) {
  if (err) return console.log(err)
  id = stdout.trim()
  if (id === "7c50b1e2d016e70bcc6d0ce0c754f2b348c95998") {
    console.log("Doc branch rebased onto master")
  }
  else {
    console.log("Doc branch hasn't be rebased onto master");
  }
});
