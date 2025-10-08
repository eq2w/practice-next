import styles from './styles.module.scss'
import TodosList from "../../components/TodosList/TodosList";

const TodoPage =() => {
	return (
		<div className={styles.root}>
			<h1>Todos</h1>
			<TodosList />
		</div>
	);
};

export default TodoPage


