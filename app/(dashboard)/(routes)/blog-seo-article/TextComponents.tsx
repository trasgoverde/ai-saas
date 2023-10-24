import React from "react";

const isHeading = (text) => {
    // Define your criteria for identifying headings
    // For example, if headings start with '#', you can use:
    return text.startsWith("# ");
  };
  
  const isTitle = (text) => {
    // Define your criteria for identifying titles
    // For example, if titles are enclosed in double quotes, you can use:
    return text.startsWith('"') && text.endsWith('"');
  };

  const Paragraph = ({ text }) => (
    <p className="text-base text-justify mb-4">{text}</p>
  );
  
  
  const isSentence = (text) => {
    // Define your criteria for identifying sentences
    // For example, if a sentence ends with a period, you can use:
    return text.endsWith(".");
  };
  
  const isParagraph = (text) => {
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
          return <Paragraph key={index}>{block}</Paragraph>;
        }
        if (isParagraph(block)) {
          return <Paragraph key={index}>{block}</Paragraph>;
        }
        return <Paragraph key={index}>{block}</Paragraph>;
      })}
    </div>
  );
};
