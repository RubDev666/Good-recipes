import React from "react";

interface InputProperties extends React.HtmlHTMLAttributes<HTMLInputElement> {
    labelName?: string;
    fieldId: string;
    fieldType: string;
    fieldName: string;
    fieldPlaceholder: string;
    autoComplete?: "on" | "off";
};

export function InputField({
    labelName,
    fieldId,
    fieldType,
    fieldName,
    fieldPlaceholder,
    autoComplete = 'off',
    ...options
}: InputProperties) {
    return (
        <section className="inputFieldContainer">
            <label htmlFor={fieldId} className="inputFieldLabel">
                {labelName}
            </label>
            <input
                type={fieldType}
                id={fieldId}
                name={fieldName}
                placeholder={fieldPlaceholder}
                className="inputField"
                autoComplete={autoComplete}
                {...options}
            />
        </section>
    );
};