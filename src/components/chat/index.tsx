import { html, type TemplateResult } from "lit";
import { snapshot, subscribe } from "valtio/vanilla";

import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";

import "@/style/style.css";
import { aiImage, state, userImage } from "@/store/store";
import SkeletonLoading from "../common";

function scrollToBottom() {
  const scrollContainer = document.querySelector(".container-timeline");
  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: "smooth",
    });
  }
}

async function send(): Promise<void> {
  scrollToBottom();
  state.loading = true;

  if (state.user.inputValue === "") {
    state.loading = false;
    return;
  }

  state.timeLine.push({
    from: "user",
    text: state.user.inputValue,
    image: userImage,
  });

  setTimeout(async () => {
    state.timeLine.push({
      from: "ai",
      text: "Some response from AI",
      image: aiImage,
    });

    state.loading = false;
    scrollToBottom();
  }, 1000);

  state.user.inputValue = "";
}

function renderApp(): TemplateResult {
  const stateTimeline = snapshot(state);

  return html`
    <!-- timeline talk -->
    <div class="container">
      <div class="container-timeline">
        ${repeat(
          stateTimeline.timeLine,
          ({ from, text, image }) => html`
            <div class="timeline ${from === "ai" ? "ai" : "user"}">
              <img src="${image}" alt=${from} />
              <p .innerText=${text}></p>
            </div>
          `
        )}
        ${when(stateTimeline.loading, SkeletonLoading, () => null)}
      </div>

      <!-- user input -->
      <div class="user-input">
        <textarea
          .value=${stateTimeline.user.inputValue}
          @change=${(e: any) => {
            state.user.inputValue = e.target.value;
          }}
        ></textarea>
        <button
          type="button"
          class="btn"
          ?disabled=${stateTimeline.loading}
          @click=${() => send()}
        >
          send
        </button>
      </div>
    </div>
  `;
}

// Subscribe to state changes
subscribe(state, () => {
  renderApp();
});

export default renderApp;
