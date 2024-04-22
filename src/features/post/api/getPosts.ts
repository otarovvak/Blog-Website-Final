import axios from '../../../app/axios';
import type { Post } from '../model/post';

export const getPosts = async (): Promise<Post[]> => {
    const res = await axios.get('http://localhost:8000/post/');
    return res.data;
}
