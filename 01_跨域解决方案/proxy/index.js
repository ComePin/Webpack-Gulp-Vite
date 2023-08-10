// Node代理服务器
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// 部署静态资源和API接口到一个服务器，解决跨域
app.use(express.static("./client"));

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:8000",
    // 重写域名:将路径中/api部分替换为空字符，保证与实际路径一致 http://localhost:8000/users/list
    pathRewrite: {
      "^/api": "",
    },
  })
);

app.listen(9000, () => {
  console.log("express proxy代理服务器启动成功~");
});
