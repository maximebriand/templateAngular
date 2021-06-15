##Petit rappel sur SASS
C'est un moyen de faire du CSS de façon assez dynamique.
Le principal intérêt est de pouvoir tout séparer dans des dossiers et des fichiers
bien distincts. 

Un nom de fichier avec un underscore devant: _nomfichier.scss ne sera pas généré
à la différence de nomfichier.scss.
Il est donc important de bien l'utiliser dans la nomenclature pour ne compiler qu'un 
seul fichier css. Attention, lors des imports, on ne mentionne ni le underscore ni l'extension.


##Le dossier SASS est à gérer de manière à s'y retrouver facilement:
####Reset de Meyer
Il Permet de supprimer tous les styles CSS imposés par chaque navigateur.
Cela permet de créer un site qui s'adaptera à tous les navigateurs car on 
va être obligé de spécifié chaque margin, padding ou autre.

####Variables
Comme son nom l'indique on va stocker toutes les variables SASS dans ce fichier.
On aura par exemple les couleurs, les breakpoints

####Fonts
Dans ce fichier on va retrouver tout ce qui fait référence aux fonts.
Les imports, les font-face, et les différentes valeurs.

####Template
Dans le dossier template on va retrouver tout ce qui permet de créer le design global du site
- Le header
- le footer
- le layout du site

