let os = require('os');

console.log("operating system :" + (os.platform()));
// operating system :win32
console.log("Architecture :" + (os.arch()));
// Architecture :x64
console.log("cpu " + (os.cpus().length) + " cores");
// cpu 4 cores
console.log("free memory :" + (os.freemem() / (1024 * 1024 * 1024)) + " GB");
// free memory :0.139007568359375 GB
console.log("total memory :" + (os.totalmem() / (1024 * 1024 * 1024)) + " GB");
// total memory :3.841320037841797 GB
console.log("uptime :" + (os.uptime() / (60 * 60)) + " hours");
// uptime :959.9385025 hours