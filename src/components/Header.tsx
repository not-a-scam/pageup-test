import { Sparkles } from 'lucide-react';
import redGlitterTexture from '@/assets/background/red-glitter-paper.jpg';
import { Tape } from '@/components/Tape';

export const Header = () => {
  return (
    <header className="pt-8 pb-8 text-center bg-transparent">
        <h1 className="font-handwritten text-5xl md:text-6xl text-red-700 drop-shadow-md flex items-center justify-center gap-2">
        <a href='https://www.instagram.com/plslorr'>@plslorr</a>
        </h1>
    </header>
  );
};
