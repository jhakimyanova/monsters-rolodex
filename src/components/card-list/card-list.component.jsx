import "./card-list.styles.css";

export const CardList = (props) => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
