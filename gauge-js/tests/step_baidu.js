const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    button
} = require('taiko');
step("NBA", async () => {
    await goto("baidu.com");
    await write("NBA");
    await click(button('百度一下'));
    await link('NBA中国官方网站').exists();
    await click(link('NBA中国官方网站'));
});