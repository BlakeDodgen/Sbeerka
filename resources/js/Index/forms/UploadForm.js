import { useState, useContext, useCallback, useRef } from "react";
//testing upload
import axios from "axios";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {

    const [selectedFile, setSelectedFile] = useState([])
    const captionRef= useRef(null)

    // const uploadImage = async() => {

    // }


    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setSelectedFile(acceptedFiles.map(file =>
            Object.assign(file, {
                preview:URL.createObjectURL(file)
            })
            ))
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const selected_image = selectedFile?.map(file=>(
        <div>
            <img src={file.preview} style={{width:"200px"}} alt="" />
        </div>
    ))
      return (
        <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          
              <p>Drop the files here ...</p> 
              
              </div>
              <input ref={captionRef} type="text" />
              <button>send</button>
              {selected_image}
              </div>
      )

    // const [values, setValues] = useState({
    //     review: "",
    //     rating: 0,
    //     // favorite: false,
    //     body: 0,
    //     linger: 0,
    //     herbal: 0,
    //     citrus: 0,
    //     hoppy: 0,
    //     bitter: 0,
    //     sour: 0,
    //     user_id: user,
    //     beer_id: beer
    // });
    // const [errorResponse, setErrorResponse] = useState(null);

    // const handleChange = (e) => {
    //     setValues((previous_values) => {
    //         return {
    //             ...previous_values,
    //             [e.target.name]: e.target.value,
    //         };
    //     });
    // };

    // const handleSubmit = async (e) => {
        
    //     e.preventDefault();
    //         const response = await axios.post("/api/reviews/create", values);
    //         const response_data = response.data;
    //         console.log(response)
            
    //         if (typeof res === 'object') {
    //             console.log(response)
    //         }
    //         setReviewed(true);

    //     // return navigate("/");
    // };

    // return (
    //     <form action="/file-upload"
    //   class="dropzone"
    //   id="my-awesome-dropzone"></form>
    // )
};
export default Dropzone;
