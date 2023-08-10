const { AsyncSeriesHook } = require("tapable");

class HYCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      // series：串行，会等待上一个是异步的Hook
      seriesHook: new AsyncSeriesHook(["name", "age"]),
    };

    // 2.用hooks监听事件(自定义plugin)
    this.hooks.seriesHook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log("event1事件监听执行了:", name, age);
        callback();
      }, 3000);
    });

    this.hooks.seriesHook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log("event2事件监听执行了:", name, age);
        callback();
      }, 3000);
    });
  }
}

const compiler = new HYCompiler();
// 3.发出去事件
setTimeout(() => {
  compiler.hooks.seriesHook.callAsync("why", 18, () => {
    console.log("所有任务都执行完成~");
  });
}, 0);
