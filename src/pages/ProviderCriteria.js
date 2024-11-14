import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../images/Header.png';
import Greenbg from '../images/GreenBg.png';
import whitelogo from '../images/white-logo.png';

export default function ProviderPostScholarshipA() {
  const [criteriaList, setCriteriaList] = useState([{ name: '', valueType: 'range', value: [], description: '' }]);
  
  const handleAddCriteria = () => {
    setCriteriaList([...criteriaList, { name: '', valueType: 'range', value: [], description: '' }]);
  };

  const handleRemoveCriteria = (index) => {
    const updatedList = criteriaList.filter((_, idx) => idx !== index);
    setCriteriaList(updatedList);
  };

  const handleChange = (e, index, field) => {
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {
        const updatedCriteria = { ...criteria, [field]: e.target.value };
      	
      	localStorage.setItem('criteriaName', criteria.name);
      	localStorage.setItem('criteriaValueType', criteria.valueType);
      	localStorage.setItem('criteriaValue', criteria.value);
      	localStorage.setItem('criteriaDescription', criteria.description);

        if (field === 'valueType') {
          if (e.target.value === 'range') {
            updatedCriteria.value = ['', '']; 
          } else if (e.target.value === 'enumerated') {
            updatedCriteria.value = [''];
          } else if (e.target.value === 'number') {
            updatedCriteria.value = ['']; 
          } else if (e.target.value === 'string') {
            updatedCriteria.value = ['']; 
          }
        }

        return updatedCriteria;
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

  const handleValueChange = (e, index) => {
    const value = e.target.value.split(',').map(val => val.trim()); 
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {

        return { ...criteria, value };
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

  const handleRangeValueChange = (e, index, type) => {
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {
        if (type === 'min') {
          criteria.value[0] = e.target.value;
        } else if (type === 'max') {
          criteria.value[1] = e.target.value;
        }
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

  const handleEnumeratedValueChange = (e, index, optionIndex) => {
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {
        const updatedValue = [...criteria.value];
        updatedValue[optionIndex] = e.target.value;
        return { ...criteria, value: updatedValue };
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

  const handleAddEnumeratedOption = (index) => {
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {
        return { ...criteria, value: [...criteria.value, ''] };
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

  const handleRemoveEnumeratedOption = (index, optionIndex) => {
    const updatedList = criteriaList.map((criteria, idx) => {
      if (idx === index) {
        const updatedValue = criteria.value.filter((_, idx) => idx !== optionIndex);
        return { ...criteria, value: updatedValue };
      }
      return criteria;
    });
    setCriteriaList(updatedList);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const userId = localStorage.getItem('userId');
  if (!userId) {
    console.error('User ID is missing.');
    return;
  }


  const criteriaData = {
    name: localStorage.getItem('criteriaName'),
    valueType: localStorage.getItem('criteriaValueType'),
    value: localStorage.getItem('criteriaValue'), // Assuming value is stored as a JSON string
    description: localStorage.getItem('criteriaDescription')
  };

  console.log(criteriaData);

  try {
    const response = await fetch(`http://localhost:4006/scholarships/criteria/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(criteriaData), 
    });

    if (!response.ok) {
      throw new Error('Failed to submit scholarship criteria');
    }

    const result = await response.json();
    console.log('Criteria submitted successfully:', result);
    alert('Scholarship criteria submitted successfully!');
  } catch (error) {
    console.error('Error submitting criteria:', error);
    alert('Error submitting criteria, please try again later.');
  }
};




  return (
    <div className="py-16" style={{ backgroundImage: `url(${Greenbg})` }}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Create your criteria</h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex">
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-green-900 to-green-600 rounded-l-lg">
          <img src={whitelogo} alt="ScholarJunction Logo" className="h-32" />
        </div>

        <div className="w-1/2 p-8">
          <h3 className="text-xl font-bold mb-4">Build Criteria</h3>
          <form onSubmit={handleSubmit}>
            {criteriaList.map((criteria, index) => (
              <div key={index} className="mb-4">
                <div className="mb-4">
                  <label className="block text-zinc-700">Criterion Name</label>
                  <input
                    type="text"
                    placeholder="Criterion Name (e.g., GPA)"
                    className="w-full p-2 border border-zinc-300 rounded"
                    value={criteria.name}
                    onChange={(e) => handleChange(e, index, 'name')}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-zinc-700">Value Type</label>
                  <select
                    className="w-full p-2 border border-zinc-300 rounded"
                    value={criteria.valueType}
                    onChange={(e) => handleChange(e, index, 'valueType')}
                  >
                    <option value="string">String</option>
                    <option value="range">Range</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                    <option value="date">Date</option>
                    <option value="enumerated">Enumerated</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-zinc-700">Value</label>
                  {criteria.valueType === 'range' ? (
                    <div className="flex space-x-4">
                      <input
                        type="number"
                        placeholder="Min Value"
                        className="w-full p-2 border border-zinc-300 rounded"
                        value={criteria.value[0] || ''}
                        onChange={(e) => handleRangeValueChange(e, index, 'min')}
                      />
                      <input
                        type="number"
                        placeholder="Max Value"
                        className="w-full p-2 border border-zinc-300 rounded"
                        value={criteria.value[1] || ''}
                        onChange={(e) => handleRangeValueChange(e, index, 'max')}
                      />
                    </div>
                  ) : criteria.valueType === 'date' ? (
                    <input
                      type="date"
                      className="border border-gray-300 p-2 rounded"
                      value={criteria.value[0] || ''}
                      onChange={(e) => handleValueChange(e, index)}
                    />
                  ) : criteria.valueType === 'enumerated' ? (
                    <div>
                      {criteria.value.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex space-x-2 mb-2">
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleEnumeratedValueChange(e, index, optionIndex)}
                            className="border border-gray-300 p-2 rounded"
                            placeholder={`Option ${optionIndex + 1}`}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveEnumeratedOption(index, optionIndex)}
                            className="text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddEnumeratedOption(index)}
                        className="text-green-600"
                      >
                        Add Option
                      </button>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={criteria.value[0] || ''}
                      onChange={(e) => handleValueChange(e, index)}
                      className="border border-gray-300 p-2 rounded"
                      placeholder="Enter Value"
                    />
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-zinc-700">Description</label>
                  <textarea
                    className="w-full p-2 border border-zinc-300 rounded"
                    value={criteria.description}
                    onChange={(e) => handleChange(e, index, 'description')}
                    placeholder="Provide additional details"
                  />
                </div>

                <div className="flex justify-between">
                  {criteriaList.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveCriteria(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  )}
                  {criteriaList.length - 1 === index && (
                    <button
                      type="button"
                      onClick={handleAddCriteria}
                      className="text-blue-500"
                    >
                      Add Criteria
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded"
            >
              Submit Criteria
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
