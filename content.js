function clickSkipButton() {
    const skip_intro = document.querySelector('button[data-uia="player-skip-intro"]');
    if (skip_intro) {
      skip_intro.click();
    }
    const skip_recap = document.querySelector('button[data-uia="player-skip-recap"]');
    if (skip_recap) {
      skip_recap.click();
    }
}

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === "childList" || mutation.type === "subtree") {
      clickSkipButton();
    }
  }
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, config);

clickSkipButton();