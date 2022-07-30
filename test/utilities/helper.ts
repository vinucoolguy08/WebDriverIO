export const getListOfNames = async (el) => {
    const names = [];
    const length = el.length;
    for(let i = 0; i <= length - 1; i++)
    {
        const info = await el[i].getText();
        names.push(info);
    }
    browser.pause(2000);  
    return names;  
}


export const getHybridModelNames = async (el, nextButton) => {
    const Footer = await el[0];
    // scroll to specific element
    Footer.scrollIntoView();
    await Footer.waitForExist({timeout : 1000});
    const pluginModel = [];
    const pureElectric =  await el;
    const totalLength = pureElectric.length - 1;
    for (let i = 0; i <= totalLength; i++) {
        pluginModel.push(await pureElectric[i].getText());
        if(i%2 == 0)
        {
            const rechargableCars = await nextButton;
            await rechargableCars.click();
            await rechargableCars.waitForExist({timeout: 2000});
            await browser.pause(1000);
        }
    }
    return pluginModel;
}