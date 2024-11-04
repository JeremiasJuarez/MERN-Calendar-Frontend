export * from './ui/uiSilce'
export * from './calendar/calendarSlice'
export * from './auth/authSlice'




//!SIEMPRE EXPORTAR EL STORE AL FINAL DE LAS IMPORTACIONES DEBIDO A QUE SI LO PONEMOS PRIMERO 
//! JS INTENTA EXPORTAR EL STORE Y LO QUE CONTIENE SIN ANTES EL STORE HABER RECIBIDO LAS FUNCIONES 
export * from './store'

//*Cuando exportas store al final en index.js, aseguras que todos los 
//*módulos (authSlice, uiSlice, calendarSlice) ya están definidos y disponibles. 
//*Así, cuando store.js finalmente se carga, tiene acceso a todos los slices necesarios.
//*Este orden garantiza que el store tenga todo el contenido que necesita antes de exportarlo.
//*Esto evita la referencia circular y permite que store.js funcione correctamente.