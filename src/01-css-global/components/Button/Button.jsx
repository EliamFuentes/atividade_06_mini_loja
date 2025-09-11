import '../../styles/style.css'

export default function Button({ onClick }) {
    return (
        <button className="btn solid" onClick={onClick}>
            Adicionar
        </button>
    );
}