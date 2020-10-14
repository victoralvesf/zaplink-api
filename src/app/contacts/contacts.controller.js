class ContactsController {
  index(request, h) {
    return [
      {
        id: 1,
        name: 'Victor',
        phone: '(85) 98943-6075',
        description: 'Consultoria de automacao de testes e textos muito longos iguais ao rabo de uma sucuri gigante e eu nao sai mais o que estou escrevendo'
      },
      {
        id: 2,
        name: 'Luiz',
        phone: '(15) 98754-6075',
        description: 'Consultoria de dev front-end'
      },
      {
        id: 3,
        name: 'Paulao da Regulagem',
        phone: '(15) 98754-6075',
        description: 'Mecanico'
      },
      {
        id: 4,
        name: 'Agostinho Carrara',
        phone: '(15) 98754-6075',
        description: 'Taxista'
      }
    ]
  }
}

export default new ContactsController();
