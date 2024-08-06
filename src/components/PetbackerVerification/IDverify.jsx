import React,{} from 'react'
// plus sign from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './idverify.scss'

// library from fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faPlus)



const Card = () => {
    return (
        <div className='card-parent'>
            <div className="card">
              {/* icon  */}
              <div className="icon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>
                {/* title and small text  */}
                <h4>ID Verification</h4>
                <small>Send us a photocopy of your government issued ID. Passport or Driving License with ID Number <span>Censored</span>. Then, send us a selfie of you with your ID Card together for verification</small>
              </div>
            </div>
        </div>
    )
}

const IDverify = () => {
  return (
    <div className='id-verify-parent'>
        <div className='id-verify'>
            <h3>ID Verification</h3>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}



export default IDverify;