alert('yo')

class NinjaGoldComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      golds:0,
      log : []
    }
  }

  render() {
    return <div>
      <h1> Welcome to Ninja Gold </h1>
      <span>You have: 0 golds!</span>
      <section id="acts">
        <div>
          <h4>Farm</h4>
          <span>Earns 10-20 golds</span>
          <button>Toil!</button>
        </div>
        <div>
          <h4>Cave</h4>
          <span>Earns 10-20 golds</span>
          <button>Earn!</button>
        </div>
        <div>
          <h4>House</h4>
          <span>Earns 2-5 golds</span>
          <button>Lounge!!</button>
        </div>
        <div>
        <h4>Casino</h4>
        <span>Earns 0-50 golds</span>
        <button>play!</button>
      </div>
      </section>
      <section id="log">
        <h4>Activities</h4>
        <ul>
          <li>THis is a thing that was did</li>
          <li>THis is a thing that was did</li>
          <li>THis is a thing that was did</li>
          <li>THis is a thing that was did</li>
        </ul>
      </section>
      </div>
}
};
let container = document.getElementById("root");
let NGC = <NinjaGoldComponent />
ReactDOM.render(NGC, container);
