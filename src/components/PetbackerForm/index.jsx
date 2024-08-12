import React,{useState, useEffect} from 'react';
import './index.scss';
import AboutMe from './AboutMe';
import DescribeService from './DescribeService';
import ServiceName from './ServiceName';
import AddServiceRate from './AddServiceRate';
import AddLocation from './AddLocation';
import AddPhotos from './AddPhotos';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';
import axios from '../../interceptors/axios';

const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({});
    let forms_array = [<AboutMe formData={formData} setFormData={setFormData} />, <ServiceName formData={formData} setFormData={setFormData} />, 
    <DescribeService formData={formData} setFormData={setFormData} />, <AddServiceRate formData={formData} setFormData={setFormData} />, 
    <AddLocation formData={formData} setFormData={setFormData} />, <AddPhotos formData={formData} setFormData={setFormData} />];
    let total_forms = forms_array.length;
    let offset = 100/total_forms;

    useEffect(()=>{
        axios.get('is-backer/')
        .then(response => {
            console.log(response.data);
            if(response.data.is_backer){
                window.location.href = '/profile';
            }
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    const handleSubmit = () => {
        console.log("submitting form");
        let obj = []
        formData && Object.keys(formData).map((key) => {
            obj.push({topic: key, value: formData[key]});
        });
        console.log(obj);
        axios.post('/backers/', {
            details: obj
        })
        .then(response => {
            console.log(response);
            if (response.status === 201){
                window.location.href = '/petbacker-verification';
            }
        })
        .catch(error => {
            console.log(error);
        });

        return "";
    }

  return (
    <div className="petbacker-form-parent">
        <Navbar />
    <div className='petbacker-form'>
        <h1>Petbacker form</h1>
        {/* div bars */}
        <div className="progress" style={{padding:0, width:'100%',border:'1px solid #beba9d',height:5}}>
            <div className="progress-bar" role="progressbar" style={{height:5,padding:0,width: `${(index+1)*offset}%`, backgroundColor:'#beba9d'}} aria-valuenow={(index+1)*offset} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        
        {forms_array[index]}
        <div className="form-buttons">
            {index===0?<></>:<button  className="btn btn-primary" onClick={
                () => {
                    if(index > 0){
                        setIndex(index-1);
                    }
                }
            }>Back</button>}
            {index===forms_array.length-1?<button className="btn btn-primary" onClick={handleSubmit}>Submit</button>:<button  className="btn btn-primary" onClick={
                () => {
                    if(index < forms_array.length-1){
                        setIndex(index+1);
                    }
                }
            }>Next</button>}
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default Index;