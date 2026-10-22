> ℹ️ Dépôt vitrine — code de base / architecture ; fonctionnalités clés privées.

# Solana Trading Suite

Squelette TypeScript modulaire pour présenter une architecture d’automatisation Solana.

## ✨ Fonctionnalités

- Dispatcher CLI vers quatre modules : `sniper`, `buy`, `sell`, `wallet`.
- Chaque module lève `Not implemented (logique privée non incluse)`.
- Aucun appel RPC, transaction, stratégie, portefeuille ni génération de clés.

## 🧱 Structure

```text
src/index.ts     Dispatcher CLI
sniper/index.ts  Stub
buy/index.ts     Stub
sell/index.ts    Stub
wallet/index.ts  Stub (aucune donnée de portefeuille)
shared/          Emplacement réservé
```

## 🚀 Lancer

Prérequis : Node.js 22+ et npm.

```bash
npm install
npm run typecheck
npm run build
npm start -- sniper
```

Remplacer `sniper` par `buy`, `sell` ou `wallet`. Le résultat attendu est l’erreur du stub et un code de sortie 1. Une commande absente ou inconnue retourne 2. Aucun secret ni service externe requis.

## 🛠️ Stack

TypeScript · Node.js · `@solana/web3.js` (dépendance déclarée, non utilisée par les stubs).

## 👤 Auteur

Konaté Adama (@DaskoStudio) — Ynov Campus
