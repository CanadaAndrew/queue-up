import DiscordButton from './components/Buttons/DiscordButton'
import GoogleButton from './components/Buttons/GoogleButton'

function Login() {

  return (
    <main className = "flex w-full min-h-screen justify-center items-center p-4">
      <div className = "flex w-full max-w-md flex-col justify-center items-center gap-5 bg-card px-6 py-12 border-primary-button border-4 shadow-neon shadow-primary-button/60">
        <h1 className = "text-h1 text-primary-button text-center">Welcome to Queue-Up</h1>
        <p className = "text-body text-center">A scheduler built for game nights and casual hangouts.</p>
        <GoogleButton></GoogleButton>
        <DiscordButton></DiscordButton>
      </div>
    </main>
  )
}

export default Login
