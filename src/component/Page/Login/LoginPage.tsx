import './LoginPage.css';
import { useCallback, useState } from 'react';
import { useAuth } from '../../../hook/useAuth';
import { emailValidator, requiredValidator } from '../../../utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormItem } from '../../Form/FormItem/FormItem';
import { useFormItem } from '../../../hook/useFormItem';
import { useForm } from '../../../hook/useForm';

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const nameFormItem = useFormItem(setName, [requiredValidator]);
  const emailFormItem = useFormItem(setEmail, [requiredValidator, emailValidator]);

  const {isFormValid, checkFormValid} = useForm([nameFormItem, emailFormItem]);

  const setLoginProcess = (val: boolean) => {
    setLogin(val);
    setDisable(val);
    setError(!val);
  }

  const onSendClickHandler = useCallback(() => {
    checkFormValid();

    if (name === undefined || email === undefined) {
      return;
    }

    setLoginProcess(true);

    register(name, email).then(() => {
      navigate(from, { replace: true });
    }, (err) => {
      console.warn(`LOGIN ERROR REQUEST: ${err.message}`);
      setError(true);
    }).finally(() => {
      setLoginProcess(false);
    });
  }, [name, email]);

  return (
    <div className="LoginPage">
      <div className="LoginPage__form">
        <div className="LoginPage__formHeader">LOGIN</div>
        <div className="LoginPage__formBody">
          <FormItem
            disabled={disable}
            label="Name"
            valid={nameFormItem.isValid()}
            errors={nameFormItem.errors}
            onChange={nameFormItem.onChangeHandler}
          />
          <FormItem
            disabled={disable}
            label="Email"
            valid={emailFormItem.isValid()}
            errors={emailFormItem.errors}
            onChange={emailFormItem.onChangeHandler}
          />
          <div className="LoginPage__footer">
            <button onClick={onSendClickHandler} className="LoginPage__button" disabled={disable || !isFormValid()}>GO</button>
            {login && <span>Login ...</span>}
            {error && <span className="LoginPage__errorMessage">Login error!</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
