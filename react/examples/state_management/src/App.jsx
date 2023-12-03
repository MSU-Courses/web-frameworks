import {useState} from 'react'
import './App.css'
import FormPage from "./components/BadExamples/FormExample.jsx";
import UserPage from "./components/BadExamples/UserListExample.jsx";
import {Form, FormProvider} from "./components/ExampleWithUseContext/FormWithContext.jsx";


const App = () => {

    return (
        <div>
            {/*<FormPage/>*/}
            {/*<UserPage />*/}
            <FormProvider>
                <Form/>
            </FormProvider>
        </div>
    );
};

export default App
