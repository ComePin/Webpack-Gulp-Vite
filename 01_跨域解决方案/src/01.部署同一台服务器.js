const Koa = require("koa");
const KoaRouter = require("@koa/router");
const static = require("koa-static");

const app = new Koa();
// 部署静态资源:传入时的路径和启动项目的位置有关
// 将静态资源和api接口部署到同一台服务器上
app.use(static("./client"));

const userRouter = new KoaRouter({ prefix: "/users" });
userRouter.get("/list", (ctx, next) => {
  ctx.body = [
    { id: 111, name: "liujin", age: 23 },
    { id: 112, name: "laiyayu", age: 2 },
    { id: 113, name: "laiweixi", age: 10 },
    { id: 114, name: "sipinlai", age: 25 },
  ];
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("部署到同一服务器启动成功~");
});
