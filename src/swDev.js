const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        `${process.env.PUBLIC_URL}/sw.js`
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
      registration.update();
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

export default registerServiceWorker;
