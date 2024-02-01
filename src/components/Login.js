import React , {useEffect,useState} from "react"
export default function Login(){
	const [upEmail , setUpEmail] = useState("");
	const [upPassword, setUpPassword] = useState("");
	const [upName, setUpName] = useState("");
	const [inEmail, setInEmail] = useState("");
	const [inPassword, setInPassword] = useState("");

	const register = ()=>{
		console.log( upName , upEmail ,  upPassword);
	}

	useEffect(()=>{
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
	} , [])

    return(
        <>
		<div className="loyiha">
		<div className="container" id="container">
	<div className="form-container sign-up-container">
		<div className="form">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input
			 type="text"
			  placeholder="Name"
			  value={upName}
			  onChange={(e)=>setUpName(e.target.value)}
			   />
			<input
			 type="email"
			  placeholder="Email" 
			  value={upEmail}
			  onChange={(e)=>setUpEmail(e.target.value)}
			  />
			<input
			 type="password" 
			 placeholder="Password"
			 value={upPassword}
			  onChange={(e)=>setUpPassword(e.target.value)}
			  />
			<button onClick={()=>register()} className="reset">Sign Up</button>
		</div>
	</div>
	<div className="form-container sign-in-container">
		<div className="form">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input 
			 type="email"
			  placeholder="Email"
			  value={inEmail}
			  onChange={(e)=>setInEmail(e.target.value)}
			
			   />
			<input
			 type="password" 
			 placeholder="Password"
			 value={inPassword}
			  onChange={(e)=>setInPassword(e.target.value)}
			  />
			<a href="/">Forgot your password?</a>
			<button>Sign In</button>
		</div>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
		</div>
	

</>
    )
}