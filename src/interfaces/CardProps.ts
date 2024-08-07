import { Dispatch, SetStateAction } from 'react';

interface CardProps {
  textContent: string;
  variantName: string;
  isAwaitingResponse: boolean;
  isLastCard: boolean;
  isTypewriterCanceledFromUserPrompt: boolean;
  onIsCharacterTypewritten: Dispatch<SetStateAction<boolean>>;
  onIsTypewriterRunning: Dispatch<SetStateAction<boolean>>;
  onUpdateTextContent: Dispatch<SetStateAction<string>>;
}

export default CardProps;
