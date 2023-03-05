import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../../components/Link';
import { Layout } from '../../components/account/layout';
import { userService } from '../../services/userService';
import { alertService } from '../../services/alertService';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
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
                  <label className="form-label" htmlFor="form1Example13">First Name</label>
                  <input type="text" name="fname" {...register('fname')}  className={`form-control form-control-lg ${errors.fname ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.fname?.message}</div>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">Last Name</label>
                  <input type="text" name="lanme" {...register('lname')}  className={`form-control form-control-lg ${errors.lname ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.lname?.message}</div>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">Username</label>
                  <input type="text" name="username" {...register('username')}  className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example23">Password</label>
                  <input type="password" name="password" {...register('password')}  className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <button disabled={formState.isSubmitting} className="btn btn-primary btn-lg btn-block">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>

              </form>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    );
}