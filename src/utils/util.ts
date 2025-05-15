export function formatDuration(totalSeconds:number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
  
    // const formattedHours = String(hours).padStart(2, '0');
    // const formattedMinutes = String(minutes).padStart(2, '0');
    // const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${hours} hr`;
  }