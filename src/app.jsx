class Todo extends React.Component {
  render() {
    let checked = this.props.done == "true";
    let text = this.props.text;

    return (
      <div className="todo">
        <span>
          <input type="checkbox" checked={checked} />
          <input type="text" value={this.props.text} />
        </span>
      </div>
    );
  }
}

ReactDOM.render(
  <Todo text="one" done="true" />,
  document.getElementById("root")
);
