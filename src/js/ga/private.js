var _debug = false;

/**
 * @param {String} method
 * @param {arguments} args
 * @param {*} item
 * @returns {Array}
 */
function _arguments(method, args, item) {
    var _args = Array.prototype.slice.call(args);

    return (_args[method](item), _args);
}

/**
 * @param {String} rule
 * @param {*} subject
 * @returns {Boolean}
 */
function _validate(rule, subject) {
    switch (rule) {
        case 'id':
            return (/^ua-\d{4,9}-\d{1,4}$/i).test(subject.toString());
    }
}

/**
 * @param {Array} collection
 * @param {Function} iteratee
 */
function _for(collection, iteratee) {
    if (Object.prototype.toString.call(collection) !== '[object Array]') {
        try {
            collection = Array.prototype.slice.call(collection);
        } catch (e) {
            return false;
        }
    }

    for (var i = 0; i < collection.length; i++) {
        iteratee(collection[i], i);
    }
}

/**
 * @param {Object} collection
 * @param {Function} iteratee
 */
function _forEach(collection, iteratee) {
    if (typeof collection !== 'object') {
        return;
    }

    for (var prop in collection) {
        if(collection.hasOwnProperty(prop)) {
            iteratee(collection[prop], prop);
        }
    }
}


/**
 * @param {*} obj
 * @returns {Boolean}
 */
function _typeOf(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}


/**
 * @param {String} [title]
 * @param {...*} args
 */
function _log() {
    var title;

    if (_debug === false) {
        console.error('v pici');
        return;
    }

    if (arguments.length > 1) {
        title = [].shift.apply(arguments);
    }

    if (title) {
        console.group.call(window, '[ga.js]', title);
    }

    console.info.apply(window, arguments);

    if (title) {
        console.groupEnd.call(window);
    }
}
