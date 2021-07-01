export default function IntroBannerItem(props) {
  const { icon, title, content } = props;
  return (
    <div className="intro__item col-3">
      <div className="row">
        <div className="intro__icon col-2">
          <i className={icon}></i>
        </div>
        <div className="intro__text col-10">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
