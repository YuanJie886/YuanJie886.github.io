var posts=["2024/03/14/hello-world/","2024/03/14/markdown使用笔记/","2024/04/10/test/","2024/03/14/算法学习笔记/","2024/04/09/常见算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };