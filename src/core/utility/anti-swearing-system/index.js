import AntiSwearingWords from "../../constants/anti-swearing-words";

const AntiSwearingSystem = (text) => {
  if (text) {
    const hasInappropriateWords = AntiSwearingWords.some((word) =>
      text.includes(word)
    );

    return hasInappropriateWords;
  }
};

export default AntiSwearingSystem;
