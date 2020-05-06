import React from "react"
import {motion} from "framer-motion";

interface IProps {
    name: string
    residency: string
    birthdate: string
    linkedin: string
    email: string
    github: string
}

const f: React.FC<IProps> = (props: IProps) => {
    const {name, residency, birthdate, linkedin, email, github} = props
    return <div>{[[name, email], [birthdate, linkedin], [residency, github]].map(([left, right], i) => (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: !i ? 50: 10}}>
            <motion.div initial={{right: 100}} animate={{right: 0}} transition={{duration: 1, delay: i*0.3}} style={{position: "relative"}}>
                <motion.span
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                    style={{fontWeight: "bold", fontSize: 20, color: "#eee"}}>{left}</motion.span>
            </motion.div>
            <motion.div initial={{left: 100}} animate={{left: 0}} transition={{duration: 1.5, delay: i*0.3}} style={{position: "relative"}}>
                <motion.span
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i*0.3}}
                    style={{fontWeight: "bold", fontSize: 20, color: "#eee"}}>{right}</motion.span>
            </motion.div>
        </div>
    ))}</div>
}

export default f
