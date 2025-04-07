import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        dificultad: resolve(__dirname, 'src/pantalla-dificultad/Dificultad.html'),
        //inicio: resolve(__dirname, 'src/pantalla-inicio/Inicio.html'),
        juego: resolve(__dirname, 'Juego.html'),
        mapas: resolve(__dirname, 'src/pantalla-mapas/Mapas.html'),
        modalidad: resolve(__dirname, 'src/pantalla-modalidad/Modo.html'),
      },
    },
  },
});
