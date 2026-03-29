import React from 'react'
import styles from './chat_form.module.css'
import { Input } from 'reactstrap'
import botImage from '../../../public/chat_icon.png'
import Image from 'next/image'

export default function ChatForm() {
  const botChat = () => (
    <div className={styles.bot_chat_part_container}>
      <Image 
        src={botImage}
        width={50}
        height={50}
        alt='bot image'
      />
      <div className={styles.bot_chat_part_content}>
        Eiusmod incididunt eu elit in duis. Pariatur tempor pariatur magna ex elit. Ad mollit labore in esse incididunt do culpa eiusmod culpa occaecat. Ullamco est velit deserunt esse culpa laborum id est. Cillum sit nisi in Lorem consectetur sit esse magna id elit pariatur non ullamco magna. Incididunt dolore eu eiusmod qui officia tempor qui duis adipisicing aliquip commodo commodo nisi. Eu aute dolor tempor est nulla consequat culpa amet cillum.

Minim enim exercitation nostrud duis. Labore pariatur deserunt ipsum duis non labore incididunt. Magna adipisicing commodo sit voluptate eu et dolore sunt. Ut mollit dolore quis duis nisi adipisicing commodo pariatur.

Duis ea occaecat exercitation esse excepteur ad tempor id commodo eu ea veniam. Pariatur cupidatat ad occaecat labore consectetur irure consequat est nisi ea. Cillum exercitation do voluptate culpa velit labore est fugiat dolor sit. Esse enim labore cupidatat do ea excepteur elit ex consectetur dolor. Qui elit est nisi aute minim non irure. Ea consectetur sunt elit pariatur laboris est pariatur.
      </div>
    </div> 
  )

  const userChat = () => <div>This user chat</div>

  return (
    <>
      <div className={styles.chat_form_container}>
        <div className={styles.chat_form_header}><h3 className='text-center'>CHATBOT</h3></div>
        <div className={styles.chat_form_chat_list}>
          {botChat()}
          {userChat()}
        </div>
        <div className={styles.chat_form_input_container}>
          <Input
            className={styles.chat_form_input_message}
            type='text' 
            placeholder='Chat something....'
            name='input_message'/>
          <button className={styles.chat_form_button_submit}>→</button>
        </div>
      </div>
    </>
  )
}
