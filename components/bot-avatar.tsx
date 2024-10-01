import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface BotAvatarProps {
  src?: string;
  alt?: string;
}

export const BotAvatar: React.FC<BotAvatarProps> = ({ src, alt = 'Bot Avatar' }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <span className="text-xl">🤖</span>
      </AvatarFallback>
    </Avatar>
  );
};