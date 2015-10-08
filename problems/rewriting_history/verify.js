#!/usr/bin/env node

var exec = require('child_process').exec

exec('git log --pretty=format:"%s"', function(err, stdout, stderr) {
  if (err) return console.log(err)
  commits = stdout.trim().split("\n")
  commits = commits.filter(function(commit) {
    return commit!=="";
  });
  console.log("You have " + commits.length + " commits");
  console.log("The commits are : ");
  commits.forEach(function(commit) {
    console.log(commit);
  })
});
