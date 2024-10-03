import React from "react";

// Define the Heading1 component or import it if it exists elsewhere
const Heading1: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-2xl font-bold mb-4">{children}</h1>
);

const isHeading = (text: string): boolean => {
    return text.startsWith("# ");
  };
  
  const isTitle = (text: string): boolean => {
    return text.startsWith('"') && text.endsWith('"');
  };

  const Paragraph: React.FC<{ text: string }> = ({ text }) => (
    <p className="text-base text-justify mb-4">{text}</p>
  );
  
  
  const isSentence = (text: string): boolean => {
    return text.endsWith(".");
  };
  
  const isParagraph = (text: string): boolean => {
    return text.length > 100;
  };
  

export const StyledMessage: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div>
      {content.split("\n").map((block, index) => {
        if (isHeading(block)) {
          return <Heading1 key={index}>{block.slice(2)}</Heading1>; // Remove the '# ' from the heading
        }
        if (isTitle(block)) {
          return <Heading1 key={index}>{block.slice(1, -1)}</Heading1>; // Remove the quotes from the title
        }
        if (isSentence(block) || isParagraph(block)) {
          return <Paragraph key={index} text={block} />;
        }
        return <Paragraph key={index} text={block} />;
      })}
    </div>
  );
};
