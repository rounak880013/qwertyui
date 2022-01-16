import './App.css';
import React from "react";
import image3 from './download.png'
class App extends React.Component{
  state={
    datJson:[],
    selectedFilter: "",
  };
  setFilter = (filter) => {
    console.log(this.state.selectedFilter);
    this.setState({ selectedFilter: filter });
  };
  print=()=>{
    console.log(this.state.selectedFilter);
  }
  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
      let datJson_t = await responseGenre.json();
      console.log(datJson_t);
      this.setState({
        datJson:datJson_t,
      });
    };
    console.log(this.state.selectedFilter);
    f();
  }
  render(){
    return(
      <div className='outer'>
      <div className="leftcontainer" >
        {
          this.state.datJson.map((el)=>{
            // console.log(el);
            return <div className="leftitem" key={el.profile.email} onClick={()=>{
              this.setFilter(el.profile.email)
              this.print();
              console.log(el.profile.email);
            }}><div>{el.profile.username}</div><div>{el.jobTitle}</div></div>;
          })
        }
      </div>
      <div className='dist'>
      {this.state.selectedFilter=="" ? (
        <div>“No data to show” </div>
      ) : (
        this.state.datJson.map((el)=>{
          
          if(el.profile.email==this.state.selectedFilter){
            console.log(el.profile.email,this.state.selectedFilter)
            return <div>
            <div><h1>USER DETAILS</h1></div>
            <img src={image3} alt="" />
            <div>@Paxton68</div>
            <div>{el.bio}</div>
            <div>{el.profile.username}</div>
            <div>Neoma Schaefer</div>
            <div>Job Title</div>
            <div>{el.jobTitle}</div>
            <div>Email</div>
            <div>{el.profile.email}</div>
        </div>
          }
        })
      )}
    </div>
      </div>
    )
  }
}

export default App;
