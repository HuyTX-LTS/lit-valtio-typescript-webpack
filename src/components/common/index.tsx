import { TemplateResult, html } from "lit";
import "@/style/style.css";

const SkeletonLoading = (): TemplateResult => {
  return html` <div class="skeleton-loading">
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
    <div class="skeleton-item"></div>
  </div>`;
};

export default SkeletonLoading;
