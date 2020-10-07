window.loom_getSessionItem = (key) => {
    return sessionStorage.getItem(key);

}

window.loom_setSessionItem = (key, value) => {
    sessionStorage.setItem(key, value);
}