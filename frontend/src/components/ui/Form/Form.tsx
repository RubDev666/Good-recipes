import { ReactNode, HtmlHTMLAttributes } from "react";

interface formProperties {
    method?: string | undefined;
    action?: string | undefined;
    children: ReactNode | undefined;
    className: string
}

export function Form(properties: formProperties, methods: HtmlHTMLAttributes<HTMLFormElement>) {
    const { method, action, className, children } = properties
    const { onSubmit, ...other } = methods

    return (
        <form
            method={method}
            action={action}
            onSubmit={onSubmit}
            className={className}
            {...other}
        >
            {children}
        </form>
    )
}