const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
