type Props = {
	id: string
}

export const MerkButton: React.FC<Props> = ({ id }) => {
	// TODO: Implementiere die Logik zum Merken der Vorlesung in diesem Button

	function onButtonClick() {
		// Wird ausgeführt wenn der Button geklickt wird
	}

	// TODO: Der Text soll sich ändern, wenn die Vorlesung gemerkt wurde
	return <button onClick={onButtonClick}>Vorlesung merken</button>
}
