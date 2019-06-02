import React from "react";

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      globalTitle: "Change le titre"
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    console.log("Formulaire rendu");
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.globalTitle.dontUpdate) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.globalTitle !== prevState.globalTitle) {
      console.log("Titre changé");
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({
      globalTitle: this.state.title
    });
  }

  render() {
    return (
      <div className="NewForm">
        <h1>Mon formulaire - {this.state.globalTitle}</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Entre ton titre ici</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewForm;
