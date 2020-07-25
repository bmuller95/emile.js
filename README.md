# emile.js

******************************************
Règles de l'Emile

Auteurs : François Brucker et Jacky Tousch
******************************************


Materiel : 5 des.
Objectif : Le but est d'arriver à 2500 points. Tout le monde commence avec -2500 points.

Les joueurs jouent chacun leur tour dans le sens horaire.


A) Tour de jeu
==============

Chaque tour de jeu est compose d'un ou plusieurs jet de des. Au premier jet d'un tour :
	- les 5 des sont lancés,
	- aucun dé n'est réservé,
	- le score potentiel vaut 0.


A.1) Phase de jeu d'un joueur
=============================

    1 - le joueur jette les dés non réservés 
	2 - S'il existe des "dés marquant" (partie B)
		alors :
			soit : 
			    - c'est un cas particulier (A.2). Retour en 1.
				- le joueur "confectionne une nouvelle réserve" (partie C) et son tour 
				  continue en retournant en 1.
				- le joueur choisi de finir son tour. Son score est alors le "score de 
				  réussite" (partie D.1). On va en 3.
		sinon : 
			Le score du joueur est le "score d'échec" (partie D.2) et son tour 
			s'achève en 3.
	3 - fin de tour (partie E).


A.2) Jet de dé particuliers
===========================

- la suite : 5 dés différents de 1 à 5 ou de 2 à 6)
	 les 5 dés sont réservés en même temps. 
	 Il est impossible de scinder cette suite (en ne réservant que le 1 ou le 5).
	 Le "score potentiel" est augmenté de 1000 et une relance des 5 dés est obligatoire. 

- deubeul : le jet était constitué d'un unique dé et qu'il marque ( ou 5).
	 le score de ce dé et de la réserve est ajouté au score potentiel, qui est ensuite 
	 multiplié par 2.

Nota bene :
^^^^^^^^^^^
    Réussir un deubeul est donc très intéressant. Il pourra être tentant de le "chercher".

B) Dés marquant
===============

- 1 dé valant 5 (50 points)
- 1 dé valant 1 (100 points)
- 3 dés identiques issus du même jet (200, 300, 400, 500, 600 et 700 points pour les 3 dés
    valants respectivement 2, 3, 4, 5, 6 et 1).
- 5 des issus du même jet formant une suite (1000 points).
    Une relance des 5 des est ensuite obligatoire (cas b).


C) Reserve
==========

Une réserve est constituée de dés marquants (1 dé valant 5, 1 dé valant 1 ou les 3 dés d'un brelan). Son score est la somme des points des dés marquants.

C.1) Nouvelle réserve
=====================

Après chaque jet de dé :
- les dés marquants (1 dé valant 5, 1 dé valant 1 ou les 3 dés d'un brelan) peuvent être ajoutés à la réserve, et leurs scores ajoutés au "score de réserve".
- on peut supprimer des dés marquant précédemment ajoutés à la réserve (et déduire leur score du score de réserve)

Le score de réserve final doit être strictment supérieur au score de la reserve initiale (on peut ainsi supprimer un 5 de la réserve si on y ajoute un 1).

Il est impossible de réserver séparément les 3 dés issus d'un brelan de 1 ou de
5 (mais on peut réserver 1 ou 2 dés issus d'un brelan de 1 ou de 5 pour leur valeur unitaire (100 ou 50)).


Si la nouvelle réserve contient les 5 dés, on ajoute le score de la réserve au score potentiel et on
supprime la réserve. Le prochain jet de dé se fera ainsi avec 5 dés et un score de réserve de 0.

C.2) Exemples
=============
        * dés réservés (1, 5) valant un score de 50 + 100 = 150
          jet (1, 4, 5) : deux dés marquant 1 et 5
            La nouvelle réserve peut ainsi être :
                (1, 1) : de score 200
                (1, 5, 1) de score 250
                (1, 1, 5, 5) de score 300
        * dés réservés (5) valant un score de 50
          jet (1, 1, 1, 2) : un jeu de dés marquant le brelan de 1 valant 700
            La nouvelle réserve peut ainsi être :
                ((1, 1, 1)) : le brelan de 1 de score 700
                (1) : de score 100
                (1, 1) : de score 200
                (5, (1, 1, 1)) : de score 750.
            La réserve (1, 1, 1) valant 300 points ou la réserve (1, 1, 1, 5) valant 350 
			est impossible
            car les 3 dés à 1 forment un brelan issu du même jet.
        * dés réservés ((5, 5, 5)) un brelan de 5 valant 500
          jet (1, 1) valant 200
            La nouvelle réserve peut ainsi être
                ((5, 5, 5), 1, 1) et tous les dés sont réservés
                ((5, 5, 5), 1)
            On voit (la démonstration est laissée en exercice) qu'il est impossible 
			d'augmenter son
            score en scindant un brelan précédemment réservé.

D) Score
========

