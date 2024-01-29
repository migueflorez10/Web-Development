// metodos de propiedad 

const reproductor = {
    reproducir : function(id){
        console.log (`Reproduciendo la cancion con el ID: ${id}`);
        },
    pausar: function(){
        console.log(`Pausando...`);
    },
    creandoPlaylist: function(nombre){
        console.log(`Creando la playlist con el nombre: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist con el nombre: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion con el ID: ${id}`);
}

reproductor.reproducir(108);
reproductor.pausar();
reproductor.borrarCancion(108);
reproductor.creandoPlaylist('Imagine Dragons');
reproductor.reproducirPlaylist('Imagine Dragons');