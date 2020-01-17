module.exports = {
    compose: (...args) => x => args.reduceRight((res, cb) => cb(res), x)
}