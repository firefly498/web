window.onload = function() {
    console.log("脚本加载成功！");

    const messages = ["欢迎来到我的网站！", "探索精彩内容！"];
    let index = 0;

    const dynamicText = document.getElementById("dynamicText");
    if (dynamicText) {
        setInterval(() => {
            dynamicText.textContent = messages[index];
            index = (index + 1) % messages.length;
        }, 3000); // 每隔3秒切换一次
    } else {
        console.error("未找到 dynamicText 元素");
    }
