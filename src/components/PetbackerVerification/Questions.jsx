import React, { useState } from 'react';
import './questions.scss';

const Questions = () => {
    const [no,setNo] = useState(1);
    const [questions,setQuestions] = useState([
        {
            question: 'What Services does Petnanny provides?',
            type: 'checkbox',
            options: ["Pet Boarding","Pet Sitting","Pet Daycare",
                "Pet taxi", "Pet Grooming", "Pet Training" ],
            answer: ["Pet Boarding","Pet Sitting","Pet Daycare",
                "Pet taxi", "Pet Grooming", "Pet Training" ]
        },
        {
            question: 'What are the photos that I should provide on my listing?',
            type: 'checkbox',
            options: ["Photos of Me and My Pet","Photos of where the pets will be kept and its environment",
                "My Contact information and exact location"],
            answer: ["Photos of Me and My Pet","Photos of where the pets will be kept and its environment"]
        },
        {
            question: 'Should information like phone numbers, social media account and full address be exchanged before booking?',
            type: 'radio',
            options: ["Yes","No"],
            answer: "No"
        },
        {
            question: 'Do i need to pay to become a pet sitter?',
            type: 'radio',
            options: ["Yes, I need to pay member fees to join as a petsitter",
                "No, I do not need to pay. Petnanny will deduct service fees only if i have successfully completed my job."],
            answer: "No, I do not need to pay. Petnanny will deduct service fees only if i have successfully completed my job."
        },
        {
            question: 'What is included in Petbacker service fees?',
            type: 'checkbox',
            options: ["Premium Insurance Coverage",
                "Transaction Fees","Advertisement Fees"],
            answer: ["Premium Insurance Coverage",
                "Transaction Fees","Advertisement Fees"]
        },
        {
            question: 'What are the steps to get hired and paid?',
            type: 'radio',
            options: ["Respond and quote, chat and discuss, get prepayment for booking via petbacker, arrange for an early meet and greet if possible, start pet care service and update daily moment on the app, mark the job complete for review and redeem your payment",
                "Respond and quote, chat and request to meet, start the job after receiving cash without Petnanny's consent."
            ],
            answer: "Respond and quote, chat and discuss, get prepayment for booking via petbacker, arrange for an early meet and greet if possible, start pet care service and update daily moment on the app, mark the job complete for review and redeem your payment"
        },
        {
            question: 'Can I receive cash payment from the owner?',
            type: 'radio',
            options: ["Yes, i do not have a need to have an insurance protection or petbacker's assistance to get future jobs.",
                "No, every booking payment needs to be made through Petnanny, to ensure there is Premium Insurace Coverage to protect me and my pet."],
            answer: "No, every booking payment needs to be made through Petnanny, to ensure there is Premium Insurace Coverage to protect me and my pet."
        },
        {
            question: 'Can i work as a petsitter if i am under 18?',
            type: 'radio',
            options: ["Yes, i can work if my parents submit their ID with a consent letter to Petnanny.",
                "No, I am not allowed to work"
            ],
            answer: "Yes, i can work if my parents submit their ID with a consent letter to Petnanny."
        },
        {
            question: 'Why book and pay via Petnanny?',
            type: 'checkbox',
            options: ["Get verified reviews to get more customers in future",
                "Get premium insurance protection for pets",
                "Owner will pay upfront to ensure payment",
                "A percentage of service fees will be reduced when i completed more jobs",
                "Using Petnanny app to show moments of pets under my care to increase my credibility"
            ],
            answer: ["Get verified reviews to get more customers in future",
                "Get premium insurance protection for pets",
                "Owner will pay upfront to ensure payment"]
        },
        {
            question: "What will happen if there's a last minute cancellation by you as a service provider?",
            type: 'radio',
            options: ["10000 INR penalty will be implement, bear in mind that, reasons will bw shown on my listing if I am not able to get a replacement sitter for the owner on Petnanny",
                "Petnanny will inform the pet owner and cancel without any fees",
                "Petnanny will cancel and refund the owner without any questions"],
            answer: "10000 INR penalty will be implement, bear in mind that, reasons will bw shown on my listing if I am not able to get a replacement sitter for the owner on Petnanny"
        },
        {
            question: 'What happen if an owner decided to reduce the numbers of stay after the stay has started?',
            type: 'radio',
            options: ["Petnanny will reduce the numbers of days and refund according to the policy",
                "Petnanny strictly does not allowed any reduction"],
            answer: "Petnanny will reduce the numbers of days and refund according to the policy"
        },
        {
            question: 'What should I do when the pet arrives for service? What should I do when visiting an owners place to provide service?',
            type: 'checkbox',
            options: ["Take a video or photo of the pet to record the health and condition before the service start.",
                "Take some time to get along with pet to see if i am capable to take care of them",
                "Collect or take care of the pet without taking any photos or video"],
            answer: ["Take a video or photo of the pet to record the health and condition before the service start.",
                "Take some time to get along with pet to see if i am capable to take care of them"
            ]
        },
        {
            question: "What can I do if I lost the Petowner's pet?",
            type: 'checkbox',
            options: ["Just keep silent",
                "Inform the petowner and Petnanny customer support within 3 hours after the pet is lost",
                "Post in social media Lost Pets Group immediately in case someone saw the pet nearby",
                "Look for the pet in drains or hiding places around your area."],
            answer: ["Inform the petowner and Petnanny customer support within 3 hours after the pet is lost",
                "Post in social media Lost Pets Group immediately in case someone saw the pet nearby",
                "Look for the pet in drains or hiding places around your area."]
        },
        {
            question: "Can I apply for an insurance claim if the pet owner's pet is sick before they leave their pet to me?",
            type: 'radio',
            options: ["Yes, Petnanny will cover everything.",
                "No, the insurance coverage is only valid if the pet gets hurt or an illness during their stay with me",
                ],
            answer: "No, the insurance coverage is only valid if the pet gets hurt or an illness during their stay with me"
        },
        {
            question: 'Can i apply for insurance if the pet passed away?',
            type: 'radio',
            options: ["No, I will have to be responsible for my own negligence while Petnanny will only provide cremation fees to the pet owner.",
                "Yes, Petbacker will be taking all responsibility and pay for compensation"
            ],
            answer: "No, I will have to be responsible for my own negligence while Petnanny will only provide cremation fees to the pet owner."
        },
        {
            question: "When the owner's pet is injured during the service, should i bring the pet to the vet?",
            type: 'radio',
            options: ["I should inform an discuss with the pet owner for a final decision before bringing the pet to a vet, unless the situation is crtical.",
                "I can just make my own decision without any discussion with the pet owner and send the pet to the vet."
            ],
            answer: "I should inform an discuss with the pet owner for a final decision before bringing the pet to a vet, unless the situation is crtical."
        },
        {
            question: 'When will I get paid?',
            type: 'radio',
            options: ["I will get paid immediately once the payment has been made by the owner.",
                "I will get paid within 2-14 working days after the job is marked Job Completed, with a good review from the owner."
            ],
            answer: "I will get paid within 2-14 working days after the job is marked Job Completed, with a good review from the owner."
        },

]);

  return (
    <div className='questions-parent'>
        <div className="questions">
            <h3>Question {no}/{questions.length}</h3>
            <div>
                <h5>{questions[no-1].question}</h5>

                {(questions[no-1].type === 'radio'?
                    questions[no-1].options.map((elem,idx)=>{
                        return (
                        <div className='options'>
                            <input type='radio' name={questions[no-1].question} /> 
                            <label>{elem}</label>
                        </div>
                        )
                    }):
                    questions[no-1].options.map((elem,idx)=>{
                        return (
                        <div className='options'>
                            <input type='checkbox' name={questions[no-1].question} /> 
                            <label>{elem}</label>
                        </div>
                        )
                    })
                    
                )}
            </div>
            <div className='buttons'>
                <button onClick={()=>setNo(no-1)} disabled={no===1}>Previous</button>
                {/* submit and check answer  */}
                <button onClick={()=>{
                    if(questions[no-1].type === 'radio'){
                        let selected = document.querySelector('input[name="'+questions[no-1].question+'"]:checked').nextSibling.innerHTML;
                        if(selected === questions[no-1].answer){
                            alert('Correct Answer');
                            if(no < questions.length){
                                setNo(no+1);
                            }
                            else {
                                console.log("Match Completed Bro")
                            }
                        }else{
                            alert('Wrong Answer');
                        }
                    }
                    else{
                        let selected = Array.from(document.querySelectorAll('input[name="'+questions[no-1].question+'"]:checked')).map((elem)=>{
                            return elem.nextSibling.innerHTML;
                        });
                        if(JSON.stringify(selected) === JSON.stringify(questions[no-1].answer)){
                            alert('Correct Answer');
                            if(no < questions.length){
                                setNo(no+1);
                            }
                            else {
                                console.log("Match Completed Bro")
                            }
                        }else{
                            alert('Wrong Answer');
                        }
                    }
                } }>Submit</button>

                <button onClick={()=>setNo(no+1)} disabled={no===questions.length}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Questions