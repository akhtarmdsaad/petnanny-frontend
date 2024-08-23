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

// class Backer(models.Model):
//     user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
//     profile_pic = models.ImageField(null=True, blank=True, upload_to='profile_pics/')
//     about_me = models.TextField(null=True)
//     pet_experience = models.TextField(null=True)
//     skills = models.CharField(max_length=255)  # Consider using a ListField if multiple skills are commo,null=Truen
//     other_skills = models.TextField(null=True)
//     service_name = models.CharField(max_length=100,null=True)
//     listing_summary = models.TextField(null=True)
//     max_pets = models.PositiveIntegerField(null=True)
//     pets_accepted = models.CharField(max_length=255)  # Consider using a ListFiel,null=Trued
//     pet_size = models.CharField(max_length=255)  # Consider using a ListFiel,null=Trued
//     adult_supervision = models.BooleanField(null=True)
//     unsupervised_location = models.CharField(max_length=100,null=True)
//     nighttime_location = models.CharField(max_length=100,null=True)
//     potty_breaks = models.PositiveIntegerField(null=True)
//     home_type = models.CharField(max_length=100,null=True)
//     outdoor_area_size = models.CharField(max_length=100,null=True)
//     transport_emergencies = models.BooleanField(null=True)
//     last_minute_bookings = models.BooleanField(null=True)
//     preferred_location = models.CharField(max_length=100, blank=True, null=True)
//     service_type = models.CharField(max_length=100,null=True)
//     price = models.DecimalField(max_digits=10, decimal_places=2,null=True)
//     additional_description = models.TextField(null=True)
//     apartment_house_number = models.CharField(max_length=50,null=True)
//     street_name = models.CharField(max_length=100,null=True)
//     city = models.CharField(max_length=100,null=True)
//     zip_code = models.CharField(max_length=20,null=True)
//     country = models.CharField(max_length=100,null=True)
//     state = models.CharField(max_length=100,null=True)
//     is_verified = models.BooleanField(default=False)

const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
        about_me: '',
        service_name: '',
        listing_summary: '',
        price: '',
        apartment_house_number: '',
        street_name: '',
        city: '',
        zip_code: '',
        country: '',
        state: '',
        skills: '',
        other_skills: '',
        max_pets: '',
        pets_accepted: '',
        pet_size: '',
        adult_supervision: '',
        unsupervised_location: '',
        nighttime_location: '',
        potty_breaks: '',
        home_type: '',
        outdoor_area_size: '',
        transport_emergencies: '',
        last_minute_bookings: '',
        preferred_location: '',
        service_type: '',
        additional_description: '',
        profile_pic: null,
        photos: []
    });
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
        
        axios.post('/backers/',formData)
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