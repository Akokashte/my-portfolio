import React from "react"
import "../../styles/EditorBlockStyles/blocks.css";
import { motion } from "framer-motion";

const alertStyles = {
    primary: {
        color: "#2b6cb0",
        backgroundColor: "#ebf8ff",
        border: "1px solid #4299e1"
    },
    secondary: {
        color: "#222731",
        backgroundColor: "#f7fafc",
        border: "1px solid #cbd5e0"
    },
    danger: {
        color: "#c53030",
        backgroundColor: "#fff5f5",
        border: "1px solid #fc8181"
    },
    success: {
        color: "#2f855a",
        backgroundColor: "#f0fff4",
        border: "1px solid #68d391"
    },
    warning: {
        color: "#c05621",
        backgroundColor: "#fffaf0",
        border: "1px solid #ed8936"
    },
    light: {
        color: "#1a202c",
        backgroundColor: "#fff",
        border: "1px solid #edf2f7"
    },
    info: {
        color: "#00727c",
        backgroundColor: "#e6fdff",
        border: "1px solid #4cd4ce"
    },
    dark: {
        color: "#d3d3d3",
        backgroundColor: "#2d3748",
        border: "1px solid #1a202c"
    },
}


const HeaderBlock = ({ data }) => {
    const TagHead = `h${data.level}`
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
        >
            <TagHead>
                {data.text}
            </TagHead>
        </motion.div>
    )
}

const ParagraphBlock = ({ data }) => {

    return (
       <p dangerouslySetInnerHTML={{ __html: data.text }} />
    )
}

const ImageBlock = ({ data }) => {
    return (
        <motion.div
            className="image_block"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
        >
            <img src={data.file.url} alt={data.caption} />
        </motion.div>
    )
}

const OrderedListBlock = ({ data, Tag }) => {
    console.log(data)
    return (
        <Tag
            className="list_container"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
        >
            {
                data.items.map((listItem, index) => {
                    return <li className="list_item" key={index} style={{ paddingLeft: "0.9rem" }} >
                        {listItem.content}
                        {
                            Array.isArray(listItem.items) && listItem.items.length > 0 &&
                            <OrderedListBlock data={listItem} Tag={Tag} />
                        }
                    </li>
                })
            }
        </Tag>
    )
}


const ListBlock = ({ data }) => {
    const Tag = data.style === "unordered" ? "ul" : "ol"

    return (
        <OrderedListBlock data={data} Tag={Tag} />
    )
}

const AlertBlock = ({ data }) => {
    return (
        <motion.div
            className="alert_container"
            style={{ textAlign: `${data.align}`, ...alertStyles[`${data.type}`] }}
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
        >
            <p>{data.message}</p>
        </motion.div>
    )
}

const TableBlock = ({ data }) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
            className="my_table_wrapper"
        >
            <table className="my_table">
                {
                    data.content.map((curItem, rowIndex) => {
                        return (
                            <tbody key={rowIndex}>
                                <tr>
                                    {
                                        curItem.map((cellData, colIndex) => {
                                            return rowIndex === 0 ?
                                                <th key={rowIndex.toString() + colIndex.toString()}>{cellData}</th>
                                                : <td key={rowIndex.toString() + colIndex.toString()}>{cellData}</td>
                                        })
                                    }
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </motion.div>
    )
}


export {
    HeaderBlock,
    ParagraphBlock,
    ImageBlock,
    ListBlock,
    AlertBlock,
    TableBlock,
}