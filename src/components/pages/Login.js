import React from 'react'
import { Button, Input } from '../common/index'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CustomDialog from '../common/CustomDialog'

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const handleLogin = (data) => {
    if (data) {
      localStorage.setItem('login', JSON.stringify(data))
      navigate('/')
    }
  }
  return (
    <form className='w-1/3'>
      <CustomDialog
        title={'LogIn Form'}
        openDialog={true}
        handleOnSubmit={handleSubmit(handleLogin)}
        buttonText="Login"
      >
        <Input
          label="Email"
          placeholder="Write your email .."
          name="email"
          {...register('email', {
            required: true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
          })}
        />

        <Input
          label="Password"
          type='password'
          placeholder="Write your password .."
          name="password"
          {...register('password', {
            required: true
          })}
        />
      </CustomDialog>
    </form>
  )
}

export default Login