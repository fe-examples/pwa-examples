let deferredPrompt;
// 默认不展示按钮，仅支持 「Add to Home Screen」 功能才展现
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

// 仅浏览器支持且未安装该应用，以下事件才会触发
window.addEventListener('beforeinstallprompt', (e) => {
  // Chrome 67 及之前版本，会自动展现安装的 prompt
  // 为了版本统一及用户体验，我们禁止自动展现 prompt
  e.preventDefault();
  // 存放事件用于后续触发
  deferredPrompt = e;
  // 展现按钮
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // 展现安装的 prompt
    deferredPrompt.prompt();
    // 等待用户对 prompt 进行操作
    // 如果是用户自己在浏览器输入框右侧打开的 prompt ，触发不了以下代码
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('添加应用');
        } else {
          console.log('取消添加');
        }
        deferredPrompt = null;
      });
  });
});
