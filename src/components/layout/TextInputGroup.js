import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// All of these are coming from props (same as props.label or props.name)
const TextInputGroup = ({
                            label,
                            name,
                            value,
                            placeholder,
                            type,
                            onChange,
                            error
                        }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                className={classnames("form-control form-control-lg", {'is-invalid': error})}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error ? (<div className="invalid-feedback">{error}</div>) : null}
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaulProps = {
    type: 'text'
};

export default TextInputGroup;
