/* Release gate: sharing is disabled until isolated acceptance is complete.
 * The release owner may enable each surface by changing this file in a reviewed commit.
 * This is a UI rollout switch, NOT an authorization boundary.
 */
window.LYY_SHARE_FLAGS=Object.freeze({
  article:false,
  forum:false,
  audio:false
});
