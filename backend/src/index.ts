import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..', '..');

function readJson<T>(relativePath: string): T {
  return JSON.parse(readFileSync(path.join(projectRoot, relativePath), 'utf8'));
}

type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  [key: string]: unknown;
};

type Shop = {
  promos: unknown[];
  cart: {
    items: { lineTotal: number }[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

const shop = readJson<Shop>('data/shop.json');
const products = readJson<Product[]>('data/products.json');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log('[shop-api] ' + req.method + ' ' + req.url);
  next();
});

app.use(
  '/assets',
  express.static(path.join(projectRoot, 'assets'), {
    maxAge: '7d',
    immutable: true,
  }),
);

function setCache(seconds: number) {
  return (_req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Cache-Control', `public, max-age=${seconds}`);
    next();
  };
}

function toProductSummary(product: Product) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    heroAsset: product.heroAsset,
    stock: product.stock,
  };
}

function paginate<T>(items: T[], page: number, limit: number) {
  const safePage = Math.max(1, page);
  const safeLimit = Math.min(Math.max(1, limit), 20);
  const start = (safePage - 1) * safeLimit;

  return {
    page: safePage,
    limit: safeLimit,
    total: items.length,
    results: items.slice(start, start + safeLimit),
  };
}

app.get('/api/shop/home', setCache(60), (_req, res) => {
  res.json({
    ...shop,
    featured: products.slice(0, 6).map(toProductSummary),
  });
});

app.get('/api/products', setCache(60), (req, res) => {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 12);

  res.json(paginate(products.map(toProductSummary), page, limit));
});

app.get('/api/products/:id', setCache(60), (req, res) => {
  const product = products.find((entry) => entry.id === req.params.id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.json(product);
});

app.get('/api/search', setCache(60), (req, res) => {
  const query = String(req.query.q ?? '').trim().toLowerCase();
  const category = String(req.query.category ?? '');
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 12);

  const filtered = products.filter((product) => {
    const matchesQuery =
      query.length === 0 || product.name.toLowerCase().includes(query);
    const matchesCategory =
      category.length === 0 || product.category === category;

    return matchesQuery && matchesCategory;
  });

  res.json(paginate(filtered.map(toProductSummary), page, limit));
});

app.get('/api/promotions', (_req, res) => {
  res.json({
    promos: shop.promos,
  });
});

app.get('/api/stock/:id', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const product = products.find((entry) => entry.id === req.params.id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.json({
    id: product.id,
    stock: product.stock,
  });
});

app.get('/api/cart', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const subtotal = shop.cart.items.reduce(
    (total, item) => total + item.lineTotal,
    0,
  );

  res.json({
    ...shop.cart,
    subtotal,
    shipping: 12,
  });
});

app.get('/api/checkout', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const subtotal = shop.cart.items.reduce(
    (total, item) => total + item.lineTotal,
    0,
  );

  res.json({
    cart: shop.cart,
    subtotal,
    shipping: 12,
    taxes: subtotal * 0.2,
    recommendations: products.slice(3, 7).map(toProductSummary),
  });
});

app.listen(4100, () => {
  console.log('heavy-shop backend running on http://localhost:4100');
});
