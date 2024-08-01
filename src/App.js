import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import AllMovie from './components/AllMovie';
import requests from './api/requests';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AllMovie title="현재 상영중인 영화" fetchUrl={requests.fetchNowPlay}/>
      <AllMovie title="최신 트렌드 영화" fetchUrl={requests.fetchTrend}/>
      <AllMovie title="평점이 좋은 영화" fetchUrl={requests.fetchTopRate}/>
      <AllMovie title="넷플릭스 Only" fetchUrl={requests.fetchNetflix}/>
      <AllMovie title="액션 영화" fetchUrl={requests.fetchAction}/>
      <AllMovie title="코미디 영화" fetchUrl={requests.fetchComedy}/>
      <AllMovie title="공포 영화" fetchUrl={requests.fetchHorror}/>
      <AllMovie title="로맨스 영화" fetchUrl={requests.fetchRomance}/>
      <AllMovie title="다큐멘터리 영화" fetchUrl={requests.fetchDocumentary}/>
      <Footer />
    </div>
  );
}

export default App;
