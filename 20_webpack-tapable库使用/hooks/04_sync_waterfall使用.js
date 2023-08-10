const { SyncWaterfallHook } = require("tapable");

class HYCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      // waterfall：当返回值不为undefined时，会将这次返回的结果作为下次事件的第一个参数(修改第一个参数)
      waterfallHook: new SyncWaterfallHook(["name", "age"]),
    };

    // 2.用hooks监听事件(自定义plugin)
    this.hooks.waterfallHook.tap("event1", (name, age) => {
      console.log("event1事件监听执行了:", name, age);

      return { xx: "xx", yy: "yy" };
    });

    this.hooks.waterfallHook.tap("event2", (name, age) => {
      console.log("event1事件监听执行了:", name, age);
    });
  }
}

const compiler = new HYCompiler();
// 3.发出去事件
setTimeout(() => {
  compiler.hooks.waterfallHook.call("why", 18);
}, 2000);
