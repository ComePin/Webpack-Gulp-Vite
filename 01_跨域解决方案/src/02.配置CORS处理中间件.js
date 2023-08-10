const Koa = require("koa");
const KoaRouter = require("@koa/router");
const static = require("koa-static");

const app = new Koa();

// app.use(static("./client"));

// // 解决方案二：服务器开启CORS
// app.use(async (ctx, next) => {
//   // 1.简单请求 设置为* 所有的域都可以访问
//   ctx.set("Access-Control-Allow-Origin", "*");

//   // 设置某一个域名，只有该域名跨域访问（简单请求）
//   // ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

//   // 2.配置非简单请求
//   // 设置额外header（非简单请求下面三个推荐都设置）
//   ctx.set(
//     "Access-Control-Allow-Headers",
//     "Accept, Accept-Encoding, Accept-Language, Connection, Conttent-Length, Content-Type, Host, Origin, Referer, User-Agent"
//   );

//   // 跨域访问时允许携带cookie
//   ctx.set("Access-Control-Allow-Credentials", true);

//   // 允许其他请求的方式(包括非简单请求和简单请求，Origin设置为*时要做的操作)
//   ctx.set(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, PATCH, DELETE, OPTIONS"
//   );

//   // 获取服务器端都有哪些请求方式，，不需要返回具体内容
//   if (ctx.method === "OPTIONS") {
//     // 204：no content 不用执行下一个返回数据的中间件
//     ctx.status = 204;
//   } else {
//     await next();
//   }
// });

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
