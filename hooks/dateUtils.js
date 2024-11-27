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


export function getCurrentDateandTimeMain() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Format: YYYY-MM-DD HH:mm:ss (no milliseconds)
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}