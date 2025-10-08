import { Photos } from "../../models";
import Api from "@/api/api";
import "./index.css";

type Props = {
	albumId: number;
};

const getData = async ({ albumId }: Props): Promise<Photos> => {
	const data = await Api.getPhotos(albumId);
	return data
}

const Album = async ({ albumId }: Props) => {
	const data = await getData({ albumId })
	return (
		<div className="album-container">
			{data.map((photo) => (
				<div key={photo.id} className="photo-container">
					<img src={photo.url} className="photo-img" />
				</div>
			))}
		</div>
	);
};

export default Album;
