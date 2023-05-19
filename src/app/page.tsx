"use client";
import Image from 'next/image';
import styles from '../app/page.module.css';
import Chessy from '../app/components/chess'

export default function Home() {
  return (
    <>
    <h1>Hello World</h1>
    <Chessy />
    </>
  )
}
