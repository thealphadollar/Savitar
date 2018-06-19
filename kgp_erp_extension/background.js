function install_notice() {
    if (localStorage.getItem('install_time'))
        return;

    var now = new Date().getTime();
    localStorage.setItem('install_time', now);
    chrome.browserAction.setIcon({path:"images/icon.jpg"});
    chrome.tabs.create({url: "options.html"});
}
install_notice();