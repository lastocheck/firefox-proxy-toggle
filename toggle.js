const init = () => {
    const getting = browser.proxy.settings.get({})
    getting.then((got) => {
        let iconPath = "icons/error.png"
        if (got.value.proxyType == "autoConfig"){ iconPath = "icons/on.png" }
        else if (got.value.proxyType == "none"){ iconPath =  "icons/off.png"}
        browser.browserAction.setIcon({path: iconPath})
    })
}

const toggle = () => {
    const getting = browser.proxy.settings.get({})
    getting.then((got) => {
        if (got.value.proxyType == "autoConfig"){
            let proxySettings = {proxyType: "none"};
            browser.proxy.settings.set({value: proxySettings});
            browser.browserAction.setIcon({path: "icons/off.png"})
        }
        else {
            let proxySettings = {proxyType: "autoConfig", autoConfigUrl: "https://antizapret.prostovpn.org/proxy.pac"};
            browser.proxy.settings.set({value: proxySettings});
            browser.browserAction.setIcon({path: "icons/on.png"})
        }
    })
}

browser.browserAction.onClicked.addListener(toggle)
init()