D.1) Score de réussite
======================

La marque du joueur vaut la totalité des points sur le tapis (les dés réservés et les dés
 marquants) plus le score potentiel.

Un brelan issu du même jet est toujours considéré dans sa totalité (ainsi trois 5 issus du même jet vaut 500. On peut cependant réserver un deux dé pour n'ajouter au score de réserve que 50 ou 100. Mais le tour n'est alors pas fini).


D.2) Score d'échec
==================

Aucun des dés lancé n'est marquant. Le "score d'échec" vaut alors : 

- -1000 points si le joueur a lancé les 5 dés (c'est rare mais ça arrive).
- -100 point si le joueur a lancé strictement moins de 5 dés,

Nota bene :
^^^^^^^^^^^
    On peut enchaîner la réserve de 5 dés et ainsi faire grossir de façon indécente le score potentiel.
    Attention cependant à ce qu'une belle séquence ne se finisse en score d'échec (ce qui arrive
    plus souvent qu'on ne le voudrait)...



F) Fin de tour
==============

 Une fois le tour fini, la score du joueur est alors positive ou négative (score de réussite ou score d'échec). Il peut alors soit :
    - ajouter son score à ses points,
    - ajouter 100 points à un adversaire si son score vaut -100,
    - ajouter 500 points à un adversaire si son score vaut -1000,
    - retrancher la moitié de son score si celui-ci est positif aux points d'un adversaire (arrondi au multiple de 50 supérieur).

Une fois ce score modifié deux règles successivent s'appliquent :
    1) les points "rebondissent" entre -2500 et 2500. Ainsi, si un joueur à -2500 points fait un score critique
        de -1000, il se retrouve à -1500. Un joueur à 0 point qui marque 10000 points
		reste à zéro (+2500 (2500 points) +5000 (on rebondit jusqu'à -2500) +2500 (on 
		revient à 0)).
    2) Si le score modifié est égal au score d'un autre joueur, le score de ce dernier est mis à 0. C'est la règle dite du "tixe".


*************************
T'as le bonjour d'Emile :
*************************

Ce qui fait des parties d'Emile un plaisir sans cesse renouvelé est (dans le désordre) :
    - les multiples moyens de modifier son score ainsi que celui de ses adversaires,
    - sentir l'haleine du poursuivant ou la sueur du poursuivi (le tixe est votre ami. Ou pas),
    - les multiples rebondissements,
    - les deubeuls. 1/3 de chances de succès, c'est toujours risqué,
    - la plaisir pervert et sadique d'un tixe,
    - du hasard mais pas trop,
    - de la tactique mais pas trop,
    - ...


****************
L'Emile et moi :
****************

    - ne pas se retrouver a -100 d'un adversaire.
        Dans le positif, un -100 de l'adversaire vous tixe alors que dans le négatif,
        un -100 de l'adversaire qu'il vous donne le tixe.
    - 50 points est plus dur a obtenir que 100.
    - descendre le score d'un adversaire un peu trop près de son propre score est tout aussi
        bien que de faire monter son propre score
    - inciter l'adversaire a jouer tous ses deubeuls. On pourra par exemple titiller son orgueil.
    - donner 500 est souvent mieux que perdre 1000.
    - donner 100 au plus faible est un acte certes charitable mais également utile. On ne s'éloigne
        pas de son objectif et vous faites un heureux.
    - essayer de garder le plus longtemps possible 3 dés à lancer vous permet de maximiser vos chances
        de brelan.
    - être à -2400 au tout début alors que les autres sont à -2500 est une très bonne position de part
        les scores qui rebondissent, les -100 qui arrivent plus souvnet qu'on ne croit et le tixe.

***********
Variantes :
***********

    - Emile par équipes : Se joue à 4, les deux équipiers ne se succédant pas dans l'ordre du tour.
        La partie s'arrête lorsque l'un des joueurs atteint 2500 points. L'équipe dont la somme des points
        est la plus grande gagne.
    - jouer dans le sens anti-horaire dans les parties d'Emile a deux joueurs.
    - Lorsqu'un joueur obtient un brelan et avant chaque deubeul, il boit (ces parties se terminent
        souvent mal).
