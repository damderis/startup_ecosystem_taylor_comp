'use client'
import React from 'react';
import { Client } from "@gradio/client";

const Chatbot: React.FC = () => {
  return (
    <div className="flex rounded-lg justify-center items-center h-screen bg-zinc-950">
      <iframe
	src="https://anasmarz-penat.hf.space"
	width="1100"
	height="650"
    ></iframe>
    </div>
  );
};

export default Chatbot;
