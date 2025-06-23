import Header from "./components/1.Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: '80px' }}> {/* Header өндөртэй тэнцүү */}
        <h1>Тавтай морил</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
        <p>Scroll down to see the sticky top navbar in action!</p>
        <div style={{ height: '2000px' }}></div> {/* Scroll test */}
      </div>
    </div>
  );
}

export default App;
