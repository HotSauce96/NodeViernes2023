
//Listado de los servicios
app.post('/registrarhabitacion', function (req, res) {
  res.send('estamos registrando la habitacion')
})

app.get('/buscarhabitaciones', function (req, res) {
    res.send('estamos buscando todas las habitaciones')
})

app.get('/buscarhabitacion', function (req, res) {
    res.send('estamos buscando 1 habitacion')
})

app.put('/actualizarhabitacion', function (req, res) {
    res.send('estamos actualizando 1 habitacion')
})

app.listen(3000,function(){
    console.log("Servidor encendido...")
})