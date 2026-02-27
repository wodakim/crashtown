# Vehicle catalog — fonctionnement

Le garage, le shop et la course utilisent désormais un catalogue commun:

- `src/data/vehicles.js` (métadonnées gameplay/shop/couleurs)
- `src/data/vehicles.generated.js` (variantes HD/Pixel détectées automatiquement)

## Workflow pour ajouter une voiture

1. Ajouter les PNG dans:
   - `public/Assets/Vehicles/Player/HD/`
   - `public/Assets/Vehicles/Player/Pixel/`
2. Lancer `npm run vehicle:scan`.
3. Vérifier/compléter l'entrée correspondante dans `src/data/vehicles.js` (prix, couleurs, son, etc.).

## Important

- Le scan auto ne renseigne que les chemins d'images.
- Les données de boutique (prix, unlock, skins premium) restent pilotées dans `src/data/vehicles.js`.
