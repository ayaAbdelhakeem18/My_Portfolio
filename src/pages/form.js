import React, { useState,useEffect } from 'react';

function MyForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submited, submit] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        try {
            const response = await fetch('http://localhost/portfolio/index.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.text();
                console.log(data);
                submit(true)
            } else {
                console.error('Error sending data to backend.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='form-bg' id='WorkwithMe'>
        <div className='container-fluid mt-5 my-form' style={submited?{top:"5.7%"}:{top:"2.7%"}}>
            {submited ?
            <div className='submitted'>
                <h2>Thanks for contacting me ✦︎︎</h2>
                <p>I'll get back to you within 48 hours or ASAP!</p> 
                <button  className="btn cancel" onClick={()=>props.form()}>Go Back</button>
            </div>    :
<>
<h2>CONTACT ME ✦︎︎</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">write your Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">write your Message</label>
                        <textarea className="form-control" id="message" name="message" placeholder="Enter your message" rows={5} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button  className="btn cancel" onClick={()=>props.form()}>Cancel</button>
                </form>
</>                
            }
        </div>
    </div>
    );
}

export default MyForm;
