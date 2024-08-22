const DEFAULT_FROM_NUMBER = 1
const DEFAULT_TO_NUMBER = 9999999999999
const DEFAULT_PAGE_LIMIT = undefined;

function getLogQuery(query) {
    const from = query.from ? new Date(query.from) == "Invalid Date" ? new Date(DEFAULT_FROM_NUMBER).valueOf() : new Date(query.from).valueOf() : new Date(DEFAULT_FROM_NUMBER).valueOf()
    const to = query.to ? new Date(query.to) == "Invalid Date" ? new Date(DEFAULT_TO_NUMBER).valueOf() : new Date(query.to).valueOf() : new Date(DEFAULT_TO_NUMBER).valueOf()
    const limit = Math.floor(Math.abs(query.limit)) || DEFAULT_PAGE_LIMIT

    return { from, to, limit }
}

module.exports = {
    getLogQuery,
    DEFAULT_FROM_NUMBER,
    DEFAULT_TO_NUMBER,
    DEFAULT_PAGE_LIMIT
}
