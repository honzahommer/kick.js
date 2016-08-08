if (('KICK' in window) === false) {
    window.KICK = { };
}

var pkg = window.KICK.js = KICKjs;

_forEach(KICKjs, function(item, key) {
    pkg[key] = item;
});
