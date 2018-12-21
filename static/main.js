

class NinjaGoldComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      golds:42,
      log : []
    }
    this.process = this.process.bind(this);
  }
    process(activity, min, max) {
      let amt = Math.floor(Math.random()*(max-min+1))+min;
      let msg = `You went to the ${activity} and ${amt>=0?'gained':'lost'} ${amt}
      golds!`;
      console.log(msg);
      this.setState({
        log: this.state.log.concat([msg]),
        golds: this.state.golds + amt
      })
    }
  render() {
    let acts = this.state.log.map(el=><li>{el}</li>)
    return <div>
      <h1> Welcome to Ninja Gold </h1>
      <span>You have: {this.state.golds} golds!</span>
      <section id="acts">
        <div>
          <h4>Farm</h4>
          <span>Earns 10-20 golds</span>
          <button onClick={this.process.bind(this, "farm", 10, 20)}>Toil!</button>
        </div>
        <div>
          <h4>Cave</h4>
          <span>Earns 10-20 golds</span>
          <button onClick={this.process.bind(this, "Cave", 5, 10)}>Earn!</button>
        </div>
        <div>
          <h4>House</h4>
          <span>Earns 2-5 golds</span>
          <button onClick={this.process.bind(this, "House", 2, 5)}>Lounge!!</button>
        </div>
        <div>
        <h4>Casino</h4>
        <span>Earns 0-50 golds</span>
        <button onClick={this.process.bind(this, "Casino", -50, 50)}>play!</button>
      </div>
      </section>
      <section id="log">
        <h4>Activities</h4>
        <ul>
          {acts}
        </ul>
      </section>
      </div>
}
};
let container = document.getElementById("root");
let NGC = <NinjaGoldComponent />


ReactDOM.render(NGC, container);
