import React, { useEffect, useState } from 'react';
import { api } from '../api';

export const StudentList = ({ onEdit, onDelete }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await api.get('/');
      setStudents(response.data);
    } catch (error) {
      console.error('Error obtaining students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <h2>Students List</h2>
      <ul>
        {
          students.map((student) => (
            <li key={ student.ci }>
              { student.name } - { student.career } - { student.ci }
              <button onClick={ () => onEdit(student) }>Editar</button>
              <button onClick={ () => onDelete(student.ci) }>Eliminar</button>
            </li>
          ))
        }
      </ul>
    </>

  );
};

