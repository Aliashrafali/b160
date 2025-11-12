import React, { useState } from "react";
import { useRef } from "react";
import { addStudent } from "../service/api.js";

const Form = () =>{

    const [student, setStudent] = useState({
        name:'',
        mobile:'',
        image:''
    });

    const onValueChange = (e) =>{
        setStudent({...student, [e.target.name]:e.target.value});
        console.log(student);
    }

    const fileData = (e) =>{
        setStudent({...student, image:e.target.files[0]});
    }
    const validName = useRef(null);
    const validMobile = useRef(null);
    const validImage = useRef(null);
    const submitData = async (e) =>{
        e.preventDefault();
        // validations
        if(!student.name){
            alert("Enter Your Name ?");
            validName.current.focus();
        }else if(!student.mobile){
            alert("Enter Mobile ?");
            validMobile.current.focus();
        }else if(student.mobile.length !== 10){
            alert("Enter 10 Digit Mobile No ?");
            validMobile.current.focus();
        }else if(!student.image){
            alert("Upload Image ?");
            validImage.current.focus();
        }else{
            const formData = new FormData();    // file uploading 
            formData.append('image', student.image, student.image.name);
            formData.append('name', student.name);
            formData.append('mobile', student.mobile);

            try {
                const res = await addStudent(formData);
                if(res.status === 201){  // success 200 sucee get, 404 page not found 403 forbidden 
                    alert(res.data);
                }else{
                    alert("Something Went Wrong");
                }
            } catch (error) {
                console.log("Error while Insert Data", error);
            }
        }
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <div className="form p-3">
                                <h6>Student Registration Form</h6><hr></hr>
                                <form>
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={onValueChange} ref={validName} placeholder="Enter Name" className="form-control"></input>

                                    <label>Mobile</label>
                                    <input type="text" name="mobile" onChange={onValueChange} ref={validMobile} placeholder="Enter Mobile" className="form-control"></input>

                                    <label>Image</label>
                                    <input type="file" name="image" onChange={fileData} ref={validImage} className="form-control"></input>

                                    <button onClick={submitData} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form