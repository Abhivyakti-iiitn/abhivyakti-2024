import React,{useState} from 'react';
import questionsData from '../../assets/questionData.json';
import "../../newscss/form.scss";

const Form = () => {
    const [formData, setFormData] = useState({});
    const [answers, setAnswers] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleRadioChange = (questionId, value) => {
      setAnswers({ ...answers, [questionId]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      console.log('Answers:', answers);
      // You can handle form submission logic here
    };
  
    return (
      <div>
        <h2>React Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Team Name */}
          <div>
            <label>Team Name</label>
            <input type="text" name="teamName" onChange={handleInputChange} required />
          </div>
  
          {/* Team Lead Name */}
          <div>
            <label>Team Lead Name</label>
            <input type="text" name="teamLeadName" onChange={handleInputChange} required />
          </div>
  
          {/* Contact Number */}
          <div>
            <label>Contact Number</label>
            <input type="tel" name="contactNo" onChange={handleInputChange} required />
          </div>
  
          {/* Email ID */}
          <div>
            <label>Email ID</label>
            <input type="email" name="emailId" onChange={handleInputChange} required />
          </div>
  
          {/* College Name */}
          <div>
            <label>College Name</label>
            <input type="text" name="collegeName" onChange={handleInputChange} required />
          </div>
  
          {/* Questions Section */}
          <div>
            {questionsData.questionsSection.questions.map((question) => (
              <div key={question.id}>
                <label>{question.label}</label>
                {question.type === 'radio' ? (
                  question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        onChange={() => handleRadioChange(question.id, option)}
                      />
                      {option}
                    </label>
                  ))
                ) : (
                  <textarea
                    name={question.id}
                    onChange={handleInputChange}
                    rows="4"
                    cols="50"
                  />
                )}
              </div>
            ))}
          </div>
  
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  };
export default Form