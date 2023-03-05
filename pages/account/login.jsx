import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

import Image from 'next/image';

import { Layout } from '../../components/account/layout';
import { userService } from '../../services/userService';
import { alertService } from '../../services/alertService';

export default Login;

function Login() {
  const router = useRouter();

  // form validation rules 
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService.login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            {/* <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid col-md-8 col-lg-7 col-xl-6" alt="Phone image" /> */}

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
                  <label className="form-label" >Username</label>
                  <input type="text" name="username" {...register('username')} className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" >Password</label>
                  <input type="password" name="password" {...register('password')} className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" defaultChecked />
                    <label className="form-check-label" > Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button disabled={formState.isSubmitting} className="btn btn-primary btn-lg btn-block">
                  {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Login</button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                  role="button">
                  <BsFacebook className='mx-2' />Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                  role="button">
                  <AiOutlineTwitter className="mx-2" />Continue with Twitter</a>

              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

