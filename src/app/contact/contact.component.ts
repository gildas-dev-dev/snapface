import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Objet pour stocker les données du formulaire
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Variables pour afficher les messages
  messageText: string = '';
  messageClass: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Fonction pour valider le formulaire
  validateForm(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.displayMessage('error', 'Tous les champs sont obligatoires.');
      return false;
    }

    if (!this.formData.email.includes('@')) {
      this.displayMessage('error', 'Veuillez entrer une adresse email valide.');
      return false;
    }

    return true;
  }

  // Fonction pour afficher un message
  displayMessage(type: 'success' | 'error', message: string): void {
    this.messageText = message;
    this.messageClass = type;
    setTimeout(() => {
      this.messageText = '';
      this.messageClass = '';
    }, 2000); // Efface le message après 5 secondes
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    // Simulation d'envoi des données (remplace par une requête HTTP si nécessaire)
    console.log('Données du formulaire :', this.formData);
    this.displayMessage('success', 'Message envoyé avec succès !');

    // Réinitialisation du formulaire
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
