"use client";
import Slider from "./Slider.tsx";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <main className="flex h-screen flex-col items-center md:p-24 p-6">
      <Slider />

      <ButtonGroup gap="4" className="mt-4">
        <Button colorScheme="blackAlpha" onClick={handlePlay}>
          Play
        </Button>
        <Button colorScheme="gray">Surprise</Button>
      </ButtonGroup>
      {/* <button onClick={handlePlay}>Play</button> */}
      {isPlaying && (
        <audio autoPlay loop>
          <source src="/videos/Famy.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </main>
  );
}
