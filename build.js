'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Koji Kanao'),
  handle: chalk.white('koji'),
  work: chalk.white('Software Engineer/Technologist'),
  pypi: chalk.green('https://pypi.org/user/kojikoji/'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('koji_kanao'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~kojikanao'),
  github: chalk.gray('https://github.com/') + chalk.green('koji'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('kojikanao'),
  web: chalk.cyan('https://koji.github.io/about.me/'),
  npx: chalk.red('npx') + ' ' + chalk.white('@kojikanao/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelPypi: chalk.white.bold('       pypi:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const pyping = `${data.labelPypi}  ${data.pypi}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               pyping + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
