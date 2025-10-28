function FindProxyForURL(url, host) {
    // Directly connect to local addresses
    if (isPlainHostName(host) || dnsDomainIs(host, ".local")) {
    return "DIRECT";
    }
    
    // Use proxy for specific domains
    if (
        dnsDomainIs(host, "copilot.microsoft.com") || 
        shExpMatch(host, "*.google.com") || 
        shExpMatch(host, "*.youtube.com") || 
        shExpMatch(host, "*.twitter.com") || 
        shExpMatch(host, "*.x.com") || 
        shExpMatch(host, "*.github.com") 
        ){
    return "PROXY 10.16.31.111:3128";
    }
    
    // Direct connection for all other traffic
    return "DIRECT";
}

