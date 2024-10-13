import React from 'react'
import {card} from "../assets"
import styles,{layout} from "../style"
import Button from './Button'
function CardDeal() {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>find abetter card deal <br className='sm:block hidden'/> in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>dgdg sdbfh ihfslasf sfbsafihf shsflklksf sdjblkdaflbasfl  sfbljsfalbsfa fsjbsfal
          jbfab safblsabflb faslnkasf
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal