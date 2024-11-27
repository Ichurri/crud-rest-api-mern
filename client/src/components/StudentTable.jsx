
export const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <>
      <h2>Students List</h2>
      <table border="1" className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CI</th>
            <th>Career</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student) => (
              <tr key={ student.ci }>
                <td>{ student.name }</td>
                <td>{ student.ci }</td>
                <td>{ student.career }</td>
                <td>
                  <button onClick={ () => onEdit(student) }>Edit</button>
                  <button onClick={ () => onDelete(student.ci) }>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};
