import classes from './Auth.module.css'

const Auth=()=>{

  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return(
    <div className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="id">Id</label>
            <input type="text" id="id"/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </div>
  )
}

export default Auth