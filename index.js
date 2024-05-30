// // const superHero  = require("./super-hero");

// // const batman  = new superHero("Batman")
// // console.log(batman.getName());
// // batman.setName("Brue Waye")
// // console.log(batman.getName());

// // const newSuperHero  = new superHero("Superman")
// // console.log(newSuperHero.getName());

// const math = require("./math");

// const {add, subtract}= math;

// console.log(add(1,2))
// console.log(subtract(1,2))

// const data = require("./data.json");

// const path = require("path")
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("Hello","Mg Mg", "index.html"))
// console.log(path.join("/Hello","Mg Mg", "index.html"))
// console.log(path.join("/Hello","//Mg Mg", "index.html"))
// console.log(path.join("/Hello","//Mg Mg", "../index.html"))
// console.log(path.join(__dirname, "data.json"))

// console.log(path.resolve("Hello","Mg Mg", "index.html"))
// console.log(path.resolve("/Hello","Mg Mg", "index.html"))
// console.log(path.resolve("/Hello","//Mg Mg", "index.html"))
// console.log(path.resolve("/Hello","//Mg Mg", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))

// function greet(name){
//     console.log(`"Hello" ${name}`)
// }

// function heighOrderFunction(callback){
//     const name = "Mg Mg";
//     callback(name)
// }

// heighOrderFunction(greet)

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, toppin) => {
//     console.log(`Order ${size} recieved pizza ${toppin}`)
// })

// emitter.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log(`Service complementary trees`)
//     }
// })

// console.log("Do work before")
// emitter.emit("order-pizza", "large", "mushroom")

// const Pizza = require("./pizza-shop.js");
// const DrinkMatchine = require("./drink-matching.js");

// const pizza = new Pizza();
// const drink = new DrinkMatchine();

// pizza.on("order", (size, topping) => {
//   console.log(`Order recied ${size} name is ${topping}`);
//   drink.serverDrink(size)
// });

// pizza.order("large", "Hello");

// pizza.displayOrderNumber();

// const buffer = Buffer.from("Vishwa");

// buffer.write("coddfsdfsdfe")
// console.log(buffer.toString())
// console.log(buffer)
// console.log(buffer.toJSON())

// const fs = require("node:fs");

// console.log("first");
// const file = fs.readFileSync("./file.txt", "utf-8");
// console.log(file);
// console.log("second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("last");

// fs.writeFileSync("./greeting.txt", "MMMMM");

// fs.writeFile("./greeting.txt", "YYYYYY",{flag: "a"}, (eor) => {
//   if (eor) {
//     console.log(eor);
//   } else {
//     console.log("File Writen");
//   }
// });

// const fs = require("node:fs/promises");
// console.log("first")
// fs.readFile("file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error))
// console.log("second")

// async function readFile() {
//   try {
//     const data =await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const reableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2
// })

// reableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeStream = fs.createWriteStream("./file2.txt");
// reableStream.pipe(writeStream)

// reableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk)
// })

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
// const superHero = {
//     firstName: "K",
//     lastName: "M"
// }
// res.writeHead(200 , { "ContentType": "text/html"});
// // fs.createReadStream(__dirname+"/index.html").pipe(res)
// const name = "KMH"
// let file = fs.readFileSync("./index.html", "utf-8");
// file =file.replace("{{names}}", name)
// res.end(file);

//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home page");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About page");
//   } else if (req.url === "/api") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ name: "HELLO", age: "23" }));
//   } else {
//     res.writeHead(404);
//     res.end("Page not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("server is on port 3000");
// });

// const fs = require("node:fs");

// console.log("first");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   console.log("file content");
// });
// console.log("last");

// const https = require("node:https")
// const crypto = require("node:crypto");
// const start = Date.now();
// crypto.pbkdf2Sync("password", "slat",100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "slat",100000, 512, "sha512");
// console.log("Hash: " , Date.now() - start)

// process.env.UV_THREADPOOL_SIZE=16;
// const MAX_CALLS=12;
// for(let i=0; i<MAX_CALLS; i++){
// crypto.pbkdf2("password", "slat",100000, 512, "sha512", () => {
//   console.log(`Hash: ${i+1} `, Date.now() -start)
// })

// https.request("https://www.google.com", (res) => {
//   res.on("data", ()=> {})
//   res.on("end", () => {
//     console.log(`Request: ${ i + 1}`, Date.now() - start);
//   });
// })
// .end();
// }

// console.log("first")
// process.nextTick(() => console.log("process task"))
// console.log("second")

// const fs = require("node:fs")

// fs.readFile(__filename, ()=> {
//   console.log("this is file 1")
// })

// process.nextTick(() => console.log("ppppp task"))
// Promise.resolve().then(() => console.log("this is the promise result 1"))

// console.log("first")

const http = require("node:http")

const server = http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Worl")
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log("Server is running port 3000"))



