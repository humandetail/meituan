// 设置html的font-size
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
// fastclick支持
window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

// 多点触摸的冲突
window.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false);