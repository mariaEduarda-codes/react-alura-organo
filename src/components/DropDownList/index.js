import './DropDownList.css'

const DropDownList = props => {
    return (
        <div className="dropDownList">
            <label>{props.label}</label>
            <select onChange={event => props.onAlter(event.target.value)} required={props.mandatory} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDownList;