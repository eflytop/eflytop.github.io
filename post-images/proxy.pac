function FindProxyForURL(url, host) {
    var proxy = "PROXY 10.16.31.111:3128";

    // 本地地址直接连接
    if (isPlainHostName(host)) {
    return "DIRECT";
}
    // 如果是 *.microsoft.com 域名（排除 copilot.microsoft.com），不使用代理
    if (dnsDomainIs(host, ".microsoft.com") && host !== "copilot.microsoft.com") {
        return "DIRECT";  // 不使用代理
    }
    
    // 如果是 10.*.*.* 网段，不使用代理
    if (shExpMatch(host, "10.*.*.*")) {
        return "DIRECT";  // 不使用代理
    }
    
    // 如果是 *.fox.com 或 *.efox.com，不使用代理
    if (dnsDomainIs(host, ".foxconn.com") || dnsDomainIs(host, ".efoxconn.com")) {
        return "DIRECT";  // 不使用代理
    }
    
    // 对其他所有请求，使用代理服务器
    return proxy;
}

