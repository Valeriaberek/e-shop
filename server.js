import express from 'express';
import cors from 'cors';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { products } from './db/schema.js';
import { eq } from 'drizzle-orm';

const app = express();
const PORT = process.env.PORT || 3002;

// Connexion PostgreSQL
const client = postgres({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'eshop',
  username: process.env.DB_USER || 'eshop',
  password: process.env.DB_PASSWORD || 'eshop123',
});

const db = drizzle(client);

// Middleware
app.use(cors());
app.use(express.json());

// GET tous les produits
app.get('/api/products', async (req, res) => {
  try {
    const allProducts = await db.select().from(products);
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET un produit par ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, parseInt(req.params.id)));
    
    if (product.length === 0) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }
    res.json(product[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// CREATE - Ajouter un produit
app.post('/api/products', async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    if (!title || !price) {
      return res.status(400).json({ error: 'Titre et prix requis' });
    }

    const newProduct = await db
      .insert(products)
      .values({
        title,
        price: parseFloat(price),
        description: description || '',
        category: category || 'general',
        image: image || 'https://via.placeholder.com/200',
      })
      .returning();

    res.status(201).json(newProduct[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// UPDATE - Modifier un produit
app.put('/api/products/:id', async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    const updated = await db
      .update(products)
      .set({
        ...(title && { title }),
        ...(price && { price: parseFloat(price) }),
        ...(description !== undefined && { description }),
        ...(category && { category }),
        ...(image && { image }),
      })
      .where(eq(products.id, parseInt(req.params.id)))
      .returning();

    if (updated.length === 0) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    res.json(updated[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// DELETE - Supprimer un produit
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deleted = await db
      .delete(products)
      .where(eq(products.id, parseInt(req.params.id)))
      .returning();

    if (deleted.length === 0) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    res.json(deleted[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API démarrée sur http://localhost:${PORT}`);
});
