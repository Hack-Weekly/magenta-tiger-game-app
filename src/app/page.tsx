"use client";
import Image from 'next/image';
import styles from '../app/page.module.css';
import HumanVSRandom from '../app/components/random'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Chess</title>
    </Head>
    <center>
    <h1>Chess Game</h1>
    <h2>Magenta Tiger</h2>
    <HumanVSRandom />
    </center>
    
    </>
  )
}
