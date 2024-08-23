import React,{useState, useEffect} from 'react'
import Navbar from '../commons/Navbar';
import './index.scss';
import Footer from '../commons/Footer';
import Title from '../commons/Title';
import axios from '../../interceptors/axios';
import Request from './Request';

/*
Object { petboarding_requests: [], pettraining_requests: [], dogwalking_requests: (1) […] }
​
dogwalking_requests: Array [ {…} ]
​​
0: Object { id: 1, service: "Dog Walking", num_dogs: 1, … }
​​​
additional_notes: "nope"
​​​
created_at: "2024-08-23T01:03:46.885104Z"
​​​
dog_breed: "husky"
​​​
dog_size: "5-10kg"
​​​
id: 1
​​​
location: "Noida"
​​​
num_days: 30
​​​
num_dogs: 1
​​​
service: "Dog Walking"
​​​
start_date: "2024-08-23T01:03:46.885035Z"
​​​
updated_at: "2024-08-23T01:03:46.885119Z"
​​​
user: 1
​​​
walks_per_day: 1
​​​
<prototype>: Object { … }
​​
length: 1
​​
<prototype>: Array []
​
petboarding_requests: Array []
​
pettraining_requests: Array []

*/

const Index = () => {
    const [data,setData] = useState([]);
    const [dataPresent,setDataPresent] = useState(false);

    useEffect(()=>{
        let url = "jobs-near-me/";
        axios.get(url).then(response => {
            console.log(response.data)
            setData(response.data)
            // check if all of them are empty array 
            if(response.data.dogwalking_requests.length !== 0){
                setDataPresent(true)
            }
            if(response.data.petboarding_requests.length !== 0){
                setDataPresent(true)
            }
            if(response.data.pettraining_requests.length !== 0){
                setDataPresent(true)
            }
        }).catch(error=>{
            console.error(error)
        });
    }
    ,[]);
  return (
    <div className='jobs-parent-top'>
        <Navbar />
        <div className="jobs-parent">
            <Title name="Jobs near me" />
            {dataPresent ?
            <div>
                {data.dogwalking_requests.map((request, index) => {
                    return <Request request={request} service_name="dogwalking" key_id={"dog_walking-"+request.id} />
                })}
                {data.petboarding_requests.map((request, index) => {
                    return <Request request={request} service_name="petboarding" key_id={"pet_boarding-"+request.id} />
                })
                }
                {data.pettraining_requests.map((request, index) => {
                    return <Request request={request} service_name="pettraining" key_id={"pet_training-"+request.id} />
                })
                }
            </div>
            :
            <div>
                <p>There are no jobs available at the moment</p>
            </div>
            }
        </div>
        <Footer />
    </div>
  )
}

export default Index