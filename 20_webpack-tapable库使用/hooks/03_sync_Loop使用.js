const { SyncLoopHook } = require("tapable");

let count = 0;

class HYCompiler {
  constructor() {
    this.hooks = {
      // 1.创建hooks
      // loop：当返回值为true，就会反复执行该事件，当返回值为undefined或者不返回内容，就退出事件
      loopHook: new SyncLoopHook(["name", "age"]),
    };

    // 2.用hooks监听事件(自定义plugin)
    this.hooks.loopHook.tap("event1", (name, age) => {
      if (count < 5) {
        console.log("event1事件监听执行了:", name, age);
        count++;
        return true;
      }
    });

    this.hooks.loopHook.tap("event2", (name, age) => {
      console.log("event1事件监听执行了:", name, age);
    });
  }
}

const compiler = new HYCompiler();
// 3.发出去事件
setTimeout(() => {
  compiler.hooks.loopHook.call("why", 18);
}, 2000);
