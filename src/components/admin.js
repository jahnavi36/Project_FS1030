import React, { Component } from 'react';


export default class Admin extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React CRUD Application',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let email = this.refs.email.value;
    let experience = this.refs.experience.value;
    let contact = this.refs.contact.value;
    let project = this.refs.project.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address,email, experience, contact, project
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].email = email;
      datas[index].experience = experience;
      datas[index].contact = contact;
      datas[index].project = project;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.email.value = data.email;
    this.refs.experience.value =data.experience; 
    this.refs.contact.value = data.contact;
    this.refs.project.value = data.project;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <input type="text" ref="email" placeholder="your email" className="formField" />
          <input type="text" ref="experience" placeholder="your experience" className="formField" />
          <input type="text" ref="contact" placeholder="your contact" className="formField" />
          <input type="text" ref="project" placeholder="your project" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}     {data.address}     {data.email}    {data.experience}    {data.contact}   {data.project}


              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>


              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

