export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      img.style.display = 'none';
      document.body.appendChild(img);
      setTimeout(() => document.body.removeChild(img), 100);
      resolve();
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
    img.loading = 'eager';
  });
};

export const preloadImages = async (imageSources: string[]): Promise<void> => {
  try {
    const promises = imageSources.map(src => preloadImage(src));
    await Promise.all(promises);
    console.log('All background images preloaded successfully');
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

export const preloadCriticalImages = (imageSources: string[]): void => {
  imageSources.forEach(src => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = src;
    img2.src = src;
    img1.loading = 'eager';
    img2.loading = 'eager';
  });
};
