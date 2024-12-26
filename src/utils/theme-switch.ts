import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if the user has a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  });

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = (theme: Theme) => {
      if (theme === 'system') {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
      } else {
        root.setAttribute('data-theme', theme);
      }
    };

    updateTheme(theme);

    // Listen for system color scheme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const switchTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, switchTheme };
};

export default useTheme;
