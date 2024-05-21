const MarkdownHeader = ({
  addSyntax,
}: {
  addSyntax: (syntax: string) => void;
}) => {
  const btns = [
    { name: "B", syntax: "**Bold**" },
    { name: "I", syntax: "*Italic*" },
    { name: "S", syntax: "~Strikethrough~" },
    { name: "H1", syntax: "# " },
    { name: "a", syntax: "[text](url)" },
    { name: "Img", syntax: "![alt](url)" },
    {
      name: "Table",
      syntax:
        "| Header | Title | \n | ----------- | ----------- | \n | Paragraph | Text |",
    },
    {
      name: "Code",
      syntax: "```language\n \n```",
    },
  ];

  return (
    <header className="flex ... bg-[#c9cbcd] space-x-5 font-bold text-2xl">
      {btns.map((btn) => (
        <button
          key={btn.syntax}
          className="flex ...rounded-md"
          onClick={() => addSyntax(btn.syntax)}
        >
          {btn.name}
        </button>
      ))}
    </header>
  );
};

export default MarkdownHeader;
