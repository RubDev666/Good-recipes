import { Form } from "../components/ui/Form/Form"
import { InputField } from "../components/ui/InputField/InputField"

export default function Login() {
    return (
        <>
            <section className="formContainer">
                <div className="formImage">
                    {/* svg background */}
                </div>

                <Form className="form">
                    <h3 className="formTitle">Login</h3>

                    <InputField
                        labelName="Email *"
                        fieldId="email"
                        fieldName="emailField"
                        fieldPlaceholder="Email*"
                        fieldType="email"
                        autoComplete="off"
                    />
                    <InputField
                        labelName="Password *"
                        fieldId="password"
                        fieldName="passwordField"
                        fieldPlaceholder="Password *"
                        fieldType="password"
                        autoComplete="off"
                    />

                    <button type="submit"
                        className="submitButton"
                    >
                        Login
                    </button>
                </Form>
            </section>
        </>
    )
}