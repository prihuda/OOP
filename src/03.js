const syslog = require('syslog-client')

const levels = Object.keys({
    emerg: 0,
    alert: 1,
    crit: 2,
    err: 3,
    warning: 3,
    notice: 4,
    info: 5,
    debug: 6,
});
class Logging {
    log(info, callback) {
        let level = info[LEVEL];
        if (!~levels.indexOf(level)) {
            return callback(
                new Error('Cannot log unknown syslog level: ' + info[LEVEL])
            );
        }
        level = level === 'warn' ? 'warning' : level;
        const output = info[MESSAGE];

        const syslogMsg = this.producer.produce({
            severity: level,
            host: this.localhost,
            date: new Date(),
            message: this.endOfLine ? output + this.endOfLine : output
        });

    }
}