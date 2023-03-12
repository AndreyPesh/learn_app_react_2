const LIST_VALID_EXT = ['jpg', 'jpeg', 'svg', 'png'];

export const isValidExtention = (nameImage: string) => {
  const ext = nameImage.split('.').pop();
  if(!ext) {
    return false;
  }
  return LIST_VALID_EXT.includes(ext);
}

