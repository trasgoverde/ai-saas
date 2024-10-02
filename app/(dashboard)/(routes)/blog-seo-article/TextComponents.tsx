import React from "react";

// Define the Heading1 component or import it if it exists elsewhere
const Heading1: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-2xl font-bold mb-4">{children}</h1>
);

const isHeading = (text: string): boolean => {
    // Define your criteria for identifying headings
    // For example, if headings start with '#', you can use:
    return text.startsWith("# ");
  };
  
  const isTitle = (text: string): boolean => {
    // Define your criteria for identifying titles
    // For example, if titles are enclosed in double quotes, you can use:
    return text.startsWith('"') && text.endsWith('"');
  };

  const Paragraph: React.FC<{ text: string }> = ({ text }) => (
    <p className="text-base text-justify mb-4">{text}</p>
  );
  
  
  const isSentence = (text: string): boolean => {
    // Define your criteria for identifying sentences
    // For example, if a sentence ends with a period, you can use:
    return text.endsWith(".");
  };
  
  const isParagraph = (text: string): boolean => {
    // Define your criteria for identifying paragraphs
    // For example, if paragraphs are longer than a certain length, you can use:
    return text.length > 100;
  };
  

export const StyledMessage: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div>
      {content.split("\n").map((block, index) => {
        if (isHeading(block)) {
          return <Heading1 key={index}>{block}</Heading1>;
        }
        if (isTitle(block)) {
          return <Heading1 key={index}>{block}</Heading1>;
        }
        if (isSentence(block)) {
          return <Paragraph key={index} text={block} />;
        }
        if (isParagraph(block)) {
          return <Paragraph key={index} text={block} />;
        }
        return <Paragraph key={index} text={block} />;
      })}
    </div>
  );
};
