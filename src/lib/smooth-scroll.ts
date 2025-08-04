export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return scrollToSection;
}

// Enhanced smooth scroll with easing
export function smoothScrollToWithEasing(elementId: string, duration: number = 1000, offset: number = 80) {
  const element = document.getElementById(elementId.replace('#', ''));
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function (easeInOutQuart)
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
  }

  requestAnimationFrame(animation);
}

// Intersection Observer for scroll-triggered animations
export function createScrollObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Hook for scroll-triggered animations
export function useScrollAnimation() {
  const observeElement = (
    element: Element,
    animationCallback: () => void,
    options?: IntersectionObserverInit
  ) => {
    const observer = createScrollObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationCallback();
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    observer.observe(element);
    return observer;
  };

  return { observeElement };
}

// Scroll progress indicator
export function createScrollProgress() {
  let progressBar: HTMLElement | null = null;

  const createProgressBar = () => {
    progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      z-index: 9999;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
  };

  const updateProgress = () => {
    if (!progressBar) createProgressBar();
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  };

  const init = () => {
    createProgressBar();
    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (progressBar) {
        document.body.removeChild(progressBar);
      }
    };
  };

  return { init, updateProgress };
}

// Parallax scroll effect
export function createParallaxEffect(element: HTMLElement, speed: number = 0.5) {
  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * speed;
    element.style.transform = `translateY(${parallax}px)`;
  };

  window.addEventListener('scroll', updateParallax);
  
  return () => {
    window.removeEventListener('scroll', updateParallax);
  };
}
