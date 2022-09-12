// ==UserScript==
// @name         Idées de voeux parcoursup
// @version      1
// @description  Permet d'ajouter des idées de voeux parcoursup
// @author       Degrange
// @match        https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation*
// @match        https://moodle.monlycee.net/*
// ==/UserScript==

(function() {
    'use strict';

    const URL = 'https://moodle.monlycee.net/mod/data/edit.php?d=37';
    
    if(location.host === 'dossier.parcoursup.fr') {
        const boutonImprimer = document.getElementById('btn-imprimer-2');
        const boutonFavoris = document.createElement('button');
        boutonImprimer.parentNode.insertBefore(boutonFavoris, boutonImprimer)
        const imageFavoris = document.createElement('img');
        imageFavoris.src = 'https://www.parcoursup.fr/images/Pictogramme/picto-parchemin.svg';
        boutonFavoris.appendChild(imageFavoris)
        boutonFavoris.className = 'btn btn-bordure-orange btn-icone-fiche btn-impression pr-1 mb-3 ml-2'
        imageFavoris.classList.add('icon')
        imageFavoris.style.filter = 'hue-rotate(197deg)';
        boutonFavoris.addEventListener('click', function() {
            const vurl = location.href;
            const vetab = (document.querySelectorAll('.libelle-formation .lib-form-aff.f-w-b')[0].textContent + document.querySelectorAll('.libelle-formation .lib-form-aff.f-w-b')[1].textContent).trim().replace(/[\t\r\n ]+/g,' ');
            const vform = document.querySelector('.lib-form-aff:not(.f-w-b)').textContent
            window.open(URL+'#'+vurl+'|'+vform + '|' + vetab);
        });
    }
    else {
        document.body.classList.add('parcoursup-userscript')
    }
})();
