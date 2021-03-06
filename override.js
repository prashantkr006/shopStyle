exports.overrideContentType = function(){
    return function(req, res, next) {
        if (req.headers['x-amz-sns-message-type']) {
            req.headers['content-type'] = 'application/json;charset=UTF-8';
        }
        next();
    };
}