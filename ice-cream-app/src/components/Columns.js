import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { CakeIcon } from '@heroicons/react/outline';
import { PhoneIncomingIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/outline';
import { EmojiHappyIcon } from '@heroicons/react/outline';

const Columnas = () => {
  return (
    <div className="font-sans:'Roboto' mt-10 ml-10 mr-10">
    <div className="flex justify-center content-center">
    <h1 className="text-5xl font-semibold mt-4 mb-4">
      ¿Por qué elegir helados <span className="text-5xl text-cyan-400 font-semibold font-serif">
      Luna Ice 
    </span> ? </h1>
    </div>
    <div className="ml-4 mr-4">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        <div className="bg-white-200"> 
          <CakeIcon className="ml-4 mt-4 h-8 w-8 text-gray-600" />
          <h2 className="text-xl font-semibold font-serif mt-2">Titulo 1</h2>
          <LoremIpsum
            p={3}
            avgWordsPerSentence={6}
            avgSentencesPerParagraph={1}
          />
        </div>
        <div className="bg-white-200">
          <PhoneIncomingIcon className="ml-4 mt-4 h-8 w-8 text-gray-600" />
          <h2 className="text-xl font-semibold font-serif mt-2">Titulo 2</h2>
          <LoremIpsum
            p={3}
            avgWordsPerSentence={6}
            avgSentencesPerParagraph={1}
          />
        </div>
        <div className="bg-white-200">
          <HeartIcon className="ml-4 mt-4 h-8 w-8 text-gray-600" />
          <h2 className="text-xl font-semibold font-serif mt-2">Titulo 3</h2>
          <LoremIpsum
            p={3}
            avgWordsPerSentence={6}
            avgSentencesPerParagraph={1}
          />
        </div>
        <div className="bg-white-200">
        <EmojiHappyIcon className="ml-4 mt-4 h-8 w-8 text-gray-600" />
          <h2 className="text-xl font-semibold font-serif mt-2">Titulo 4</h2>
          <LoremIpsum
            p={3}
            avgWordsPerSentence={6}
            avgSentencesPerParagraph={1}
          />
        </div>
      </div>
    </div>
    </div>
  );
};
export default Columnas;
