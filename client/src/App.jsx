import { useState, useEffect } from 'react';
import { StudentTable, StudentForm } from './components'
import axios from 'axios';
// import { 'mongodb://127.0.0.1:27017/students' } from './'mongodb://127.0.0.1:27017/students'';
import './App.css'

export const App = () => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('mongodb://127.0.0.1:27017/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSave = async (student) => {
    if (studentToEdit) {
      try {
        await axios.put(`${'mongodb://127.0.0.1:27017/students'}/${student.ci}`, {
          name: student.name,
          career: student.career,
        });
        alert('Student updated succesfully');
      } catch (error) {
        console.error('Error updating student:', error);
        alert('Error updating student');
      }
    } else {
      try {
        await axios.post('mongodb://127.0.0.1:27017/students', student);
        alert('Student registered succesfully');
      } catch (error) {
        console.error('Error creating student:', error);
        alert('Error creating student');
      }
    }
    fetchStudents();
  };

  const handleEdit = (student) => {
    setStudentToEdit(student);
  };

  const handleDelete = async (ci) => {
    if (window.confirm('Confirm student deletion')) {
      try {
        await axios.delete(`${'mongodb://127.0.0.1:27017/students'}/${ci}`);
        alert('Student deleted succesfully');
        fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Error deleting student');
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
      <h1>Students Manager System</h1>
      <StudentForm onSave={ handleSave } studentToEdit={ studentToEdit } clearEdit={ clearEdit } />
      <StudentTable students={ students } onEdit={ handleEdit } onDelete={ handleDelete } />
    </>
  );
};

