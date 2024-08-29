import React from 'react';
import Review from './Review';
// don't change the Component name "App"
function App() {
    const [feedback,setFeedback]= React.useState('');
    const [student,setStudent]= React.useState('');
    function handleFeedback(event){
        setFeedback(event.target.value);
    }
    function handleStudent(event){
        setStudent(event.target.value);
    }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea 
          
          onChange={handleFeedback} />
        </p>
   
        <p>
          <label>Your Name</label>
          <input type="text" 
         
          onChange={handleStudent}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;