function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop);       
}
module.exports = {
    freeze:freeze
};