function App() {
  return (
    <div>
      <Tweet
        name="Elton Presley"
        username="Elton9090"
        date={new Date().toDateString()}
        message="Good day to be alive"
      />
      <Tweet
        name="Robert Kessler"
        username="rokess12"
        date={new Date().toDateString()}
        message="I'm lerning German"
      />
      <Tweet
        name="Dany Peralez"
        username="PeralezD88"
        date={new Date().toDateString()}
        message="Buenos dias a todos"
      />
    </div>
  );
}
