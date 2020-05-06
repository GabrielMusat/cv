import React, {CSSProperties} from "react";
import {motion} from "framer-motion";

interface IProps {
    style: CSSProperties
    technology: Record<string, string[]>
}

const f: React.FC<IProps> = (props: IProps) => (
    <motion.div
        initial={{top: window.innerHeight}}
        animate={{top: 0}}
        transition={{duration: 1, delay: 1.3}}
        style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "1px 1px 3px black",
            ...props.style
        }}>
        <motion.span style={{color: "#333", fontWeight: 'bold', fontSize: 30, margin: 20}}>
            Full stack and machine learning software engineer
        </motion.span>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
            {Object.entries(props.technology).map(([title, elements]) => (
                <div key={title} style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 30, marginRight: 30, marginTop: 10}}>
                    <span style={{color: "#333", marginTop: 20, marginBottom: 10}}>{title}</span>
                    <div>
                        {elements.map(f => (
                            <img alt={""} height={40} style={{margin: 3}} src={require("../icons/"+f+'.png')}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div style={{margin: 30}}/>
    </motion.div>
)

export default f
