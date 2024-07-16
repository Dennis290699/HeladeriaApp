import { FirebaseService } from './firebase/firebaseConfig.js';
// import { IceCreamController } from './controllers/IceCreamController.js';
// import { CartController } from './controllers/CartController.js';
// Importar otros controladores y servicios según sea necesario

document.addEventListener('DOMContentLoaded', () => {
    const firebaseService = new FirebaseService();
    const iceCreamController = new IceCreamController();
    const cartController = new CartController();
    // Inicializar otros controladores según sea necesario

    // Lógica para inicializar la página específica
    const path = window.location.pathname;
    if (path.includes('categories')) {
        // Inicializar categorías
    } else if (path.includes('product')) {
        // Inicializar producto
    } else if (path.includes('cart')) {
        // Inicializar carrito
    } else if (path.includes('register')) {
        // Inicializar formulario de registro
    } else {
        // Inicializar landing page
    }
});
