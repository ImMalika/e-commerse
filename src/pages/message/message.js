import React from 'react'
import {useForm} from "react-hook-form";
import c from "./message.module.scss";
function Message() {
  const {register,handleSubmit,formState:{errors}}=useForm();
const send=(data)=>{
  console.log(data);
}
console.log(errors);
  return (
    <div className={c.div}>
      <h1 className={c.h1}>Message Us</h1>
      <form className={c.form} onSubmit={handleSubmit(send)}>
        <input className={c.input} type="tel" placeholder="phone Number"{...register("tel",{required:true})} />
        <input className={c.input} type="text" placeholder="subject" {...register("subject",{required:true})}/>
        <input className={c.input} type="message" placeholder="message" {...register("message",{required:true})}/>
        <p>Status:PENDING</p>
        <button className={c.button}>Send</button>
      </form>
    </div>
  )
}

export default Message

