const cluster = require("node:cluster")
const os = require("node:os")

console.log(os.cpus().length());


 
if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`)
}else{
    console.log(`Worker ${process.pid} is running`)
}

