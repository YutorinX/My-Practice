console.log("Hello World!")
// run w/ "node process-argv.js" on node.js CLI
console.log(process.argv)
// run w/ "node process-argv.js one two=three four"
// you'll get below
// [ 
//   '/usr/local/bin/node', // Node.jsの実行プロセスのパス
//   '/Users/laco/nodecli/argument-parse/src/process-argv.js', // 実行したスクリプトファイルのパス
//   'one', // 1番目の引数
//   'two=three', // 2番目
//   'four'  // 3番目
// ]
