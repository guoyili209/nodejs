var Dictionary = function () {
    var _values = [];
    var _keys = [];
    this.indexOf = _indexOf;
    this.set = _set;
    this.get = _get;
    this.remove = _remove;
    this.clear = _clear;

    function _set(key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            _values[index] = value;
            return;
        }
        _keys.push(key);
        _values.push(value);
    }
    function _indexOf(key) {
        var index = _keys.indexOf(key);
        if (index >= 0) return index;
        key = ((typeof key == 'string')) ? Number(key) : (((typeof key == 'number')) ? key.toString() : key);
        return this.keys.indexOf(key);
    }
    function _get(key) {
        var index = _indexOf(key);
        return index < 0 ? null : _values[index];
    }
    function _remove(key) {
        var index = _indexOf(key);
        if (index >= 0) {
            _keys.splice(index, 1);
            _values.splice(index, 1);
            return true;
        }
        return false;
    }
    function _clear() {
        _keys.length = 0;
        _keys.length = 0;
    }
}