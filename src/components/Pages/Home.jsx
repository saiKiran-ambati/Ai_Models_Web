import React, { useState } from 'react';
import clsx from 'clsx';
const aiModels = [
  // Image
  { name: "DALL·E", type: "image", paid: true, logo: "/logos/dalle.png", url: "https://openai.com/dall-e" },
  { name: "Stable Diffusion", type: "image", paid: false, logo: "/logos/stable-diffusion.png", url: "https://stability.ai" },
  { name: "Midjourney", type: "image", paid: true, logo: "/logos/midjourney.png", url: "https://www.midjourney.com" },
  { name: "DreamStudio", type: "image", paid: true, logo: "/logos/dreamstudio.png", url: "https://dreamstudio.ai" },
  { name: "Canva AI", type: "image", paid: false, logo: "/logos/canva.png", url: "https://www.canva.com" },

  // Video
  { name: "Runway ML", type: "video", paid: true, logo: "/logos/runwayml.png", url: "https://runwayml.com" },
  { name: "Pictory", type: "video", paid: false, logo: "/logos/pictory.png", url: "https://pictory.ai" },
  { name: "Synthesia", type: "video", paid: true, logo: "/logos/synthesia.png", url: "https://www.synthesia.io" },
  { name: "Lumen5", type: "video", paid: true, logo: "/logos/lumen5.png", url: "https://lumen5.com" },
  { name: "Veed.io", type: "video", paid: true, logo: "/logos/veed.png", url: "https://www.veed.io" },

  // Audio
  { name: "Descript", type: "audio", paid: true, logo: "/logos/descript.png", url: "https://www.descript.com" },
  { name: "Whisper", type: "audio", paid: false, logo: "/logos/whisper.png", url: "https://openai.com/research/whisper" },
  { name: "ElevenLabs", type: "audio", paid: true, logo: "/logos/elevenlabs.png", url: "https://www.elevenlabs.io" },
  { name: "Voicemod AI", type: "audio", paid: false, logo: "/logos/voicemod.png", url: "https://www.voicemod.net" },

  // Text
  { name: "GPT-4", type: "text", paid: true, logo: "/logos/gpt4.png", url: "https://openai.com/gpt-4" },
  { name: "GPT-3.5", type: "text", paid: false, logo: "/logos/gpt3.png", url: "https://platform.openai.com/docs/models/gpt-3-5" },
  { name: "Claude 3", type: "text", paid: true, logo: "/logos/claude3.png", url: "https://www.anthropic.com/index/claude-3" },
  { name: "Claude Haiku", type: "text", paid: false, logo: "/logos/claude3.png", url: "https://www.anthropic.com/index/claude-3" },
  { name: "Gemini", type: "text", paid: false, logo: "/logos/gemini.png", url: "https://deepmind.google/technologies/gemini" },
  { name: "Llama 3", type: "text", paid: false, logo: "/logos/llama3.png", url: "https://ai.meta.com/llama/" },
  { name: "DeepL", type: "text", paid: true, logo: "/logos/deepl.png", url: "https://www.deepl.com" },
  { name: "Mistral 7B", type: "text", paid: false, logo: "/logos/mistral.png", url: "https://mistral.ai" },
  { name: "Perplexity AI", type: "text", paid: false, logo: "/logos/perplexity.png", url: "https://www.perplexity.ai" },
  { name: "Google Bard", type: "text", paid: false, logo: "/logos/bard.png", url: "https://bard.google.com" },
  { name: "Groq LPU", type: "text", paid: false, logo: "/logos/groq.png", url: "https://groq.com" },
  { name: "Cohere Command R+", type: "text", paid: false, logo: "/logos/cohere.png", url: "https://cohere.com" },

  // Code
  { name: "Phind", type: "code", paid: false, logo: "/logos/phind.png", url: "https://www.phind.com" },
  { name: "Copilot", type: "code", paid: true, logo: "/logos/copilot.png", url: "https://github.com/features/copilot" },
  { name: "Codeium", type: "code", paid: false, logo: "/logos/codeium.png", url: "https://codeium.com" },
  { name: "Tabnine", type: "code", paid: false, logo: "/logos/tabnine.png", url: "https://www.tabnine.com" },
  { name: "Replit Ghostwriter", type: "code", paid: true, logo: "/logos/replit.png", url: "https://replit.com/ghostwriter" },
  { name: "Amazon CodeWhisperer", type: "code", paid: false, logo: "/logos/codewhisperer.png", url: "https://aws.amazon.com/codewhisperer" },
  { name: "RunPod", type: "code", paid: true, logo: "/logos/runpod.png", url: "https://www.runpod.io" },
  { name: "Hugging Face Transformers", type: "code", paid: false, logo: "/logos/huggingface.png", url: "https://huggingface.co/models" },

  // Multimodal
  { name: "OpenAI GPT-4o", type: "multimodal", paid: false, logo: "/logos/gpt4o.png", url: "https://openai.com/index/gpt-4o" },
  { name: "LLaVA", type: "multimodal", paid: false, logo: "/logos/llava.png", url: "https://llava-vl.github.io" },
  { name: "Gemini Pro Vision", type: "multimodal", paid: false, logo: "/logos/geminipro.png", url: "https://deepmind.google/technologies/gemini" }
];
const types = ["all", "image", "text", "code", "video", "audio", "multimodal"];


const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const filteredModels = aiModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.type.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === "all" || model.type === selectedType;
    return matchesSearch && matchesType;
  });

  const paidModels = filteredModels.filter(model => model.paid);
  const freeModels = filteredModels.filter(model => !model.paid);

  return (
    <div className={clsx(
      "min-h-screen px-6 py-8 transition-colors",
      darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        : "bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900"
    )}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">🧠 AI Model Explorer</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 text-sm font-medium rounded-lg border shadow-sm bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:opacity-90 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <input
          type="text"
          placeholder="Search (e.g., GPT, text, image)..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-3 mb-5 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm capitalize font-semibold border shadow-sm transition",
                selectedType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ModelSection title="Free Models" models={freeModels} color="green" darkMode={darkMode} />
          <ModelSection title="Paid Models" models={paidModels} color="red" darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

const ModelSection = ({ title, models, color, darkMode }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-4 text-${color}-600 dark:text-${color}-400`}>{title}</h2>
    <div className="space-y-4">
      {models.length ? models.map((model, idx) => (
        <a
          key={idx}
          href={model.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className={clsx(
            "p-4 rounded-xl shadow hover:shadow-lg transition-all flex items-center gap-4 border",
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          )}>
            <img
              src={model.logo}
              alt={`${model.name} logo`}
              className="h-10 w-10 object-contain rounded bg-white"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div className="flex-1">
              <p className="text-lg font-semibold group-hover:underline">{model.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 capitalize">{model.type} model</p>
            </div>
            <span className={clsx(
              "text-xs px-2 py-1 rounded-full font-medium",
              model.paid
                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
            )}>
              {model.paid ? "Paid" : "Free"}
            </span>
          </div>
        </a>
      )) : (
        <p className="text-gray-500 dark:text-gray-400 italic">No models match your filters.</p>
      )}
    </div>
  </div>
);

export default HomePage;
