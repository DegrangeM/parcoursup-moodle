# parcoursup-moodle

TODO

- Importer le cours moodle MBZ
- Ouvrir `Mes idées de vœux parcoursup` puis cliquer sur `Préréglage` puis sur `Ajouter une fiche`.
- Copier l'url de la page actuelle (Ajouter une fiche)
- En mode édition, faire `Modifier > Paramètres` à droite de `Idées de voeux parcoursup.user.js`
- Dans le gestionnaire de fichier (à droite de sélectionner des fichiers), cliquer sur `Idées de voeux parcoursup.user.js` puis sur Télécharger.
- Ouvrir le fichier et modifier la ligne const URL pour mettre l'url précédemment copier.
- Si vous n'êtes pas en IDF, modifier la ligne `// @match https://moodle.monlycee.net/*` par l'url vers votre moodle (garder le `/*` à la fin)
- Fermez la popup sur moodle puis glissez déposez votre fichier `Idées de voeux parcoursup.user.js` dans le gestionnaire de fichier pour mettre en ligne sur moodle la version modifiée du fichier.

Tout fonctionne !
