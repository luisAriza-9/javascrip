//Simular el comportamiento de una red social 
//con procesos asíncronos en el siguiente orden:

//-Añadir amigo
//-Llega la solicitud
//-Acepta la solicitud
//-Llega la notificación de aceptación
//-Chatean
//-Se publica una foto
//-La foto es comentada
//-SE cierra sesión

//Los tiempos de espera de cada proceso asíncrono son libres.



class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
      this.amigos = [];
      this.notificaciones = [];
    }
  
    agregarAmigo(amigo, callback) {
      this.amigos.push(amigo);
      amigo.recibirSolicitud(this, callback);
    }
  
    recibirSolicitud(amigo, callback) {
      this.notificaciones.push({
        tipo: "solicitudAmigo",
        amigo: amigo,
      });
      callback(this);
    }
  
    aceptarSolicitud(amigo) {
      this.amigos.push(amigo);
      amigo.recibirNotificacionAceptacion(this);
    }
  
    recibirNotificacionAceptacion(amigo) {
      this.notificaciones.push({
        tipo: "aceptacionSolicitud",
        amigo: amigo,
      });
    }
  
    chatear(amigo, mensaje) {
      console.log(`${this.nombre} chatea con ${amigo.nombre}: ${mensaje}`);
    }
  
    publicarFoto(foto) {
      console.log(`${this.nombre} publica una foto: ${foto}`);
    }
  
    comentarFoto(foto, comentario) {
      console.log(`${this.nombre} comenta la foto de ${foto.autor}: ${comentario}`);
    }
  
    cerrarSesion() {
      console.log(`${this.nombre} cierra sesión`);
    }
  }
  
  const usuario1 = new Usuario("Juan");
  const usuario2 = new Usuario("Maria");
  
  usuario1.agregarAmigo(usuario2, (amigo) => {
    setTimeout(() => {
      amigo.aceptarSolicitud(usuario1);
    }, 1000);
  });
  
  setTimeout(() => {
    usuario1.chatear(usuario2, "¡Hola!");
  }, 2000);
  
  setTimeout(() => {
    usuario2.publicarFoto("una foto");
  }, 3000);
  
  setTimeout(() => {
    usuario1.comentarFoto(usuario2.fotos[0], "¡Qué linda foto!");
  }, 4000);
  
  setTimeout(() => {
    usuario1.cerrarSesion();
  }, 5000);
  
  