import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { products } from './schema.js';

const client = postgres({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'eshop',
  username: process.env.DB_USER || 'eshop',
  password: process.env.DB_PASSWORD || 'eshop123',
});

const db = drizzle(client);

async function init() {
  try {
    // Créer la table si elle n'existe pas
    await client`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT DEFAULT '',
        category TEXT DEFAULT 'general',
        image TEXT DEFAULT 'https://via.placeholder.com/200',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insérer des produits d'exemple si la table est vide
    const existingProducts = await db.select().from(products);
    if (existingProducts.length === 0) {
      await db.insert(products).values([
        {
          title: 'Laptop Pro',
          price: '999.99',
          description: 'Ordinateur portable haute performance',
          category: 'electronics',
          image: 'https://via.placeholder.com/200?text=Laptop',
        },
        {
          title: 'Casque Audio',
          price: '149.99',
          description: 'Casque Bluetooth premium',
          category: 'audio',
          image: 'https://via.placeholder.com/200?text=Headphones',
        },
        {
          title: 'Souris Wireless',
          price: '49.99',
          description: 'Souris sans fil ergonomique',
          category: 'accessories',
          image: 'https://via.placeholder.com/200?text=Mouse',
        },
      ]);
      console.log('✅ Produits d\'exemple ajoutés');
    }

    console.log('✅ Base de données initialisée');
    await client.end();
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
}

init();
