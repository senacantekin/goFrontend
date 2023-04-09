import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState("Title");
  const[descr, setDesc]= useState("Description");

 function submitPost(){
  const requestBody = {title:title, description:descr, image_url: "image_url"};
   
        axios.post('http://localhost:8080/albums', requestBody)
        .then(response => this.setState({ title: response.data.title , descr:response.data.description}))
        .catch(error => {
            
            console.error('There was an error!', error);
        });

 }
 
    // Simple POST request with a JSON body using axios
    

  
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


 
  

  useEffect(() => {
    
    document.title = title;
    
    
  }, [title,descr]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeDescr= (e)=>{
    setDesc(e.target.value);
    
  }
  
  
  return (
    <div style={styles.container}>
      <input 
        name="title"
        type="text"
        onChange={changeTitle}
       // onFocus={handleFocus}
        value={title}
        style={styles.label}/>
        
      
      <div > <input
      
      name="descr"
      type="text"
      onChange={changeDescr}
      value={descr}
      style={styles.input}
      >
      </input></div>
      <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file}alt="test" />
      

 
      <button
      onClick={submitPost()}
      style={styles.button}>
        submit
      </button>

    </div>
  );
};

export default App;

// Just some styles
const styles = {
  container: {
    height:600,
    width: 500,
    margin: "100px auto",
    justifyContent: "center",
  },
  label: {
    height:30,
    width: 200,
    padding: "10px 10px",
  },
  input: {
    height:300,
    width: 400,
    padding: "30px 20px",
  },
  button:{
    
    width: 100,
    padding:18,
    backgroundColor: "green",
    
   
    
  }
};

