// __mocks__/firebase.js
const initializeApp = jest.fn();
const getStorage = jest.fn(() => ({}));
const ref = jest.fn();
const getDownloadURL = jest.fn().mockResolvedValue('https://example.com/fake-resume.pdf');

module.exports = {
  initializeApp,
  getStorage,
  ref,
  getDownloadURL,
};
