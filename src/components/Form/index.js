import './Form.css'
import TextField from "../TextField";
import DropDownList from "../DropDownList";
import Button from "../Button";
import {useState} from "react"; //só referenciamos a pasta

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.onRegisteredEmployee({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder={"Digite o seu nome"} value={name} onAlter={value => setName(value) }/>
                <TextField mandatory={true} label="Cargo" placeholder={"Digite o seu cargo"} value={role} onAlter={value => setRole(value) }/>
                <TextField label="Imagem" placeholder={"Digite o endereço da imagem"} value={image} onAlter={value => setImage(value) }/>
                <DropDownList mandatory={true} label="Time" itens={props.teams} value={team} onAlter={value => setTeam(value) }/>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;