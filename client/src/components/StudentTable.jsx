
export const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <>
      <h2>Lista de Estudiantes</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>CI</th>
            <th>Carrera</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.ci}>
              <td>{student.name}</td>
              <td>{student.ci}</td>
              <td>{student.career}</td>
              <td>
                <button onClick={() => onEdit(student)}>Editar</button>
                <button onClick={() => onDelete(student.ci)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
