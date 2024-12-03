import CreateEditorJsBlocks from ".";

const HandleIdentityEditorJs = ({ desc }) => {
  if (!desc) return

  if (
    desc.includes("{") &&
    desc.includes("}") &&
    desc.includes("version") &&
    desc.includes("time")
  ) {
    return <CreateEditorJsBlocks editorData={desc} />;
  } else {
    return desc;
  }
};

export default HandleIdentityEditorJs;
