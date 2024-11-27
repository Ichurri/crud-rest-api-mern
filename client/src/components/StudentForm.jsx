import { useState, useEffect } from 'react';

export const StudentForm = ({ onSave, studentToEdit, clearEdit }) => {
  const [formData, setFormData] = useState({ name: '', ci: '', career: '' });

  useEffect(() => {
    if (studentToEdit) {
      setFormData(studentToEdit);
    } else {
      setFormData({ name: '', ci: '', career: '' });
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    clearEdit();
    setFormData({ name: '', ci: '', career: '' });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>{studentToEdit ? 'Editar Estudiante' : 'Agregar Estudiante'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="ci"
        placeholder="CI"
        value={formData.ci}
        onChange={handleChange}
        required
        disabled={!!studentToEdit}
      />
      <input
        type="text"
        name="career"
        placeholder="Carrera"
        value={formData.career}
        onChange={handleChange}
        required
      />
      <button type="submit">{studentToEdit ? 'Actualizar' : 'Guardar'}</button>
    </form>
    </>
  );
};

