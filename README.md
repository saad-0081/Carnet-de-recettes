# 🍲 Carnet de Recettes – Club Cuisine YouCode

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-671DDF)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite)
![Status](https://img.shields.io/badge/Status-In_Development-orange)

## 📖 Présentation

**Carnet de Recettes** est une application web développée dans le cadre du projet du Club Cuisine YouCode.

Elle permet aux membres du club de consulter, rechercher, ajouter et supprimer des recettes à travers une interface simple, moderne et responsive.

L'application communique avec l'API publique **DummyJSON Recipes** en utilisant Axios pour effectuer les opérations HTTP.

## 🎯 Objectifs du projet

- Faciliter la consultation des recettes.
- Permettre la recherche par mot-clé.
- Offrir la possibilité de proposer de nouvelles recettes.
- Permettre la suppression des recettes.
- Gérer les chargements et les erreurs API.
- Organiser le code selon une architecture modulaire.

## ✨ Fonctionnalités

### US-01 – Consulter les recettes
- Récupération des 12 premières recettes depuis l'API.
- Affichage des photos et des informations.
- Présentation sous forme de cartes.

### US-02 – Rechercher une recette
- Recherche par mot-clé.
- Affichage des résultats correspondants.
- Gestion des résultats vides.
- Possibilité de revenir à la liste complète.

### US-03 – Ajouter une recette
- Formulaire de création.
- Validation des champs.
- Affichage des erreurs de validation.
- Envoi des données avec une requête POST.
- Affichage de la recette ajoutée.

### US-04 – Supprimer une recette
- Bouton de suppression sur chaque recette.
- Confirmation avant suppression.
- Envoi d'une requête DELETE.
- Mise à jour de l'interface après confirmation du serveur.

### US-05 – Gestion des erreurs
- Indicateur de chargement.
- Gestion des erreurs réseau.
- Gestion des erreurs HTTP 404 et 500.
- Bouton pour réessayer une opération.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure de l'application |
| Tailwind CSS | Interface et responsive design |
| JavaScript ES6+ | Logique et interactions |
| Axios | Communication avec l'API |
| Vite | Serveur de développement et build |
| DummyJSON API | Source des recettes |

## 📁 Structure du projet

```text
Carnet-de-recettes/
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── api.js
    ├── validation.js
    ├── display.js
    └── main.js
```

## 🌐 API utilisée

**DummyJSON Recipes API**

Base URL:
`https://dummyjson.com`

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/recipes?limit=12` | Récupérer les recettes |
| GET | `/recipes/search?q=...` | Rechercher une recette |
| POST | `/recipes/add` | Ajouter une recette |
| DELETE | `/recipes/{id}` | Supprimer une recette |

## ⚙️ Installation et lancement

### 1. Cloner le projet

```bash
git clone URL_DU_REPOSITORY
```

### 2. Accéder au dossier

```bash
cd Carnet-de-recettes
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

### 5. Construire le projet

```bash
npm run build
```

## 🔄 Méthodologie de travail

Le projet est organisé autour de cinq User Stories :

- US-01 : Consulter les recettes.
- US-02 : Rechercher une recette.
- US-03 : Ajouter une recette.
- US-04 : Supprimer une recette.
- US-05 : Gérer les erreurs.

Le développement est réalisé progressivement avec Git et GitHub, en utilisant des branches dédiées, des commits réguliers et des Pull Requests.

## ⚠️ Limites de l'API

DummyJSON est une API de démonstration.

Les opérations POST et DELETE simulent les modifications côté serveur. Les données ajoutées ou supprimées ne sont donc pas conservées de manière permanente après un rechargement.

## 👨‍💻 Auteur

**Saad El Moudnib**

Projet réalisé dans le cadre de la formation YouCode.

## 📄 Licence

Ce projet est réalisé à des fins pédagogiques et d'apprentissage.