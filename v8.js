const v8 = require('v8');
v8.setFlagsFromString('--trace_gc');
console.log(v8.getHeapStatistics());
//setTimeout(function() { v8.setFlagsFromString('--notrace_gc'); }, 60e3);
