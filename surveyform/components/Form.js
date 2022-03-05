import styles from './Form.module.css'

export default function Form() {
    const registerUser = event => {
        event.preventDefault()  // Don't redirect the page
    }

    return (
        <form onSubmit={registerUser} className={styles.container}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required  className={styles.textbox}/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your Email" required className={styles.textbox}/>
            <label>Age (optional)</label>
            <input id="age" type="number" placeholder="Age" className={styles.textbox} />
            
            <label>Which option best describes your current role?</label>
            <select name="role" placeholder="Select current role" className={styles.selectOp}>
                <option disabled selected>Select current role</option>
                <option>Student</option>
                <option>Full Time Job</option>
                <option>Full Time Learner</option>
                <option>Prefer not to say</option>
                <option>Other</option>
            </select>

            <label htmlFor="recom">Would you recommend freeCodeCamp to a friend?</label>
            <div>
                <input  name="recom" id="r1" type="radio"/>
                <label htmlFor="r1">Definitely</label>
            </div>
            <div>
                <input type="radio" name="recom" id="r2"/>
                <label htmlFor="r2">Maybe</label>
            </div>
            <div>
                <input type="radio" name="recom" id="r3"/>
                <label htmlFor="r3">Not Sure</label>
            </div>

            

            <label htmlFor="feture">What is your favorite feature of freeCodeCamp?</label>
            <select id="feature" className={styles.selectOp}>
                <option selected disabled>Select an option</option>
                <option>Challenges</option>
                <option>Projects</option>
                <option>Community</option>
                <option>Open Source</option>
            </select>

            <label>What would you like to see improved? (Check all that apply)</label>
            <div>
                <input type="checkbox" id='check1'/>
                <label htmlFor='checl1'>Front-end Projects</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Back-end Projects</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Data Visualization</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Challenges</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Open Source Community</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Gitter help rooms</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Videos</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>City Meetups</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Wiki</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Additional Courses</label>
            </div>

            <label htmlFor="suggestions">Any comments or suggestions?</label>
            <textarea id="suggestions"/>

            <button type="submit">Submit</button>
        </form>
    )
}