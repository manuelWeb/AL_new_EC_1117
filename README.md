### todo
- rendu BS trop tôt > ajouter dépendance ou callback.
- ajouter fct dans gulpfile.js > supp /evtSrc/img/src.png = supp /evtProd/img/prod.png 
- simplifier l'architecture des dossiers avec rimraf cp et vérifier la boucle foreach return stream < quel incidence
- all done guy !!!

### sauvegarde sur clef usb
- sur la clef
  + git clone --bar ~/le/projet/git/a/cloner
- sur master (PC-A)
  + git remote add origin e:/portail
  + git st ok (add -A & git co -m "com")
  + git push origin master
- supp remote si boulette
  + git remote rm origin

### nettoyage du cache .gitignore
- git rm -r --cached
  + archiver tous les fichier à conserver
  + supprime tous de l'index
- git add .
  + reimporte tout dans l'index (.gitignore est pris en compte)
- git co -m ".gitignore est maintenant fctlle"
  + archiver (pour supprimer tous ce qui est ignoré)
 
### revenir sur un commit
- sur le dernier commit
  + git commit --amend
- revenir sur un vieux commit
  + git rebase -i @~9
    * reviens sur les 9 derniers commit
    * dans vim se plcer sur le commit à modifier :
    * ctrl+w pour changer de fenetre, i pour inserer caracter
  + passer la ligne de pick à e (edit)
  + enrg depuis vim> :wq
  + modifier le commit 
    * git commit --amend
  + valider le commit
    * git rebase --continue
  + une fois corrigé :
    * git push --force origin master