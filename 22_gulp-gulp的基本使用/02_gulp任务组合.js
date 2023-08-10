const { series, parallel } = require("gulp");

const foo1 = (cb) => {
  setTimeout(() => {
    console.log("foo1 task exec~");
    cb();
  }, 2000);
};

const foo2 = (cb) => {
  setTimeout(() => {
    console.log("foo2 task exec~");
    cb();
  }, 1000);
};

const foo3 = (cb) => {
  setTimeout(() => {
    console.log("foo3 task exec~");
    cb();
  }, 3000);
};

// 多个任务串行执行：第一个执行完才执行第二个
const seriesFoo = series(foo1, foo2, foo3);
// 多个任务并行执行：后一个任务不会等待前一个任务结束，就会开始执行（一般是同时开始）
const parallelFoo = parallel(foo1, foo2, foo3);

module.exports = {
  seriesFoo,
  parallelFoo,
};
