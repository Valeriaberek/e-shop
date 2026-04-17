# E-Shop - Setup Guide

## 🚀 Démarrage rapide avec Docker

### Prérequis
- Docker et Docker Compose installés

### 1️⃣ Démarrer l'application

```bash
docker-compose up
```

Cela va:
- ✅ Lancer PostgreSQL
- ✅ Lancer l'API (port 3001)
- ✅ Lancer le Frontend (port 5173)

### 2️⃣ Accéder à l'appli

- **Frontend**: http://localhost:5173
- **API**: http://localhost:3001/api/products

---

## 📝 API Endpoints

### GET tous les produits
```bash
GET http://localhost:3001/api/products
```

### GET un produit
```bash
GET http://localhost:3001/api/products/1
```

### CREATE - Ajouter un produit
```bash
POST http://localhost:3001/api/products
Content-Type: application/json

{
  "title": "Mon produit",
  "price": 29.99,
  "description": "Description du produit",
  "category": "electronics",
  "image": "https://..."
}
```

### UPDATE - Modifier un produit
```bash
PUT http://localhost:3001/api/products/1
Content-Type: application/json

{
  "title": "Nouveau titre",
  "price": 39.99
}
```

### DELETE - Supprimer un produit
```bash
DELETE http://localhost:3001/api/products/1
```

---

## 🛠️ Développement local (sans Docker)

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer PostgreSQL

Crée un fichier `.env` à la racine:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=eshop
DB_USER=eshop
DB_PASSWORD=eshop123
```

### 3. Démarrer le serveur
```bash
npm run server:dev
```

### 4. Dans un autre terminal, démarrer le frontend
```bash
npm run dev
```

---

## 📚 Structure du projet

```
e-shop/
├── server.js              # API Express + Drizzle
├── db/
│   └── schema.js         # Schéma Drizzle
├── src/
│   ├── Products.tsx      # Liste des produits
│   └── ...
├── docker-compose.yml    # Configuration Docker
├── Dockerfile            # Backend
├── Dockerfile.frontend   # Frontend
└── package.json
```

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express + Node.js
- **ORM**: Drizzle
- **Database**: PostgreSQL
- **Deployment**: Docker + Docker Compose

---

## 💡 Prochaines étapes

1. Ajoute un formulaire pour créer des produits
2. Ajoute la gestion des erreurs
3. Ajoute l'authentification utilisateur

Besoin d'aide? 😊
