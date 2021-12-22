import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';
 
const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'}, {}, { topic: 'test'}
);

const getRandomTicker = () => {
    const tickers = [ 'AAPL', 'TSLA' ];
    return tickers[Math.floor(Math.random() * tickers.length)];
};

const getRandomDirection = () => {
    const directions = [ 'UP', 'DOWN', 'Ranged' ];
    return directions[Math.floor(Math.random() * directions.length)];
};

const queueMessage = () => {

    const ticker = getRandomTicker();
    const direction = getRandomDirection();

    const event = { ticker, direction };

    const success = stream.write(eventType.toBuffer(event));

    if(success) {
        console.log('message wrote successfully to the stream!');
    } else {
        console.log('something went wrong!');
    }
}

setInterval(() => {
    queueMessage();
}, 3000);
