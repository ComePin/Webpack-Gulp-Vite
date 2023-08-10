const Koa = require("koa");
const KoaRouter = require("@koa/router");
const static = require("koa-static");

const app = new Koa();

// Nginx反向代理
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
  console.log("CORS服务器启动成功~");
});
