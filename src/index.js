function koalazily({ offset = 100, threshold = 0.01, area, onLoad, useLoader = false, dataSelector = 'koalazily' } = {}) {
  const images = Array.from(document.querySelectorAll(`[data-${dataSelector}]`));

  if (!('IntersectionObserver' in window)) {
    // If Intersection Observer API is not available, fall back with the normal loading of images.
    images.forEach(loadImage);
    return images;
  }

  // See here: https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
  images.forEach(image => {
    const width = image.clientWidth || image.offsetWidth;
    const height = image.clientHeight || image.offsetHeight;

    if (width && height) {
      image.src = Boolean(useLoader)
        ? `data:image/svg+xml,%3Csvg id='koalazily-loader' width='${width}px' height='${height}px' viewBox='0 0 ${width} ${height}' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cstyle type='text/css'%3E @keyframes koalazily-pulse %7B 0%25 %7Bbackground-position: 0%25 0%25; %7D 100%25 %7Bbackground-position: -135%25 0%25; %7D%0A%7D%0Asvg%23koalazily-loader %7B background: linear-gradient(-90deg, %23e0e0e0 0%25, %23f0f0f0 50%25, %23e0e0e0 100%25); background-size: 400%25 400%25; animation: koalazily-pulse 1.2s ease-in-out infinite;%0A%7D %3C/style%3E%3C/svg%3E`
        : `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`
    }
  });

  function loadImage(image) {
    image.src = image.dataset[dataSelector];
    image.onload = () => {
      if (onLoad) onLoad(image);
      delete image.dataset[dataSelector];
    }
  }

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        loadImage(entry.target);
      }
    });
  }

  const options = {
    root: area,
    rootMargin: `${offset}px 0px`,
    threshold: threshold
  };
  const observer = new IntersectionObserver(onIntersection, options);
  images.forEach(image => observer.observe(image));
  return images;
}

export default koalazily;