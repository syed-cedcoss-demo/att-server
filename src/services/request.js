export const reActive = async () => {
  try {
    await fetch('https://node-server-setup-2-0.onrender.com/');
  } catch (error) {
    console.log('error', error);
  }
};
