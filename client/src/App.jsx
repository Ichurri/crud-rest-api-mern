import { useState, useEffect } from 'react';
import { StudentTable, StudentForm, StudentList } from './components'
import axios from 'axios';

export const App = () => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSave = async (student) => {
    if (studentToEdit) {
      try {
        await axios.put(`http://localhost:5000/students/${student.ci}`, {
          name: student.name,
          career: student.career,
        });
        alert('Estudiante actualizado con éxito');
      } catch (error) {
        console.error('Error updating student:', error);
        alert('Error al actualizar el estudiante');
      }
    } else {
      try {
        await axios.post('http://localhost:5000/students', student);
        alert('Estudiante registrado con éxito');
      } catch (error) {
        console.error('Error creating student:', error);
        alert('Error al registrar el estudiante');
      }
    }
    fetchStudents();
  };

  const handleEdit = (student) => {
    setStudentToEdit(student);
  };

  const handleDelete = async (ci) => {
    if (window.confirm('¿Estás seguro de eliminar este estudiante?')) {
      try {
        await axios.delete(`http://localhost:5000/students/${ci}`);
        alert('Estudiante eliminado con éxito');
        fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Error al eliminar el estudiante');
      }
    }
  };

  const clearEdit = () => {
    setStudentToEdit(null);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <h1>Gestión de Estudiantes</h1>
      <StudentForm onSave={handleSave} studentToEdit={studentToEdit} clearEdit={clearEdit} />
      <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};

