import pino from 'pino';

/*
 * To toggle debug logs visibility in console,
 * comment the `level` property in pino options object. 
 */

const log = pino({
    transport: {
        target: 'pino-pretty',
    },
    level: 'debug',
    base: {
        pid: false,
    },
});

export default log;
