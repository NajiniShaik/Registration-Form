import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isSubmitted: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state

    const isValid = firstName !== ''

    this.setState({isFirstNameEmpty: !isValid})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurLastName = () => {
    const {lastName} = this.state

    const isValid = lastName !== ''

    this.setState({isLastNameEmpty: !isValid})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    const isValidFirstName = firstName !== ''
    const isValidLastName = lastName !== ''

    if (firstName && lastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isFirstNameEmpty: !isValidFirstName,
        isLastNameEmpty: !isValidLastName,
        isSubmitted: false,
      })
    }
  }

  firstNameErrMsg = () => {
    const {isFirstNameEmpty} = this.state

    return isFirstNameEmpty ? <p className="err-msg">Required</p> : ''
  }

  lastNameErrMsg = () => {
    const {isLastNameEmpty} = this.state

    return isLastNameEmpty ? <p className="err-msg">Required</p> : ''
  }

  getFormContainer = () => {
    const {firstName, lastName, isFirstNameEmpty, isLastNameEmpty} = this.state

    const activeFirstInput = isFirstNameEmpty ? 'active-input' : ''

    const activeSecondInput = isLastNameEmpty ? 'active-input' : ''

    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="card">
          <label className="label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            className={`input ${activeFirstInput}`}
            id="firstName"
            value={firstName}
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
          />
          {this.firstNameErrMsg()}
        </div>
        <div className="card">
          <label className="label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="Last name"
            className={`input ${activeSecondInput}`}
            id="lastName"
            value={lastName}
            onBlur={this.onBlurLastName}
            onChange={this.onChangeLastName}
          />
          {this.lastNameErrMsg()}
        </div>
        <div className="btn-card">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  submitAgain = () => {
    this.setState({firstName: '', lastName: '', isSubmitted: false})
  }

  getMsgContainer = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="msg">Submitted Successfully</p>
      <button className="btn" type="button" onClick={this.submitAgain}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="registration-form-app">
        <div className="detailed-container">
          <h1 className="main-heading">Registration</h1>
          {isSubmitted ? this.getMsgContainer() : this.getFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
