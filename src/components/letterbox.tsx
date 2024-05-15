import React from 'react';

interface LetterBoxProps {
  letter: string;
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
      <span className="text-lg font-bold">{letter}</span>
    </div>
  );
};

export default LetterBox;
