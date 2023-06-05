import { CiCircleQuestion } from "react-icons/ci";
import styles from './ModalButton.module.css'

function ModalButton({ buttonText }) {
	return (
		<button
			type="button"
			className={`btn btn-primary ${styles.button}`}
			data-toggle="modal"
			data-target="#features"
		>
			<CiCircleQuestion className={styles.icon} />
			{buttonText}
		</button>
	)
}

export default ModalButton
