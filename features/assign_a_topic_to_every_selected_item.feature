#language: fr

Fonctionnalité: Ajouter un rubrique à tous les items séléctionné

Contexte:
 Soit le point de vue "Histoire de l'art" rattaché au portfolio "vitraux"
 Soit le point de vue "Histoire des religions" rattaché au portfolio "vitraux"

 Soit le corpus "Vitraux - Bénel" rattaché au portfolio "vitraux"
 Soit le corpus "Vitraux - Recensement" rattaché au portfolio "vitraux"
 Soit le corpus "Vitraux - Dr. Krieger" rattaché au portfolio "vitraux"

 Soit la rubrique "XIXe s." rattachée au point de vue "Histoire de l'art"
 Soit la rubrique "Technique du verre" rattachée au point de vue "Histoire de l'art"


 Soit l'item "DSN 000" rattaché à la rubrique "XIXe s."
 Soit l'item "DSN 001" rattaché à la rubrique "XIXe s."
 Soit l'item "DSN 002" rattaché à la rubrique "XIXe s."
 Soit l'item "DSN 004" rattaché à la rubrique "XIXe s."
 Soit l'item "DSN 005" rattaché à la rubrique "XIXe s."

Scénario: avec une rubrique déjà existante
 Soit la liste des rubriques sélectionnées est vide
 Quand on sectionne l'option "sélection"
 Et on sélectionne l'item "DSN 000"
 Et on sélectionne l'item "DSN 001"
 Et on sélectionne l'item "DSN 002"
 Et on sélectionne l'item "DSN 004"
 Et on sélectionne l'item "DSN 005"
 Et on sélectionne l'option "Attribuer un topic"
 Et on assigne le topic "Technique du verre"
 Alors le topic est assigné 
 Et un message de confirmation s'affiche

Scénario: création d'une nouvelle rubrique
 Soit la liste des rubriques sélectionnées est vide
 Quand on sectionne l'option "sélection"
 Et on sélectionne l'item "DSN 000"
 Et on sélectionne l'item "DSN 001"
 Et on sélectionne l'item "DSN 002"
 Et on sélectionne l'item "DSN 004"
 Et on sélectionne l'item "DSN 005"
 Et on sélectionne l'option "Attribuer un topic"
 Et on sélectionne l'option "Créer un topic"
 Alors une popup s'ouvre pour entrer le topic "topic"
 Et le topic est assigné 
 Et un message de confirmation s'affiche