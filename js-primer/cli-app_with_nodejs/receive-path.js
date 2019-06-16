const program = require("commander");
const fs = require("fs");
const marked = require("marked")

program
    .option("--gfm", "GFMを有効にする")
    .option("-S, --sanitize", "サニタイズを行う")

program.parse(process.argv);
const filePath = program.args[0];
console.log(filePath);

// run w/ "node receive-path.js sample.md"
// return "sample.md"

// fs.readFile(filePath, (err, file) => {
//     console.log(file)
//     console.log(file.toString())
// })
// // run w/ "node receive-path.js sample.md"
// // return <Buffer 23 20 73 61 6d 70 6c 65>
// // # sample // .toString()

const markedOptions = {
    gfm: false,
    sanitize: false,
    ...program.opts()
}

fs.readFile(filePath, "utf8", (err, file) => {
    if (err) {
        console.error(err)
        process.exit(err.code)
        return
    }
    const html = marked(file, {
        gfm: markedOptions.gfm, //URL will not convert to anchor tag
        sanitize: markedOptions.sanitize //<> will escape so HTML tag won't convert as HTML tag
    })
    console.log(html);
});

// # gfmオプションを有効にする
// $ node receive-path.js --gfm sample.md
// # sanitizeオプションを短縮形で有効にする
// $ node receive-path.js -S sample.md
//
// you'll get
// <h1 id="サンプルファイル">サンプルファイル</h1>
// <p>これはサンプルです。
// https://jsprimer.net/</p>
// <p>&lt;p&gt;これはHTMLです&lt;/p&gt;
//
// </p>
// <ul>
// <li>サンプル1</li>
// <li>サンプル2</li>
// </ul>


// run w/ "node receive-path.js notfound.md" // <- not exist file
// you'll get error
// [Error: ENOENT: no such file or directory, open 'notfound.md'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'notfound.md'
// }
