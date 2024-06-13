import { useState, useEffect } from 'react';
import './test.css';
import { Link } from "react-router-dom"

export const Test = () => {
  // Используем useState для хранения данных из полей ввода
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : {
      name: '',
      surname: '',
      dateOfBirth: '',
      email: '',
      password: '',
      sex: ''
    };
  });

  // Функция для обновления состояния при изменении данных в полях ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Функция для обработки изменения выбора пола
  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      sex: value
    });
  };

  // Функция для обработки нажатия кнопки "Save"
  const handleSave = () => {
    // Здесь вы можете отправить данные на сервер или выполнить другие необходимые действия
    console.log('Saved data:', formData);
    // Дополнительные действия по сохранению данных
  };

  // Сохраняем данные в localStorage при изменении formData
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <div className="test"></div>
      <h1 className='profile-my-data'>profile</h1>
      <h2 className='my-data-text'>my data</h2>
      <div className="buttons-profile-container">
        <div className="buttons-profile1"><p className='custom-varrior-button'>my data</p></div>
        <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/orders"} style={{ textDecoration: 'none' }}>orders</Link></p></div>
        <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/clubcard"} style={{ textDecoration: 'none' }}>club card</Link></p></div>
      </div>

      <div className="testik">
        <div className="input-fields-container">
          <div className="input-fields">
            <h3 className='field-name'>Name</h3>
            <input className='input-field' type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="input-fields">
            <h3 className='field-name'>Surname</h3>
            <input className='input-field' type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
          </div>
          <div className="input-fields">
            <h3 className='field-name'>Date of birth</h3>
            <input className='input-field' type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
          </div>
          <div className="input-fields">
            <h3 className='field-name'>Sex</h3>
            <div className='sex-varios'>
              <label>
                Male
                <input type="radio" name="sex" value="Male" className="custom-radio" checked={formData.sex === 'Male'} onChange={handleGenderChange} />
              </label>
            </div>
            <div className='sex-varios'>
              <label>
                Female
                <input type="radio" name="sex" value="Female" className="custom-radio" checked={formData.sex === 'Female'} onChange={handleGenderChange} />
              </label>
            </div>
          </div>
          <button className='button-save-key' onClick={handleSave}>save</button>
        </div>
      </div>
      <div className="zagla"></div>
    </>
  );
};

export default Test;