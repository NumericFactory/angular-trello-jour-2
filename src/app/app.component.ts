import { Component } from '@angular/core';

/*
 Décorateur de class @Component
 selector : désigne le nom de la balise HTML du component
 templateUrl : dédigne le chemin du fichier .html du component
 styleUrsl : désigne un array des fichiers css du component
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
  Un component est une class qui contient 
  * ses propres données
  * ses propres méthodes
  Ces données et méthodes sont exploitables dans la view 
*/
export class AppComponent {

  isModalOpened = false;
  selectedCard;

  board = [
    {
      id: 1,
      name: "ToDo",
      cards: [
        {
          id: 1,
          title: 'Modifier le CSS Global de l\'application',
          content: 'Ajouter un style général au body',
          priority: 1
        },
        {
          id: 2,
          title: 'Importer du CSS',
          content: 'Installer FontAwesome via npm et importer dans le fichier de styles global',
          priority: 1
        },
        {
          id: 3,
          title: 'Mettre en place les premieres interactions',
          content: 'Ajouter/supprimer des cards. Ajouter/supprimer/update des listes',
          priority: 1
        },
        {
          id: 4,
          title: 'La directive ngClass',
          content: 'Pour modifier l\'apparence de la page en ajoutant des class CSS dynamiquement',
          priority: 2,
        },
        {
          id: 5,
          title: 'Penser notre application en components',
          content: 'Réorganiser notre interface en components',
          priority: 3
        },
        {
          id: 6,
          title: 'Créer des components via le CLI',
          content: 'Créer un component component sidebar qui affiche la liste des tâche par liste et par priorité',
          priority: 1
        },
        {
          id: 7,
          title: 'Le problème du partage de code entre les components',
          content: 'Créer un service et externaliser les données et les méthodes d\'accès',
          priority: 1
        },
      ]
    },
    {
      id: 2,
      name: "In progress",
      cards: [
        {
          id: 8,
          title: 'L\'encapsulation CSS des components',
          content: 'Les components sont "étanches" et chacun possède son propres CSS. Comment Angular gère cela?',
          priority: 3
        },
        {
          id: 9,
          title: 'Le component Root',
          content: 'Le composant racine, celui qui hébergera tous les autres',
          priority: 1
        },
      ]
    },
    {
      id: 3,
      name: "Done",
      cards: [
        {
          id: 10,
          title: 'Installer environnement',
          content: 'Nodejs npm et le CLI Anglar',
          priority: 0
        },

        {
          id: 11,
          title: 'Créer une app',
          content: 'On crée une app Trello Like',
          priority: 0
        },
        {
          id: 12,
          title: 'Le component Root',
          content: 'Le composant racine, celui qui hébergera tous les autres',
          priority: 0
        },
        {
          id: 13,
          title: 'Les concepts',
          content: 'Le data-binding et la détection de changement',
          priority: 0
        },

      ]
    }
  ];


  constructor() {
    console.log(this);
  }

  /*
   addCard
   @param: list object
  */
  addCard(list) {
    console.log(list);
    let cardName = prompt('Nom de la nouvelle carte ?');
    if (cardName != null) {
      if (cardName.trim().length > 0) {
        // Je crée une nlle carte
        let card = {
          id: Date.now(),
          title: cardName,
          content: '',
          priority: 1
        };
        // J'ajoute la nlle carte dans la liste
        list.cards = [card, ...list.cards];
      }
    }
  }

  /*
    removeCard
    @param : list object, card object
  */
  removeCard(list, card) {
    // array.splice(index, 1)
    if (confirm('Voulez-vous supprimer cette carte ? ')) {
      let index = list.cards.indexOf(card);
      list.cards.splice(index, 1);
    }
  }

  /*
    addList
  */
  addList() {
    let listName = prompt('Nom de la nouvelle liste ?');
    let newList = {
      id: Date.now(),
      name: listName,
      cards: []
    }
    this.board = [...this.board, newList];
  }

  /* MODAL */

  openModal(card) {
    this.selectedCard = card;
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }





} // Fin de la class
