module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:5173/',
        'http://localhost:5173/products',
        'http://localhost:5173/products/product-1',
      ],
      numberOfRuns: 2,
      settings: {
        chromeFlags: '--no-sandbox',
        preset: 'desktop',
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.7 },
          'warn',
          { minScore: 0.9 },
        ],
        'categories:accessibility': [
          'error',
          { minScore: 0.7 },
          'warn',
          { minScore: 0.9 },
        ],
        'categories:best-practices': [
          'error',
          { minScore: 0.7 },
          'warn',
          { minScore: 0.9 },
        ],
        'categories:seo': [
          'error',
          { minScore: 0.7 },
          'warn',
          { minScore: 0.9 },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
