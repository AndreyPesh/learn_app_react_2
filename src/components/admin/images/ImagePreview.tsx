interface ImagePreviewProps {
  file: string;
  remove: () => void
}
const ImagePreview = ({ file, remove }: ImagePreviewProps) => {
  return (
    <div className="loader-image__preview-item">
      <img src={file} className="loader-image__icon" />
      <span className="cross-close" data-notclose onClick={remove}></span>
    </div>
  );
};

export default ImagePreview;
