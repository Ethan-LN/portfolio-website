import React from 'react'
import BackgroundCircle from './BackgroundCricle'


type Props = {}

export default function Intro({}: Props) {
  return (
    <div className='h-screen flex-col space-y-8 items-center justify-center overflow-hidden'>
        <BackgroundCircle />
    </div>
  )
}
