#!/usr/bin/env node

const program = require('commander')

program.version(require('../package.json').version)

program
  .command('clone [repos...]')
  .description('git clone OR git pull')
  .option('-c, --conf <path>')
  .option('-V, --no-verbose')
  .action(require('./clone'))

program
  .command('pull', 'git pull repos in the current working directory')

program
  .command('grep', 'git grep in repos in the current working directory')

program.parse()
