#!/usr/bin/env node

var exec = require('child_process').exec

exec('git rev-parse HEAD', function(err, stdout, stderr) {
  if (err) return console.log(err)
  id = stdout.trim()
  if (id === "707f4fd4b024f4861ce69b7555f4b4060b5c0652") {
    console.log("You have checked out to the commit causing the bug")
  }
  else {
    console.log("The commit you are on isn't the one that introduced the bug");
  }
});
