var net = require('net')

// la collezione di tutti i socket associati ai client che si sono connessi
var clients = []

var server = net.createServer(function(socket) {
    console.log('è arrivato qualcuno')
    clients.push(socket)
    socket.on('data', function(data) {
        var messaggio = data.toString()
        // mando (write) il messaggio ricevuto a tutti
        clients.forEach(function(s) {
            s.write('> ' + messaggio)
        })
    })
})
server.listen(10000)