#!/usr/bin/env node

const program = require('commander')

program.version(require('../package.json').version)

program
  .command('clone', 'git clone multiple repos')

program
  .command('pull', 'git pull multiple repos')

program
  .command('grep', 'git grep in multiple repos')

program.parse()
