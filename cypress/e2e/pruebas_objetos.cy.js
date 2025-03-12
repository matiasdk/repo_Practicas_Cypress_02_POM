import TodoPage from '../support/objects/Tareas';

describe('Pruebas Métodos', () => {
  const todoPage = new TodoPage();


  beforeEach(() => {
    todoPage.visitarPagina();
  });



  it('Añadir tarea', () => {
    todoPage.agregarTarea('Prueba INGRESAR UNA TAREA')
  })


  it('Borrar tarea', () => {
    todoPage.agregarTarea('Prueba INGRESAR TAREA y BORRARLA')
    todoPage.borrarTarea('Prueba INGRESAR TAREA y BORRARLA')
  })


  it('Marcar tarea', () => {
    todoPage.agregarTarea('INGRESAR TAREA y MARCARLA COMPLETADA')
    todoPage.marcarTarea('INGRESAR TAREA y MARCARLA COMPLETADA')
  })

  it('Marcar 2 tareas', () => {
    todoPage.agregarTarea('INGRESAR TAREA y MARCARLA COMPLETADA')
    todoPage.marcarTarea('INGRESAR TAREA y MARCARLA COMPLETADA')
    todoPage.agregarTarea('INGRESAR OTRA TAREA y MARCARLA TAMBIEN COMPLETADA')
    todoPage.marcarTarea('INGRESAR OTRA TAREA y MARCARLA TAMBIEN COMPLETADA')
  })
})