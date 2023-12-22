/* created by furqan*/ 

const textElement = document.getElementById('captiond');
  const texts = [
    'Life thrives in diverse differences 🌍',
    'Embrace diversity, celebrate uniqueness 🎉',
    'Kindness speaks a universal language 💖',
    'Stop war, spread peace, create harmony ☮️',
    'Healing starts with compassion and understanding 🌱',
    'Hug those who don\'t belong to you',
    'Let them understand,& Understand them',
    'Unity brings strength and resilience 🤝',
    'Choose love, kindness over cruelty ❤️',
    'Together, build a world of empathy 🌏',
    'Positive actions transform communities 🌈',
    'Strive for a future with respected rights 🌐',
    'Empower through kindness and support 🤗',
    'Create ripples of positive change 🌊',
    'Believe in the power of collective goodness 🌟',
    'Adversity reveals true character 💪',
    'Small kindness, big impact 🌱',
    'Be the change you wish to see 🌟',
    'In life\'s tapestry, every thread is valuable 🧵',
    'Inspire through words and deeds 🌟',
    'Gratitude turns what we have into enough 🙏',
    'Cleanse your mind, nurture positivity 🧘',
    'Start positivity within yourself 🌞',
    'Hope for everyone to live abundantly 🌈',
    'Prove you\'re human in life\'s storybook 📖'
  ];

  let currentIndex = 1;

  function changeText() {
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  function fadeOut() {
    textElement.style.opacity = 0;
    setTimeout(() => {
      changeText();
      fadeIn();
    }, 500);
  }

  function fadeIn() {
    textElement.style.opacity = 1;
    setTimeout(fadeOut, 3000);
  }

  setTimeout(fadeOut, 1000);
