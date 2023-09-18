import React from "react";
import Link from "next/link";
import LogInStyles from "../../styles/LogIn/LogIn.module.css"

export default function LogIn(){
  return(
    <div className={LogInStyles.mainContainer}>
      <div className={LogInStyles.links}>
        <Link href="http://localhost:3000/">Inicio</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        <Link href="http://localhost:3000/">Mi cuenta</Link>
        <p>&nbsp;&#62;&nbsp;</p>
        <p>Login</p>
      </div>
      <h1>Iniciar sesión</h1>
      <form action="" method="POST">
          <div>
              <label htmlFor="mail">Email</label>
              <input name="mail" type="email" id="mail" required />
          </div>
          <div>
              <label htmlFor="password">Contraseña</label>
              <input name="password" type="password" id="password" required />
          </div>
          <button type="submit">Crear cuenta</button>
      </form>
      <div className={LogInStyles.passwordAlready}>
        <Link href="http://localhost:3000/">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  )
}