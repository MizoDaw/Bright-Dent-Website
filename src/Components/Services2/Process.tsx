import Visibale from "../../HighOrderComponent/withVisibale";

const Process = () => {
  const steps = [
    {
      image:'../procces/1.jpg',
      title: 'Free online consultation',
      description: [
        'Provide a user-friendly platform for scheduling free online consultations.',
        'Offer a secure and confidential environment for discussions.',
        'Ensure a qualified professional is available for the consultation.',
      ],
    },
    {
      image:'../procces/2.jpg',
      title: 'Visit Scheduling and Travel Assistance',
      description: [
        'Implement an easy-to-use online scheduling system for in-person visits.',
        'Offer travel assistance for out-of-town patients, including transportation and accommodation options.',
        'Provide clear instructions and guidance on reaching the facility.',
      ],
    },
    {
      image:'../procces/3.jpg',
      title: 'Procedure',
      description: [
        'Detail the entire procedure, including pre-operative instructions and what to expect.',
        'Our partners are individually selected to meet the highest international standards.',
        'Our partners are individually selected to meet the highest international standards.',
      ],
    },
    {
      image:'../procces/4.webp',
      title: 'Follow-up',
      description: [
        'Schedule follow-up appointments to monitor the patients progress post-procedure.',
        'Provide a platform for virtual follow-ups if applicable.',
        'Offer support and guidance for any concerns or questions that may arise during the recovery period.',
      ],
    },
    
  ];

  return (
    <div className='Process'>
      <h1>Your complete trip in one place</h1>
      {steps.map((step, index) => (

        <Visibale key={index}> 
          <img src={`${step?.image}`} alt="" />
          <div>
            <h1>{step.title}</h1>
            <ul>
              {step.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </Visibale>
      ))}
    </div>
  );
}

export default Process;

