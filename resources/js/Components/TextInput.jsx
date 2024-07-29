import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput(props, ref) {
    const input = ref ? ref : useRef();
    const {
        variant,
        className,
        autoFocus,
        placeholder,
        type,
        isFocused,
        ...restProps
    } = props;

    useEffect(() => {
        if (autoFocus || isFocused) {
            input.current.focus();
        }
    }, [autoFocus, isFocused]);

    return (
        <input
            {...restProps}
            type={type || "text"}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-primary ${className}`}
            ref={input}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "error",
        "primary-outline",
    ]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
