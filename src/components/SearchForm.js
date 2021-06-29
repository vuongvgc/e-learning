export default function SearchForm(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  );
}
