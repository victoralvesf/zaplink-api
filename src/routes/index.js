import { ContactsRoutes } from '../app/contacts/contacts.routes';

export const routes = [];

// Default Route
routes.push({
  method: 'GET',
  path: '/',
  handler() {
    return { status: true, message: 'Zaplink API is running' };
  }
});

ContactsRoutes.map(route => {
  routes.push(route)
});