import pino from 'pino';

const log = pino({
    transport: {
        target: 'pino-pretty',
    },
    base: {
        pid: false,
    },
});

export default log;
