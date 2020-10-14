import ContactsController from './contacts.controller';

export const ContactsRoutes = [
  {
    method: 'GET',
    path: '/contacts',
    handler: ContactsController.index
  }
];