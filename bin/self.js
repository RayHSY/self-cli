#! /usr/bin/env node
// 指定脚本执行所需的解释程序

const commander = require('commander');
const program = new commander.Command();

program.version(`self-cli ${require('../package.json').version}`);

function getOptions(cmd) {
  return (cmd.options || []).map(option => {
    const name = option.long.replace('--', '');
    return {
      ...option,
      name,
    }
  }).filter(op => cmd[op.name])
}

program
  .command('search <keyword>')
  .option('-b --baidu', 'search by Baidu')
  .option('-g --github', 'search by Github')
  .option('-j --juejin', 'search by Juejin')
  .description('quick search single or ,multiple')
  .action((keyword, cmd) => {
    const options = getOptions(cmd)
    require('../lib/search')(keyword, options)
  })

program.parse(process.argv);