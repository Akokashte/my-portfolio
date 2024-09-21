import { AlertBlock, HeaderBlock, ImageBlock, ListBlock, ParagraphBlock, TableBlock } from "./AllBlocks";

const blockRendererMap = {
    header: HeaderBlock,
    paragraph: ParagraphBlock,
    image:ImageBlock,
    list:ListBlock,
    alert:AlertBlock,
    table:TableBlock,
}

export default blockRendererMap;