"use client"

import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const homepage = () => {
  return (
    <div className={styles.home}>
      <section id="section" className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`${styles.content} container`}>
          <div className={`${styles.showcase}`}>
            <h1>Help Luna Find Freedom</h1>
            <p className='text-black'>
              Join us in raising funds to relocate an Orca to a sanctuary where she can thrive
            </p>
            <Link href="#donate" className={`${styles.actionbtn}`}>
              Donate Now
            </Link>
          </div>
        </div>
        <div className={`${styles.links}`}>
          <Link href="#"
            className="text-white"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
          <Link href="#"
            className="text-white"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
          <Link href="#"
            className="text-white"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
        </div>
        <div className={styles.arrowDown}>
          <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </div>
        <div className={styles.lineImage}>
          <img src='/uprig.svg' className={styles.uprig} />
          <img src='/uprig.svg' className={styles.uprig} />
        </div>
      </section>

      <div className='divider my-2'></div>


      <section id="section" className={styles.whysection}>
        <div className='container'>
          <div className={styles.whycontent}>
            <div className={styles.whyimage}>
            </div>
            <div className={styles.whytext}>
              <h2>
                Why Luna Needs Your Help
              </h2>
              <p className='text-black'>
                For years, Luna has lived in confinement in a tiny tank, deprived of the natural environment and social connections that orcas need to survive. She suffers physically and emotionally, but you can help change her fate
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2 my-10 md:my-20'>
            <h2>
              Where Your Donations Go?
            </h2>
            <p className='text-black'>
              Your donations will go directly to funding Luna’s transport to a sanctuary, veterinary care, legal aid, and awareness campaigns to end her suffering.
            </p>
          </div>
        </div>
      </section>

      <div className='divider my-2'></div>


      <section id="section" className={styles.about}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className='text-black'>
            We are dedicated to freeing Luna from her life of isolation and suffering. With your help, we can give her the life she deserves in a sanctuary with other orcas.
          </p>
        </div>
      </section>

      <div className='divider my-2'></div>


      <section id="section" className={styles.about}>
        <div className="container">
          <h2>About Luna</h2>
          <p className='text-black'>
            Luna was captured and placed in captivity. She has been in a small tank for years. Orcas are intelligent, social creatures, but Luna has never experienced life outside of her tank
          </p>
        </div>
      </section>

      <div className='divider my-2'></div>

      <section id="donate" className={styles.about}>
        <div className="container">
          <h2>Donate to Help Luna</h2>
          <p className='text-black'>
            Your contribution will make a significant impact on the mission to free Luna. All donations are tax-deductible and go directly to the cause.
          </p>
          {/* options */}
          <p className='my-4 font-bold text-black'>Payment Options</p>

          <div className='flex flex-col md:flex-row items-center gap-10 my-5 cursor-pointer'>
            <a href='https://www.paypal.me/KhawlaAlgashgari'
              className='flex w-full md:w-auto items-center text-xl gap-3 bg-blue-600 py-3 rounded-lg text-white font-bold px-4'
              target='_blank'>
              <img src='/paypal.png' className='w-10 h-10' />
              Donate with Paypal</a>

            <div
              className='flex w-full md:w-auto items-center text-xl gap-3 bg-blue-600 py-3 rounded-lg text-white font-bold px-4'
              onClick={() => document.getElementById('my_modal_5').showModal()}
            >
              <img src='/usdt.png' className='w-10 h-10' />
              Donate with USDT(Crypto)</div>

            <div
              className='flex w-full md:w-auto items-center text-xl gap-3 bg-blue-600 py-3 rounded-lg text-white font-bold px-4'
              onClick={() => document.getElementById('my_modal_6').showModal()}
            >
              <img src='/bitcoin.png' className='w-10 h-10' />
              Donate with Bitcoin(Crypto)</div>
          </div>
        </div>
      </section>





      {/* USDT MODAL */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">Donate With USDT</h3>
          <p className="py-4 text-white">Scan the QR code below to copy the address:</p>
          <div className='divider my-2'></div>
          <img src='/usdtaddr.png' className='w-96' />
          <p className='text-white my-8'>
            Or copy this address:
          </p>
          <input value="TRyUbxnHe4auZdGcAo3ZzjdTtsZ5K96LWD"
            className='w-full p-2 mb-5 text-white'
            readOnly />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full bg-blue-600 text-white">Done</button>
            </form>
          </div>
        </div>
      </dialog>




      {/* USDT MODAL */}
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">Donate With Bitcoin</h3>
          <p className="py-4 text-white">Scan the QR code below to copy the address:</p>
          <div className='divider my-2'></div>
          <img src='/btcaddress.png' className='w-96' />
          <p className='text-white my-8'>
            Or copy this address:
          </p>
          <input value="3AcegwBz9a5uH1dQqrCSF88xpNRYicw4Wx"
            className='w-full p-2 mb-5 text-white'
            readOnly />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full bg-blue-600 text-white">Done</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  )
}

export default homepage