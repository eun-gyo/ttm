import axios from "axios";

// 내 정보를 객체로 하나 만들기(공통된 url)
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'f101c162544b473ed575031ce23b153b',
        language : "ko-KR",

    }
});

export default instance