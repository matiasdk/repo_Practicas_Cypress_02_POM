class TodoPage {
    // Selectores
    elements = {
      inputNuevaTarea: () => cy.get('input.new-todo'),
      seleccionarTarea: (texto) => cy.contains('label', texto),
      barraHerramientas: () => cy.get('.todo-list li'),
      botonBorrar: function(texto) {
        return this.seleccionarTarea(texto).parent().find('button.destroy')
    },
      checkTarea: function(texto) {
        return this.seleccionarTarea(texto).parent().find('input.toggle')
    }
}
  
    // Métodos

    visitarPagina() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    agregarTarea(nombreTarea) {
      this.elements.inputNuevaTarea().click().type(`${nombreTarea}{enter}`);
    }
  
    borrarTarea(nombreTarea) {
      this.elements.botonBorrar(nombreTarea).click({ force: true });
    }

    marcarTarea(nombreTarea) {
      this.elements.checkTarea(nombreTarea).click();
    }
  
  }
  
  export default TodoPage;