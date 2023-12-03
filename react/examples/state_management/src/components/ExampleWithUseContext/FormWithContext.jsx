import React from "react";

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = React.useState({ name: '', email: '' /* другие поля */ });

    const handleFormChange = (newFormData) => {
        setFormData(newFormData);
    };

    return (
        <FormContext.Provider value={{ formData, handleFormChange }}>
            {children}
        </FormContext.Provider>
    );
};

export const Form = () => {
    return (
        <div>
            <h2>User Form</h2>
            <FormDetails />
        </div>
    );
};


const FormDetails = () => {
    return (
        <div>
            <h3>Form Details</h3>
            <FormInput />
        </div>
    );
};


const FormInput = () => {
    const { formData, handleFormChange } = React.useContext(FormContext);
    return (
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => handleFormChange({ ...formData, name: e.target.value })}
            />
            {/* Другие поля формы */}
        </div>
    );
};
