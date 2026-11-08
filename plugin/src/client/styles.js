/**
 * Chatbox Pet stylesheet.
 *
 * Injected once into document.head with data-plugin="chatbox-pet". The pet is
 * an asset, not chrome: the only host-token surfaces are the bubble (overlay
 * surface, hairline, one float shadow) and the focus ring. The single soft
 * contact shadow under the feet is the pet's only elevation cue.
 */
export const CSS = `
.cbp-root{
  position:relative;
  height:0;
  /* Mirror the composer card's geometry (same recipe as prompt-boost's
     panel, both vars verified in dsh-client-ui-conversation): the dock row
     itself is full width, so the root must re-derive the card's width and
     center itself before the stage can anchor to the card's right edge. */
  width:min(
    calc(100% - var(--dsh-composer-side-clearance, 16px)*2),
    var(--dsh-composer-card-max-width, 952px)
  );
  margin:0 auto;
  overflow:visible;
  pointer-events:none;
  z-index:20;
}
.cbp-stage{
  position:absolute;
  right:12px;
  bottom:0;
  width:112px;
  height:84px;
  pointer-events:none;
}
.cbp-pet{
  position:relative;
  display:block;
  width:112px;
  height:84px;
  padding:0;
  border:0;
  background:transparent;
  cursor:pointer;
  pointer-events:auto;
  overflow:hidden;
  border-radius:var(--dsw-radius-md);
  appearance:none;
  animation:cbp-fade-in 200ms cubic-bezier(.23,1,.32,1);
}
.cbp-pet:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:2px;
}
/*
 * The clips are 640x360 with the character off-center (bbox centers x 326-388,
 * union over all frames per clip, measured with libvpx alpha decode). The
 * crop window is centered on source (350,180): at 154px wide the video renders
 * the idle character ~69px tall, and every clip's head/tail/feet extremes stay
 * inside the 112x84 box — verified frame-by-frame against idle-breathe,
 * act-typing, act-reading, act-shy, act-thunderbolt, click-wave, click-angry.
 * Only click-wave's waving-hand sweep grazes the right edge, which is action,
 * not the body. Absolute sizing, no layout cost, hit area stays the container.
 */
.cbp-pet video{
  position:absolute;
  left:-28px;
  top:-1px;
  width:154px;
  height:auto;
  max-width:none;
}
.cbp-pet img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
}
.cbp-pet::after{
  content:"";
  position:absolute;
  left:18%;
  right:18%;
  bottom:4px;
  height:8px;
  border-radius:50%;
  background:radial-gradient(ellipse at center,
    color-mix(in oklab,var(--dsw-alias-label-primary) 22%,transparent),
    transparent 70%);
  z-index:-1;
  pointer-events:none;
}
/*
 * Bubble v2: a compact speech bubble on the host's overlay recipe — overlay
 * surface, 10% hairline, one soft elevation, 12px/500 ink. The tail is a
 * rotated square sharing surface + hairline, bottom-right, pointing at the
 * pet's head. The only per-status cue is the 3px accent rule on the left:
 * Pikachu yellow normally, the host error token on error. The bubble grows
 * leftward from its right anchor (the pet is at the viewport's right edge),
 * so it can never clip outside the conversation column.
 */
.cbp-bubble{
  position:absolute;
  right:20px;
  bottom:calc(100% + 8px);
  box-sizing:border-box;
  /*
   * width:max-content, not the default shrink-to-fit: the bubble's containing
   * block is the 112px pet stage, and shrink-to-fit would cap the bubble at
   * 92px — a long line then wrapped into a tall narrow column. max-content
   * lets the bubble grow to its text (and max-width still wraps it).
   */
  width:max-content;
  max-width:236px;
  padding:6px 10px 6px 13px;
  border-radius:var(--dsw-radius-md);
  background:var(--dsw-alias-bg-overlay);
  color:var(--dsw-alias-label-primary);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  box-shadow:0 4px 16px -6px color-mix(in oklab,var(--dsw-alias-label-primary) 18%,transparent);
  font-size:12px;
  line-height:1.45;
  font-weight:500;
  pointer-events:none;
  opacity:0;
  visibility:hidden;
  transform:translateY(6px);
  transition:opacity 120ms ease,transform 120ms ease,visibility 0s linear 120ms;
}
.cbp-bubble--visible{
  opacity:1;
  visibility:visible;
  transform:translateY(0);
  transition:opacity 180ms cubic-bezier(.2,0,0,1),transform 180ms cubic-bezier(.2,0,0,1);
}
.cbp-bubble::before{
  content:"";
  position:absolute;
  left:5px;
  top:7px;
  bottom:7px;
  width:3px;
  border-radius:999px;
  background:#E9A13B;
}
body[data-ds-dark-theme] .cbp-bubble::before{
  background:#FFC46B;
}
.cbp-bubble--error::before{
  background:var(--dsw-alias-state-error-primary);
}
.cbp-bubble::after{
  content:"";
  position:absolute;
  right:22px;
  bottom:-5px;
  width:10px;
  height:10px;
  background:var(--dsw-alias-bg-overlay);
  border-right:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  border-bottom:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  border-bottom-right-radius:4px;
  transform:rotate(45deg);
}
.cbp-bubble-text{
  display:block;
  max-width:180px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
/* A small-talk line is a sentence, not a status hint: it wraps instead of
   being cut, and the bubble grows with it. */
.cbp-bubble--quip{
  max-width:264px;
}
.cbp-bubble--quip .cbp-bubble-text{
  max-width:none;
  white-space:normal;
  overflow:visible;
  text-overflow:clip;
  line-height:1.5;
}
/*
 * The sound toggle: a small ghost icon button at the pet's top-left. Hidden
 * until the pet is hovered or focus is inside it — except when muted, where
 * it stays visible so the user can always find the way back.
 */
.cbp-sound{
  position:absolute;
  top:-6px;
  left:-6px;
  z-index:2;
  width:24px;
  height:24px;
  padding:4px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:0;
  border-radius:999px;
  background:transparent;
  cursor:pointer;
  pointer-events:auto;
  color:var(--dsw-alias-label-secondary);
  opacity:0;
  visibility:hidden;
  transition:opacity 100ms ease,background-color 100ms ease,color 100ms ease,visibility 0s linear 100ms;
}
.cbp-stage:hover .cbp-sound,
.cbp-stage:focus-within .cbp-sound,
.cbp-sound[aria-pressed="false"]{
  opacity:1;
  visibility:visible;
  transition:opacity 100ms ease,background-color 100ms ease,color 100ms ease;
}
.cbp-sound:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-sound:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:1px;
  opacity:1;
  visibility:visible;
}
.cbp-sound svg{
  width:14px;
  height:14px;
  display:block;
}
@keyframes cbp-fade-in{
  from{opacity:0}
  to{opacity:1}
}
@media (prefers-reduced-motion: reduce){
  .cbp-pet{animation:none}
  .cbp-bubble,
  .cbp-bubble--visible{transition:opacity 120ms ease,visibility 0s linear 120ms;transform:none}
  .cbp-bubble--visible{transition:opacity 180ms ease}
  .cbp-sound{transition:none}
}

/*
 * Context menu: portalled to document.body (the composer dock clips its own
 * children, so an in-dock menu would be cut at the card edge). Host overlay
 * surface + hairline + one float shadow, matching the bubble's recipe so the
 * pet's two popovers read as one family. Chips are quiet by default and only
 * tint on hover, so 17 actions never look like a wall of buttons.
 */
.cbp-menu{
  position:fixed;
  z-index:2147483000;
  box-sizing:border-box;
  padding:10px;
  border-radius:var(--dsw-radius-lg, 12px);
  background:var(--dsw-alias-bg-overlay);
  color:var(--dsw-alias-label-primary);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  box-shadow:0 16px 40px -12px color-mix(in oklab,var(--dsw-alias-label-primary) 28%,transparent);
  font-size:12px;
  line-height:1.4;
  animation:cbp-menu-in 120ms cubic-bezier(.23,1,.32,1);
}
@keyframes cbp-menu-in{
  from{opacity:0;transform:translateY(4px);}
  to{opacity:1;transform:translateY(0);}
}
.cbp-menu-label{
  display:block;
  margin:0 0 6px;
  color:var(--dsw-alias-label-secondary);
  font-size:11px;
  font-weight:500;
  letter-spacing:.02em;
}
.cbp-menu-row{
  display:flex;
  gap:6px;
  align-items:center;
}
.cbp-menu-input{
  box-sizing:border-box;
  flex:1 1 auto;
  min-width:0;
  height:28px;
  padding:0 8px;
  border-radius:var(--dsw-radius-md);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 14%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 92%,var(--dsw-alias-label-primary) 8%);
  color:var(--dsw-alias-label-primary);
  font:inherit;
  font-size:12px;
}
.cbp-menu-input:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:1px;
}
.cbp-menu-submit{
  flex:0 0 auto;
  height:28px;
  padding:0 12px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:var(--dsw-alias-brand-primary);
  color:#fff;
  font:inherit;
  font-size:12px;
  font-weight:500;
  cursor:pointer;
}
.cbp-menu-submit:disabled{
  opacity:.45;
  cursor:default;
}
.cbp-menu-actions{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}
.cbp-menu-grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:4px;
  max-height:168px;
  overflow:auto;
  scrollbar-width:none;
}
.cbp-menu-grid::-webkit-scrollbar{display:none;}
.cbp-menu-chip{
  height:26px;
  padding:0 6px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font:inherit;
  font-size:12px;
  line-height:1;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.cbp-menu-chip:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-menu-chip:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-2px;
}
.cbp-menu-hint{
  margin:8px 0 0;
  color:var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font-size:11px;
  opacity:.8;
}

/* Remembered lines: the list the reader built by making the pet talk. One row
   per line, ellipsised, newest first; "clear" sits in the section label. */
.cbp-menu-recent{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}
.cbp-menu-recent .cbp-menu-label{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
}
.cbp-menu-forget{
  border:0;
  background:transparent;
  color:var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font:inherit;
  font-size:11px;
  cursor:pointer;
  padding:0 2px;
  border-radius:var(--dsw-radius-sm, 4px);
}
.cbp-menu-forget:hover{color:var(--dsw-alias-label-primary);}
.cbp-menu-recent-list{
  display:flex;
  flex-direction:column;
  gap:2px;
  max-height:132px;
  overflow:auto;
  scrollbar-width:none;
}
.cbp-menu-recent-list::-webkit-scrollbar{display:none;}
.cbp-menu-recent-item{
  height:24px;
  padding:0 6px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font:inherit;
  font-size:12px;
  text-align:left;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.cbp-menu-recent-item:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-menu-recent-item:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-2px;
}

/* Small talk: the seven kinds the pet can bring up. Same chip shape as the
   actions, one section higher, because it is the pet talking, not the menu. */
.cbp-menu-quip{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}

/* Where a small-talk line came from ('记忆' / '听记' / '瞬间'). A quiet tag
   above the line, so the reader knows the pet is quoting their own notes. */
.cbp-bubble-source{
  display:block;
  margin:0 0 3px;
  color:var(--dsw-alias-label-secondary);
  font-size:10px;
  font-weight:500;
  letter-spacing:.04em;
  opacity:.75;
}
`;
