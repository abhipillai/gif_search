import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_SECRET);

export default gf;

export const DndTypes = {
	RESULT: 'result',
};
  
