import style from './GetStarted.module.css'

export default function GetStarted() {
    return (
        <div className={style.container}>
            <h1>Handcrafted, home-made masterpieces</h1>
            <form>
                <input type='email' placeholder="Enter your email address" required/>
                <br/>
                <button type="submit">GET STARTED</button>
            </form>
        </div>
    )
}