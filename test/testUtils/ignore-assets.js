import Module, { _load } from 'module';
const realLoad = _load;

_load = function (request, parent, isMain) {
    if (request.match(/\.(scss|png)$/)) {
        return request;
    }

    return realLoad.apply(Module, arguments);
};