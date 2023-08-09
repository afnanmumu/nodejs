const EmitterEvent = require('events');

class school extends EmitterEvent {
    startperiod() {
        console.log('class started');

        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = school;
