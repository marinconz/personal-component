import React, { useEffect, useState } from "react";
import { Form, Input, Button } from 'antd'

// Login css
import styles from './login.module.css'

import Title from '../Header/Title'



const LoginForm = ( {onValueChange, onSubmit} ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect(()=>{
    onValueChange({username, password})
  },[username, password])

    return(
    <div className={styles.container}>
      <Form className={styles.form}>
        <Title title="Login" subtitle="Hello! Lets get started"/>
          <Form.Item
              name="Username"             
          >
              <Input size="large" placeholder="Username" className={styles.input} onChange={handleUsername}/>
          </Form.Item>
        
          <Form.Item
              name="Password"
          >
              <Input size="large" placeholder="Password" className={styles.input} onChange={handlePassword}/>
          </Form.Item>
          <Form.Item>
          <Button type="primary" className={styles.button} onClick={onSubmit}>
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
    )
    

}

export default LoginForm