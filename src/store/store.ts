import { proxy } from "valtio/vanilla";

import { TTimeLine } from "@/types/timeline";

export const aiImage =
  "https://effvision.com/wp-content/uploads/2024/06/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg";
export const userImage =
  "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";

export const state = proxy<TTimeLine.AppState>({
  loading: false,
  timeLine: [
    {
      from: "ai",
      text: "Hello, I'm your AI assistant. How can I help you today?",
      image: aiImage,
    },
  ],
  user: {
    inputValue: "",
  },
});
