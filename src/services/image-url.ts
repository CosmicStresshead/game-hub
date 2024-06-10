// COMPONENT
const getCroppedImageUrl = (url: string) => {
  
  // find media/ in url
  const token = 'media/';
  const index = url.indexOf(token) + token.length;
  // insert cropping parameters
  const croppedURL = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return croppedURL;
}

// EXPORT COMPONENT
export default getCroppedImageUrl;