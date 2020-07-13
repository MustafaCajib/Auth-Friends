import './Login.scss';

import React from 'react';
import { Button, Form, FormFeedback, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import { sessionService } from 'state/session';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <main class="login">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="example@gmail.com"
          type="text"
          innerRef={register({ required: 'Please enter your email' })}
          invalid={!!errors.email}
        />
        <FormFeedback>{errors.email?.message}</FormFeedback>

        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          innerRef={register({ required: 'Please enter your password' })}
          invalid={!!errors.password}
        />
        <FormFeedback>{errors.password?.message}</FormFeedback>

        <Button>Login</Button>
       
      </Form>
    </main>
  );
};
export default Login;