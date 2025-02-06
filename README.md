# Codestral Chat Control

<div align="center">

![Codestral Logo](https://img.shields.io/badge/CODESTRAL-Chat%20Control-blue?style=for-the-badge)

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-8.0-purple?style=flat-square&logo=eslint)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Un système de contrôle et d'analyse de code intelligent intégrant des outils de développement et un chat IA.

[Fonctionnalités](#-fonctionnalités) •
[Installation](#️-installation) •
[Documentation](#-documentation) •
[Contribution](#-contribution)

---

## 🖼️ Interface

<div align="center">

<!-- Image locale (doit être dans le dossier public/images/) -->

![Interface Principale](/public/images/interface.png)
_Interface principale de Codestral Chat Control_

<!-- Image hébergée sur un service externe -->
<img src="https://example.com/path/to/screenshot.png" alt="Capture d'écran de l'application" width="800"/>

<!-- Image avec lien cliquable -->

[![Demo Video](https://example.com/path/to/thumbnail.jpg)](https://example.com/path/to/video)
_Cliquez sur l'image pour voir la démo_

</div>

Pour ajouter vos propres captures d'écran :

1. Créez un dossier `public/images/` à la racine du projet
2. Ajoutez vos images dans ce dossier
3. Référencez-les dans le README avec le chemin `/public/images/nom-image.png`

</div>

## ✨ Points Forts

- 🤖 **Chat IA Intégré** - Assistant de développement intelligent
- 📊 **Analyse de Code** - Statistiques et métriques détaillées
- ⚡ **Performance** - Exécution rapide et efficace
- 🛠️ **Outils Intégrés** - Suite complète d'outils de développement
- 🎨 **Interface Moderne** - Design épuré et intuitif
- 🔒 **Sécurisé** - Gestion sécurisée des données

## 🚀 Fonctionnalités

<details>
<summary><b>1. Outils Communs (COMMONS)</b></summary>

### Compteur de lignes

![Compteur de lignes](https://img.shields.io/badge/Analyse-Code-blue?style=for-the-badge)

- 📏 Compte les lignes de code, commentaires et lignes vides
- 📊 Affiche des statistiques et graphiques de répartition
- 🔧 Supporte plusieurs langages de programmation

### Affichage de l'heure

![Horloge](https://img.shields.io/badge/Temps-Réel-green?style=for-the-badge)

- ⏰ Format court (HH:MM)
- ⚡ Format avec secondes (HH:MM:SS)
- 🌍 Affichage du fuseau horaire

### Chronomètre

![Timer](https://img.shields.io/badge/Timer-Précis-orange?style=for-the-badge)

- ⏱️ Paramétrage de la durée
- 💬 Messages personnalisés
- 🔄 Possibilité d'exécuter des scripts à la fin
      </details>

<details>
<summary><b>2. Analyseur de Code (SCANNER)</b></summary>

### Analyse des commandes

- 📝 Liste des commandes disponibles
- 📖 Description des commandes
- 💡 Suggestions d'utilisation

### Gestion des dépendances

- 🔍 Analyse des dépendances inutilisées
- 📈 Vérification des versions
- 🎯 Suggestions d'optimisation
      </details>

<details>
<summary><b>3. Décomposition de Code (DECOMPOSER)</b></summary>

- 🔄 Extraction automatique des fonctions
- 📁 Création de fichiers séparés
- 🎨 Réorganisation du code
      </details>

<details>
<summary><b>4. Lecteur de Configuration (LIRE)</b></summary>

Lecture et analyse des fichiers de configuration :

- 🐳 Docker
- 🔍 ESLint
- 🧪 Jest
- ⚡ Next.js
- 📘 TypeScript
- 📦 Webpack
- 🌿 Git
- 💅 Prettier
      </details>

## 🛠️ Installation

1. **Cloner le projet**
   \`\`\`bash
   git clone https://github.com/patriote2047/codestral-chat-control.git
   \`\`\`

2. **Installer les dépendances**
   \`\`\`bash
   cd codestral-chat-control
   npm install
   \`\`\`

3. **Configuration**
   \`\`\`bash
   cp .env.example .env

# Configurer vos variables d'environnement

\`\`\`

## 🚦 Démarrage

\`\`\`bash

# Mode développement

npm run dev

# Production

npm run build
npm start
\`\`\`

## 📚 Documentation

### Scripts Disponibles

| Commande          | Description                                |
| ----------------- | ------------------------------------------ |
| \`npm run dev\`   | Démarre le serveur de développement        |
| \`npm run build\` | Construit l'application pour la production |
| \`npm start\`     | Démarre l'application en production        |

| \`npm run lint\`
