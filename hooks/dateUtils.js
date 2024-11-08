export const getCurrentDateandTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const days = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const miliseconds = now.getMilliseconds().toString().padStart(4, '0');

  return `${year}-${month}-${days} ${hours}:${minutes}:${seconds}:${miliseconds}`;
};