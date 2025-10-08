import AlbumsList from "../../components/AlbumsList/AlbumsList";
import styles from './styles.module.scss'

const AlbumsPage= () => {
	return (
		<div className={styles.root}>
			<h1>Albums</h1>
			<AlbumsList />
		</div>
	);
};

export default AlbumsPage;
