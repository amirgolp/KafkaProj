import avro from 'avsc';

export default avro.Type.forSchema({
    type: 'record',
    fields: [
        {
            name: 'ticker', 
            type: {type: 'enum', symbols: ['AAPL', 'TSLA']}
        },
        {
            name: 'direction', 
            type: 'string'
        }
      ]
    });