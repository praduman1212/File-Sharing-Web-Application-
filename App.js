import {useRef,useState,useEffect} from 'react';
import './App.css';
import {uploadFile} from './api';

function App() {
const[file,setFile]=useState('');
const[result,setResult] = useState('');

const fileInputRef=useRef();

useEffect(()=>{
const getImage= async()=>{
if(file){

const data= new FormData();
data.append("name",file.name);
data.append("file",file);

let response = await uploadFile(data);
setResult(response.path);
}
}
getImage();
},[file])

const onUploadClick=()=>{
  fileInputRef.current.click();
}


  return (
    <div className="container">
      <img src="logo.jpg" alt="background picture" />
      
      <div className="overlay-box">
        <div className="white-box">
        <h1>File Sharing System </h1> 
        <p>Upload and share the download link to share the file</p>
        <button onClick={()=>onUploadClick()}>Upload
        </button>
        <input type="file"
           ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e) =>setFile(e.target.files[0]) }
         /><br></br><br></br>
       <a href={result} target='_blank'>{result}</a> <br> 
       </br><br></br>
       <p>click on the link to download he file</p>
        </div>
      </div>
    </div>
  );
}

export default App;

