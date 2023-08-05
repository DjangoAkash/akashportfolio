import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook,Instagram,LinkedIn } from '@material-ui/icons'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>akashtejas09@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@DjangoAkash</span>
            </p>
            <div className='contact__icons'>
                <a href='www.google.com'>
                    <IconButton>
                    <LinkedIn/>
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                    <Facebook/>
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                    <Instagram/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact