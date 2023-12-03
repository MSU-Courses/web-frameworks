import {useState} from "react";

const FormPage = () => {
    const [formData, setFormData] = useState({name: "", surname: ""});

    const handleFormChange = (newFormData) => {
        setFormData(newFormData);
    };

    return (
        <Form formData={formData} onFormChange={handleFormChange}/>
    )
};

const Form = ({formData, onFormChange}) => {
    return (
        <div>
            <h2>User Form</h2>
            <FormDetails formData={formData} onFormChange={onFormChange}/>
        </div>
    );
};

const FormDetails = ({formData, onFormChange}) => {
    return (
        <div>
            <h3>Form Details</h3>
            <FormInput formData={formData} onFormChange={onFormChange}/>
        </div>
    );
};

const FormInput = ({formData, onFormChange}) => {
    return (
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => onFormChange({...formData, name: e.target.value})}
            />
            {/* Другие поля формы */}
        </div>
    );
};

export default FormPage;