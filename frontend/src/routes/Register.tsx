import { Form } from "../components/ui/Form/Form"
import { InputField } from "../components/ui/InputField/InputField"

export default function Register() {
    return (
        <section className="formContainer">
            <div className="formImage">
                {/* svg background */}
            </div>

            <Form className="form">
                <h3 className="formTitle">Registrate con tu correo electrónico</h3>

                <InputField
                    labelName="Nombre *"
                    fieldId="username"
                    fieldName="usernameField"
                    fieldPlaceholder="Nombre *"
                    fieldType="text"
                    autoComplete="off"
                />
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
                <InputField
                    labelName="Confirmar contraseña *"
                    fieldId="confirmPassword"
                    fieldName="confirmPasswordField"
                    fieldPlaceholder="Confirmar contraseña *"
                    fieldType="password"
                    autoComplete="off"
                />

                <button type="submit"
                    className="submitButton"
                >
                    Registrarse
                </button>
            </Form>

        </section>
    )
}