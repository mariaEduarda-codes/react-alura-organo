import './TextField.css';

const TextField = (props) => {

    const onType = (event) => {
        props.onAlter(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;