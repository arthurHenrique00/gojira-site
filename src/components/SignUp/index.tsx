import logo from '../../gojira_projects_foto/gojira-logo.webp'

const SignUp = () => (
  <div>
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" />
      <label htmlFor="nome">Sobrenome</label>
      <input type="text" name="nome" />
      <label htmlFor="nome">Email</label>
      <input type="text" name="nome" />
    </form>
    <button>Sign Up</button>
    <img src={logo} />
  </div>
)

export default SignUp
