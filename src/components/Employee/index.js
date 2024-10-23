import './Employee.css'

const Employee = ({name, image, role, primaryColor}) => {
    return (
        <div className="colaborador">
            <div className='cabecalho' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default Employee;