/**
 * Host half of the Chatbox Pet bundle.
 *
 * One bundle, three independently switchable features: the composer Pikachu,
 * the prompt rewriter, and the video reader tool. All behaviour lives in
 * `src/host/`; this file is only wiring, so the bundle stays loadable even when
 * a Host service is missing.
 */
import { registerRoutes } from './src/host/routes.js';
import { registerVideoTool } from './src/host/video/tool.js';

export const inject = ['connection'];

/**
 * Apply the plugin.
 * @param {any} ctx - the Host plugin context.
 * @param {object} [config] - the plugin row config (initial prefs defaults).
 * @returns {void}
 */
export function apply(ctx, config) {
  try {
    registerRoutes(ctx, config);
  } catch (error) {
    console.warn('[chatbox-pet] routes failed: ' + String(error));
  }
  // 第三个功能：视频理解（宿主工具 video_read）。它和宠物/增强互不依赖，
  // 单独 try 住，工具注册失败不影响宠物与提示词增强。
  try {
    registerVideoTool(ctx, config);
  } catch (error) {
    console.warn('[chatbox-pet] video tool failed: ' + String(error));
  }
}
