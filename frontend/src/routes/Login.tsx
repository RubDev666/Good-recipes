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
                    <h3 className="formTitle">Ingresa con tu correo electrónico</h3>

                    <InputField
                        labelName="Correo electrónico *"
                        fieldId="email"
                        fieldName="emailField"
                        fieldPlaceholder="Correo electrónico*"
                        fieldType="email"
                        autoComplete="off"
                    />
                    <InputField
                        labelName="Contraseña *"
                        fieldId="password"
                        fieldName="passwordField"
                        fieldPlaceholder="Contraseña *"
                        fieldType="password"
                        autoComplete="off"
                    />

                    <button type="submit"
                        className="submitButton"
                    >
                        Iniciar sesión
                    </button>
                </Form>
            </section>
        </>
    )
}