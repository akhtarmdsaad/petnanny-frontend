import React,{useState, useEffect} from 'react'
import Navbar from '../commons/Navbar';
import './index.scss';
import Footer from '../commons/Footer';
import Title from '../commons/Title';
import axios from '../../interceptors/axios';
import Request from './Request';

const Index = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        let url = "jobs-near-me/";
        axios.get(url).then(response => {
            console.log(response.data)
            setData(response.data)
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
            {data ?
            <div>{data.requests && data.requests.map((request,idx)=>{
                return <Request key_id={idx} request={request} />
            })}</div>
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