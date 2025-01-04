# Text Speech

Web APIs SpeechSynthesis

```js
const sentence = view(
  Inputs.textarea({
    label: "Sentence",
    placeholder: "What would you like to hear?",
  })
);
```

```js
const voices = speechSynthesis.getVoices();

const selectLanguage = view(
  Inputs.select(voices, {
    label: "Voices",
    format: (voice) => `${voice.name} (${voice.lang})`,
  })
);
```

```js
function speak() {
  const utterance = new SpeechSynthesisUtterance(sentence);

  const voices = speechSynthesis.getVoices();
  utterance.voice = selectLanguage;

  speechSynthesis.speak(utterance);
}

const speakButton = view(Inputs.button("Speak", { reduce: () => speak() }));
```
