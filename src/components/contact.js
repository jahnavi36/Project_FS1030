import React,{Component} from 'react';

 class Contact extends Component {
    constructor() {
      super();
      this.state = {
        userName:"",
        emailid:"",
        mobileno:"",
        fields: {},
        errors:{}
      }
      this.userNameChange = this.userNameChange.bind(this);
      this.emailidChange = this.emailidChange.bind(this);
      this.mobilenoChange = this.mobilenoChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submituserContactForm = this.submituserContactForm.bind(this);
    };
    userNameChange(e){
      this.setState({
        userName:e.target.value
      });
    }
    emailidChange(e){
      this.setState({
        emailid:e.target.value
      });
    }
    mobilenoChange(e){
      this.setState({
        mobile:e.target.value
      });
    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

      submituserContactForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }

      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
          }
    
          if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
              formIsValid = false;
              errors["emailid"] = "*Please enter valid email-ID.";
            }
          }
    
          if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
          }
    
          if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
              formIsValid = false;
              errors["mobileno"] = "*Please enter valid mobile no.";
            }
          }
    
         
    
          this.setState({
            errors: errors
          });
          return formIsValid;
    
    
        }
     componentDidUpdate(){
       console.log(this.state);
     }
    
  render() {
   return(
    
     <div id="main-contact-container">
         <div id ="contact-form">
         <h4>Get In Touch</h4>
         <form method="post"  name="userContactForm"  onSubmit= {this.submituserContactForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <input type="submit" className="button"  value="Submit"/>
        </form>
    </div>
</div>


      );
  }
 }
export default Contact ;     
      
      
      
      
    