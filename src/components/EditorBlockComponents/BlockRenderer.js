import React from "react";
import blockRendererMap from "./BlockRendererMap";

const BlockRenderer = ({block})=>{
    const BlockComponent = blockRendererMap[block.type];
    if(!BlockComponent){
        return null
    }

    return <BlockComponent data={block.data} />
}

export default BlockRenderer;