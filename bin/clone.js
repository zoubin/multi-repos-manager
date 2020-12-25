const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')

function parseRepoConf(file) {
  return fs.readFileSync(file, 'utf8').split(/\n+/).filter(Boolean)
}

function getRepoName(url) {
  // ssh://git@git.github.com/xxx/name.git => name
  return url.split('/').pop().slice(0, -4)
}

function curriedLog(verbose) {
  if (!verbose) return () => {}
  return n => (...args) => console.log('  '.repeat(n), ...args)
}

module.exports = function (repos, { conf, verbose }) {
  if (conf) {
    repos.push(...parseRepoConf(conf))
  }
  const log = curriedLog(verbose)
  log(0)(`# Start to clone ${repos.length} repositories.`)
  const summary = repos.reduce((sum, url, i) => {
    log(1)(`${i}. ${url}`)
    if (fs.existsSync(getRepoName(url))) {
      log(2)(`✓ already exists`)
      sum.exists.push(url)
      return sum
    }
    try {
      execSync(`git clone ${url} > /dev/null`)
      log(2)(`✓ success`)
      sum.success.push(url)
    } catch (e) {
      log(2)(`✗ failure`)
      sum.failures.push(url)
    }
    return sum
  }, { failures: [], success: [], exists: [] })

  log(0)('\n# summary')
  if (summary.exists.length) {
    log(1)(`${summary.exists.length} repos already exist`)
  }
  log(1)(`${summary.success.length} repos cloned`)
  log(1)(`${summary.failures.length} failures`)
  if (summary.failures.length) {
    process.exit(1)
  }
}
