function notFoundHandler(request, response, next) {
    next({ status: 404, message: `Not found: ${request.originalUrl}` });
}

module.exports = notFoundHandler;